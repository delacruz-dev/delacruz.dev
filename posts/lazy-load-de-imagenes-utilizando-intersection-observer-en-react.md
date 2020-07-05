---
title: "Lazy load de imágenes utilizando Intersection Observer API en React"
date: "2018-01-07"
draft: false
frontImageSrc: /images/blog-images/lazy-load-header.png
frontListImageSrc: '/images/blog-images/lazy-load-header.png'
summary: 'Hace poco buscaba una forma de hacer "carga perezosa" o diferida (lazy loading) de las imágenes en una aplicación hecha con React. Descubrí la API de Intersection Observer y te explico cómo funciona.'
---

Hace poco buscaba una forma de hacer carga perezosa ([lazy
loading](https://en.wikipedia.org/wiki/Lazy_loading)) de imágenes en una
aplicación hecha en React, y descubrí la [API de Intersection
Observer](https://w3c.github.io/IntersectionObserver/).

Antaño, calcular la visibilidad de un componente objetivo respecto a otro
relativo era bastante engorroso de implementar. Tenías que escuchar eventos del
scroll, con cuidado de no sobrecargar de operaciones el hilo principal de
ejecución de la aplicación, y todo tipo de cosas raras. Se podía, pero no era
trivial. O al menos, a mi no me lo parecía 😔

Intersection observer viene para resolver estos problemas, delegando los
cálculos más complicados al navegador y vigilando (u _observando_) los elementos
que queremos sobre los que queremos realizar alguna acción en función de su
visibilidad.

En este post compartiré cómo funciona Intersection Observer y cómo utilizarlo en
una aplicación en la que quieras hacer _lazy loading_ de imágenes.

## Creando la aplicación

> TL;DR: En esta sección explicaré qué tipo de aplicación voy a utilizar de
> ejemplo y cómo crearla, para dar un poco de contexto. Si solo te interesa cómo
> implementar Intersection Observer, pasa a la siguiente sección. O si lo
> prefieres, ve directamente al _[repositorio con el código del
> ejemplo](https://github.com/delacruz-dev/lazy-loading-pokemons)_.

Vamos a crear una lista de elementos que contienen imágenes. Para conseguir una
buena lista de imágenes, voy a utilizar una de mis APIs públicas de Internet
favoritas: la [pokéapi](https://pokeapi.co/). Una API RESTFul inspirada en el
mundo de Pokémon ϞϞ(๑⚈ ․̫ ⚈๑)∩

Voy a crear la aplicación utilizando
[create-react-app](https://github.com/facebookincubator/create-react-app), para
no perder el tiempo con configuraciones:

```sh
$ create-react-app lazy-loading-pokemons
```

### Obtener las imágenes

En este punto vamos a hacer un poco de trampa, ya que si estuviésemos usando una
API REST convencional, debería obtener la lista de _/pokemons_ y luego obtener
el recurso asociado a los _sprites_ de imágenes de cada pokémon. Pero como me
conozco la API, sé que todos los sprites se encuentran bajo la misma URL:

```js
const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
```

Donde el id es el [identificador del Pokémon en la
Pokédex](https://www.pokemon.com/us/pokedex/) que, como sabrás, son
correlativos. Así que puedo crear una función muy sencilla sólo para obtener las
imágenes que me sirva para montar la aplicación de ejemplo. La siguiente función
crea un Array de 150 elementos y luego los mapea para crear objetos _falsos_ con
el id del Pokémon y el enlace al _sprite_:

```js
async function fetchPokemons() {
  return await Array.apply(null, { length: 150 }).map((item, index) => {
    return {
      id: index + 1,
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
    };
  });
}
```

### Crear los componentes de React necesarios

Lo primero que haré será modificar el nodo raíz de la aplicación generada por
create-react-app: **App.js**, para que solo obtenga los Pokémon y muestre una
lista de elementos:

```js
// App.js

import React from "react";
import List from "./List";
import ListItem from "./ListItem";
import fetchPokemons from "./fetchPokemons";

export default class App extends Component {
  state = { pokemons: [] };

  async componentDidMount() {
    const pokemons = await fetchPokemons();
    this.setState({ pokemons });
  }

  render() {
    return (
      <List>
        {this.state.pokemons.map(({ id, sprite }) => (
          <ListItem key={id} sprite={sprite} />
        ))}
      </List>
    );
  }
}
```

Lo siguiente es crear un componente para la lista de elementos: **List.js** el
cual, como puedes ver, no tiene demasiado misterio:

```js
// List.js

import React from "react";

const List = ({ children }) => <ul>{children}</ul>;

export default List;
```

La lista va a mostrar elementos, donde voy a tener la imagen, así que también
necesitaré un componente **ListItem.js**. De momento también es muy sencillo:

```js
// ListItem.js

import React from "react";

const ListItem = ({ sprite }) => (
  <li>
    <img src={sprite} />
  </li>
);

export default List;
```

### Árbol de peticiones HTTP sin Lazy-loading

Un rápido vistazo a la pestaña _Network_ de las herramientas de desarrollo de
Chrome muestra un [HAR](https://en.wikipedia.org/wiki/.har) con 151 peticiones a
imágenes. Los 150 Pokémon y el logo de la cabecera. A pesar de ser imágenes de
menos de 2KB de media, provocan un efecto devastador en la carga total de la
página, **postergando el evento window.load más de 5s después del
DOMContentLoaded** según mis condiciones de prueba, ancho de banda… etc.

![HAR de las peticiones de imágenes que se hacen si no hacemos Lazy loading](/images/blog-images/lazy-load-without.png)

### Implementar Intersection Observer en una lista de imágenes

El objetivo que quiero conseguir es evitar cargar imágenes que aparecen por
debajo del *viewport *pero, al mismo tiempo, conseguir una experiencia de
usuario fluida para que no se note que se está haciendo esta descarga de
imágenes en diferido.

### Crear una instancia de Intersection Observer para la aplicación

Para poder observar intersecciones en nuestra aplicación, primero hay que crear
una instancia del **IntersectionObserver**. No es necesario crear uno por cada
imagen, ya que una sola instancia puede escuchar tantos elementos como sea
necesario. Así que lo haremos a nivel de aplicación en **App.js**:

```js
// App.js

// ...
class App extends Component {
  state = { pokemons: [] }

  async componentDidMount () {
  // ...
```

La API de IntersectionObserver te permite registrar una función de callback que
se ejecutará en cualquier elemento que entre o salga de otro elemento (o del
_viewport_). Pero no sólo cuando entre o salga de ese elemento, sino cuando el
porcentaje de la intersección cambie un incremento definido. Este _callback_ se
proporciona como **primer argumento** del constructor. En mi ejemplo lo he
llamado **lazyLoadImageCallback**.

### Configuración para el constructor del Intersection Observer

Ignoremos el callback, de momento. Lo implementaremos después. El **segundo
argumento** del constructor es la configuración para el Intersection Observer.
El objeto de configuración puede recibir tres propiedades:

- **root: **Selector del elemento sobre el que queremos observar la intersección.
  En caso de ser **null **o **undefined**, tomará **por defecto el viewport**.
- **rootMargin:** Margen que se puede especificar del mismo modo que la propiedad
  CSS **margin**, para hacer crecer el área alrededor del elemento **root** sobre
  la que observar intersecciones.
- **threshold: **Indica el umbral, o porcentaje del área de intersección a partir
  del cual se ejecutará la función **callback.** Va de 0.0 a 1.0, siendo 1.0 el
  100%.

Voy a crear un archivo para exportar el callback y la configuración para el
Intersection Observer. En mi configuración, se empezará a disparar el *callback
*cuando las imágenes superen el umbral de intersección del 50% a 288px del
margen inferior del _viewport_:

```js
// lazyLoad.js

export const config = {
  rootMargin: "288px",
  threshold: 0.5,
};
```

> Nota: He elegido 288px porque cada sprite que me devuelve la API hace 96 x 96px.
> Quiero dar tiempo a precargar hasta tres imágenes antes de que aparezcan en el
> viewport haciendo scroll, así que 96 \* 3 = 288. Considera cambiar dinámicamente
> este número en función de la resolución.

### Asignar un observer a cada imagen de la lista

Lo siguiente que hay que hacer es elegir los elementos a observar. En el caso de
nuestra lista de _sprites_ de Pokémon, será la imagen que tenemos en el
ListItem. Para ello, tenemos que hacer que el componente reciba la **instancia
del observer** y llamar al método **.observe()** pasándole como parámetro la
referencia de la imagen.

Tenemos que modificar el componente para convertirlo en un [stateful
component](https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class)
y que pueda recibir esa prop y soportar **refs** y **lifecycle events**.

En el evento _componentDidMount_ es donde las refs están accesibles por primera
vez durante el ciclo de vida del componente. Allí será donde llamaremos a
**.observe()** pasándole como parámetro la referencia a la imagen:

```js
// ListItem.js (en negrita las modificaciones)
render () {
  return (
    <li>
      <img src={this.props.sprite} />
    </li>
  )
}
```

Ahora el componente **ListItem** está preparado para recibir una instancia de
Intersection Observer, pero aún no se la hemos pasado. Para ello, tendrás que
hacerlo allí donde tengas acceso a los ListItem’s). En mi ejemplo, es en
**App.js**:

```js
// App.js

// ...

this.state.pokemons.map(({ id, sprite }) => <ListItem key={id} sprite={sprite} />);
```

### Implementación de la función callback

Ya sólo nos falta implementar la función callback que le pasamos al constructor
de IntersectionObserver. En esta función deberemos:

- Calcular si la imagen está dentro del viewport
- Hacer que la imagen descargue el sprite de la URL

Según la documentación, el callback debe tener la siguiente forma:

```js
function
{
  // ...
}
```

El primer argumento — **entries **— , contiene una lista de elementos observados
de tipo
[IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry).
Échale un vistazo a [la
documentación](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)
para ver qué forma tiene este objeto.

De todas las propiedades que tiene _IntersectionObserverEntry_, solo me interesa
una: **isIntersecting**. Dicha propiedad valdrá **true** si se dan las
condiciones de intercepción especificadas en la configuración pasada al
constructor de Intersection Observer. Es decir, si el elemento es visible al 50%
a 288px por debajo del viewport.

> Nota: En mi ejemplo, tan solo va a tener una entrada: la imagen observada. Pero
> podría darse el caso que con un observer quisieses interceptar varios elementos
> y realizar una operación en base a la posición de varios de ellos.

El segundo argumento — **observer **— representa el propio observer sobre las
_entries_ que recibimos como primer argumento. Un detalle a tener en cuenta es
que es conveniente dejar de observar el elemento tan pronto como sea posible,
para liberar a la aplicación de eventos innecesarios. Para ello, el _observer_
proporciona el método **.unobserve()**.

La implementación de mi función de _callback_ quedaría de la siguiente forma:

```js
// lazyLoad.js

export default function lazyLoadImage(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      entry.target.src = entry.target.dataset.src;
    }
  });
}
```

Si te fijas, el truco para que las imágenes no carguen el sprite es más viejo
que Internet: **no establecer el atributo src del tag <img>**. En su lugar, lo
almaceno en un atributo **data-src** y lo asigno al src en el momento en que la
condición del observer es **true**. Para que este cambio sea efectivo, tenemos
que hacer un pequeño cambio en el **ListItem.js**:

```js
// ListItem.js

// ...

<img
  ref={(node) => {
    this.image = node;
  }}
/>
```

Otro detalle importante es **establecer las dimensiones **de las imágenes. De lo
contrario, al eliminar el src, entrarán muchas más en el viewport de las que
deberían. Pero si le damos un alto mínimo, obtendremos el comportamiento que
queremos. Los sprites de Pokémon hacen 96 x 96px. Podemos asignar las
dimensiones por CSS o directamente en el tag **<img>**:

```js
// ListItem.js

// ...

<img
  data-src={this.props.sprite}
  ref={(node) => {
    this.image = node;
  }}
/>
```

¡Y ya está! Podemos ejecutar la aplicación para ver el efecto de nuestros
cambios en el tiempo de carga de la página:

![Carga de imágenes tras implementar lazy-load con Intersection Observer](/images/blog-images/lazy-load-with.gif)

Como verás, el tiempo disparo del evento **window.load** ha bajado
dramáticamente a un valor mucho más aceptable. Y todo con una sencilla función.

### ¿Puedo empezar a usar Intersection Observer en mi aplicación web?

Sí, aunque mediante un polyfill. El soporte en navegadores todavía está bastante
verde. Un vistazo rápido a [Can I
use](https://caniuse.com/#feat=intersectionobserver) nos puede preocupar de
entrada, aunque yo creo que es más que seguro utilizarlo. Afortunadamente, el
**w3c** ofrece un [polyfill de Intersection Observer
](https://github.com/w3c/IntersectionObserver/tree/master/polyfill)que puedes
instalar con npm y funciona a las mil maravillas. Solo asegúrate de requerirlo
lo antes posible en tu aplicación y ya está.

## Conclusiones

En este ejemplo he querido explicar con un ejemplo cómo resolver de forma muy
sencilla uno de los problemas clásicos del desarrollo de aplicaciones web: la de
carga perezosa de imágenes. Como habrás podido comprobar, la implementación es
casi trivial y el resultado es muy efectivo.

Me queda pendiente que se me ocurra otro ejemplo para implementar algo que llevo
tiempo queriendo probar: mezclar el uso de Intersection Observer con _dynamic
imports_. Pero esto será para un futuro artículo.

¡Espero que te haya gustado! :)

## Referencias

- [Intersection Observer
  API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Repositorio de GitHub con el código del
  ejemplo](https://github.com/delacruz-dev/lazy-loading-pokemons)
- [React](https://medium.com/tag/react?source=post)
- [Intersection
  Observer](https://medium.com/tag/intersection-observer?source=post)

---

Me gustaría compartir mi experiencia como **programador de Front-End** contigo y convertirme en tu **mentor**. Si crees que puede interesarte, echa un vistazo a mis planes de [mentoring](/mentoring).
