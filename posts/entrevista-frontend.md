---
title: "Practica este ejercicio antes de tu próxima entrevista para un puesto de especialista en Frontend"
date: "2020-08-15"
draft: false
summary: "Cuando hago una entrevista a alguien que aplica a un puesto de desarrollo en Frontend, suelo ver una serie de errores comunes en la mayoría de candidatos. En este artículo te explico un ejercicio que puede servirte para practicar y aprender cómo evitarlos."
frontImageSrcSet: "/images/blog-images/entrevista-frontend/thao-le-hoang-Xl-ilWBKJNk-unsplash.jpg"
frontImageSrc: /images/blog-images/entrevista-frontend/thao-le-hoang-Xl-ilWBKJNk-unsplash.jpg
frontListImageSrc: /images/blog-images/entrevista-frontend/thao-le-hoang-Xl-ilWBKJNk-unsplash.jpg
---

¿Tienes una entrevista para un puesto de Frontend? Entonces, es muy probable que te hagan hacer una prueba para comprobar tus habilidades. Esa prueba técnica puede ser en vivo (con alguien mirando mientras programas o haciendo pair programming) o te la enviarán para hacer en casa. Pero por lo general, prepárate para que te hagan realizar alguna llamada a una API.

Cuando me involucro en procesos de selección, una de las cosas que más me interesa saber es cómo programa la persona que tengo delante. Del mismo modo, cuando comienzo con una nueva [mentoría](/mentoring), es habitual que te pida que programemos algo en la primera o la segunda sesión.

Si desarrollas aplicaciones de Frontend, es _casi_ seguro que las llamadas a servicios externos (APIs, Cloud Functions, etc) formen parte de la lógica de negocio de tu aplicación. En un proceso de selección, se pueden ver muchas cosas haciendo programar a una persona una pequeña llamada a una API. Estas son algunas de las cosas que a mi me interesa ver:

- Cómo organizas tu código (carpetas, nombres, separación de conceptos...)
- Si escribes pruebas automáticas o no
- Tus hábitos, buenos o malos
- Cómo comunicas tus decisiones
- Cuánto conoces el lenguaje, en este caso JavaScript

## Dar cera, pulir cera

En este artículo te propongo un ejercicio para que practiques tu próxima entrevista. Si tienes algunos años de experiencia, puede que tengas confianza y pienses que no te va a aportar nada todo esto que te estoy contando. Si este es tu caso, empieza directamente con el enunciado del ejercicio e intenta hacerlo sin leer mi explicación. Luego, échale un vistazo para ver cómo lo has hecho.

## Enunciado

El objetivo del ejercicio es utilizar una API de tu elección para mostrar un listado de elementos.

Ya está 😅

No, no te estoy tomando el pelo. Ese es el ejercicio. ¿Qué te parece? ¿Fácil, normal o difícil?

Por cierto, tengo un par de reglas. Espero que no te importe:

- Puedes consultar lo que necesites en cualquier web, como MDN o Stack Overflow.
- No puedes copiar código de otro proyecto, ya sea tuyo o de otra persona.
- Puedes utilizar las librerías que quieras. Aunque también está la opción de no utilizar ninguna. Solo te pido que justifiques tus decisiones de forma consciente mientras haces el ejercicio.

🚨🚨🚨 **Spoiler alert!** 🚨🚨🚨

A partir de aquí comienzo con la solución del ejercicio. Si quieres intentarlo antes, es el momento de dejar de leer. ¡Te espero!

## Elige y configura un entorno de desarrollo

Empecemos seleccionando el entorno de desarrollo con el que hacer la prueba. Voy a utilizar [create-react-app](https://github.com/facebook/create-react-app) porque es el entorno con el que más cómodo me siento y mi objetivo es pintar un listado de elementos de una API. No me interesa demostrar que sé configurar herramientas o que soy capaz de aprender a utilizar una librería en el tiempo que dura un proceso de selección. O una entrevista técnica. Tampoco quiero complicarme la vida haciéndolo en JavaScript puro, ya que nadie me lo ha pedido.

Si en tu caso estás habituado a utilizar otra librería, no te preocupes. Creo en este artículo es más interesante la explicación que la implementación.

## Elige una API

Hay varias APIs públicas que puedes elegir para practicar y está bien conocerlas para acostumbrarte a adaptarte a sus diferencias. Está bien probar con APIs que requieran autenticación de algún tipo, aunque en el artículo utilizaremos una completamente pública.

Tienes muchísimos ejemplos de APIs que puedes utilizar en el repositorio de [Public APIs](https://github.com/public-apis/public-apis). Yo utilizaré mi favorita: la [API de Pokémon](https://pokeapi.co/). Mi motivo para elegir esta en particular es que considero que está bien diseñada según el [estilo de arquitectura REST](https://en.wikipedia.org/wiki/Representational_state_transfer). Otro menos importante es que me encantan los videojuegos y saga Pokémon es de mis favoritas.

ϞϞ(๑⚈ ․̫ ⚈๑)∩.

## Empieza escribiendo un test

Voy a dar una cifra arbitraria, pero alrededor del 90% de entrevistas que he hecho a lo largo de mi carrera a candidatos no han escrito ningún test. En mi humilde opinión, si estás aplicando para un puesto de rango medio o senior, finalizar tu prueba técnica sin hacer ni un solo test **no es aceptable**.

Empezar escribiendo un test no solo te hará ganar puntos con tus entrevistadores, sino que te ayudará a enfocar tu desarrollo, centrándote en lo esencial.

Escribe la primera especificación. No hace falta que sea perfecta, ya que parte del proceso de Test-Driven Development es el refactor. Ya tendrás ocasión de mejorar tu código y tus pruebas. Pero empieza por algo, aunque sea sencillo.

Para testear aplicaciones de React, mi librería favorita en estos momentos [Jest](https://jestjs.io/), junto con [React Testing Library](https://testing-library.com/docs/react-testing-library/intro). Estuve muchos años utilizando [enzyme](https://enzymejs.github.io/enzyme/), pero no me gustaba su filosofía. Está demasiado orientada a probar detalles de implementación como cambios de estado o métodos del ciclo de vida del componente. Creo que tiene mucho más sentido escribir pruebas que realicen sus verificaciones desde el **punto de vista del usuario**. Por ejemplo:

> Mi aplicación incluye un listado de Pokémons que incluye a Bulbasaur

Traduzcamos la especificación al código de la prueba automática:

```jsx
// app.test.jsx
import React from "react";
import App from "./app";
import { render } from "@testing-library/react";

describe("Pokémon app", () => {
  it("has a list of Pokémons including Bulbasaur", () => {
    const { getByText } = render(<App />);

    expect(getByText(/bulbasaur\b/i)).toBeInTheDocument();
  });
});
```

No es la mejor implementación para probar este comportamiento, pero no te preocupes: iremos refinándola poco a poco como parte del proceso de TDD.

**Nota** La expresión regular que utilizo hace que tenga que coincidir con el nombre la palabra exacta (`\b`), sin importar minúsculas o mayúsculas (`/i`). Tienes más información [en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp).

## Implementa un prototipo

Siempre digo lo mismo a la gente que trabaja conmigo: Uno de los mejores artículos para entender la mentalidad necesaria para diseñar aplicaciones web orientadas a componentes es [Thinking in React (Pensando en React)](https://es.reactjs.org/docs/thinking-in-react.html). Te recomiendo que lo leas varias veces hasta asegurarte de que entiendes todas sus sutilezas. Interiorízalo. Practica con el ejemplo que ellos proponen o con el que haremos en este artículo. Hacerlo te ayudará a decidir la mejor estructura de componentes de tus aplicaciones.

Nosotros comenzaremos con uno de los pasos que se indican en el artículo: empezaremos escribiendo un **prototipo estático** de nuestro listado de Pokémons. Escribiremos el suficiente código para que **pase nuestro test**.

```jsx
// app.jsx
import React from "react";

export default function App() {
  return (
    <section>
      <article>Bulbasaur</article>
      <article>Ivysaur</article>
      <article>Venusaur</article>
      <article>Charmander</article>
    </section>
  );
}
```

Como ves, el código de mi componente no podría ser más sencillo. Casi me atrevería a decir que es un poco absurdo. Pero te permitirá comprobar varias cosas _antes de avanzar más_.

Déjame insistir: _haz una pequeña pausa antes de avanzar más_.

Ejecuta las pruebas y asegúrate de que pasan:

```sh
$ npm run test

✅ Pokémon app > has a list of Pokémons including Bulbasaur     19ms
```

Bien, ahora sí: siguamos. Piensa: ¿cómo podemos mejorar nuestra implementación en este punto? Lo primero que podríamos hacer es extraer cada elemento de la lista a un componente. Así podremos trabajar en darle un poco de estilo y evitar repetir código.

```jsx
// pokemon-list-item.jsx
import React from "react";

export default function PokemonListItem({ name }) {
  return <article className="list-item">{name}</article>;
}
```

Nuestro `app.jsx` quedaría así:

```jsx
// app.jsx
import React from "react";
import PokemonListItem from "./pokemon-list-item";

export default function App() {
  return (
    <section>
      <PokemonListItem name="Bulbasaur" />
      <PokemonListItem name="Ivysaur" />
      <PokemonListItem name="Venusaur" />
      <PokemonListItem name="Charmander" />
    </section>
  );
}
```

Deja los test ejecutándose en [modo --watch](https://jestjs.io/docs/en/cli#--watch) para asegurarte de que siguen estando en verde 🟢 mientras haces tus cambios.

Como ves, el componente `App` sigue teniendo código repetido. Podemos mejorarlo extrayendo un listado de Pokémon e **iterándolo** para renderizar los elementos de la lista. Aprovecharemos para mirar la [documentación de la API](https://pokeapi.co/docs/v2#resource-listspagination-section) y modelar el contrato que vamos a utilizar. Pruébala antes [en su propia web](https://pokeapi.co/) o utilizando una herramienta como [Postman](https://www.postman.com/).

La API devuelve la siguiente estructura JSON:

```json
{
  "count": 964,
  "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    }
    // ...
  ]
}
```

Aún no es el momento de lanzarte a hacer la llamada a la API en tu implementación. No hemos llegado a ese punto. Recuerda que estamos en la fase de refactor, decidiendo la mejor jerarquía de componentes para nuestra aplicación.

En su lugar, podemos tomar prestada la respuesta de la API y añadirla directamente al archivo `app.jsx`. Añade un archivo `data.json` y copia la respuesta de la API:

```json
// data.json
{
  "count": 964,
  "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    }
    // ...
  ]
}
```

Ha llegado el momento de mejorar la implementación de nuestro test y comprobar que no solo Bulbasaur aparece en el listado, sino todos los elementos de la primera página de resultados. Podemos utilizar el archivo `data.json` para escribir una nueva especificación más completa que la anterior.

**Nota:** Normalmente yo escribo la nueva sin eliminar la anterior, de modo que en la terminal de ejecución de test siga en verde. Una vez he terminado y tengo las dos en verde, elimino la primera si la considero redundante.

```jsx
it("has a list of Pokémons", () => {
  const { getByText } = render(<App />);

  for (let pokemon of data.results) {
    expect(getByText(pokemon.name)).toBeInTheDocument();
  }
});
```

Nuestro nuevo test fallará 🔴, ya que el componente App no está utilizando el JSON de datos para mostrar todos los elementos.

En `app.jsx`, importa el archivo y utiliza la propiedad `results` de la estructura de datos para pintar los elementos del listado. Como ves, es un array, así que podemos aplicar `.map()` directamente:

```jsx
// app.jsx
import data from "./data.json";

export default function App() {
  return (
    <section>
      {data.results.map((item) => (
        <PokemonListItem key={item.name} name={item.name} />
      ))}
    </section>
  );
}
```

Asegurémonos de que nuestro test sigue estando verde tras este cambio 🟢. Debería ser así, ya que el pequeño Bulbasaur sigue apareciendo en el listado.

Con esto ya nos hemos asegurado de que nuestra jerarquía de componentes visuales ya es capaz de renderizar todos los elementos de un listado. Ahora solo tenemos que proporcionárselos. Es el momento de consumir la API.

## Consume tu API

Vamos a escribir un nuevo test. Esta vez consumiremos una API y para hacerlo, utilizaremos simplemente [fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch). En el momento de escribir este artículo, Fetch lleva tiempo siendo parte del estándar ECMAScript y su [soporte en navegadores supera el 95%](https://caniuse.com/#feat=fetch). No veo un motivo para incrementar el tamaño del bundle que se envía al cliente instalando una librería adicional para realizar peticiones HTTP y me siento cómodo usándola.

Para que nuestro test pueda funcionar en cualquier entorno, debemos **escribir un mock** que simule la respuesta de llamar a fetch. De lo contrario, al ejecutarse en un entorno virtual (como por ejemplo, de integración contínua) podría no tener acceso al servidor de la api a la que llama y hacer que nuestros test fallen.

Añadiremos un paso antes de ejecutar todas las especificaciones de prueba en nuestro archivo de test:

```jsx
// app.jsx
beforeAll(() => jest.spyOn(window, "fetch"));
```

Y una nueva especificación:

```jsx
// app.test.jsx
import React from "react";
import App from "./app";
import { render, screen } from "@testing-library/react";
import data from "./data.json";

describe("Pokémon app", () => {
  beforeAll(() => jest.spyOn(window, "fetch"));

  it("shows a list of Pokémons retrieved from an API", async () => {
    // Modificamos el comportamiento de la función fetch
    // para que devuelva los resultados que nos interesan, en lugar
    // de ejecutarse
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => data,
    });

    render(<App />);

    // Comprobamos que se han obtenido los resultados utilizando fetch
    expect(window.fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon");
    expect(window.fetch).toHaveBeenCalledTimes(1);

    // Comprobamos que la aplicación renderiza la colección de resultados proporcionada por el mock
    for (let pokemon of data.results) {
      expect(await screen.findByText(new RegExp(`${pokemon.name}\\b`, "i"))).toBeInTheDocument();
    }
  });
});
```

Si observas tu batería de ejecución de pruebas, verás que la nueva especificación falla, ya que la aplicación no está utilizando fetch:

```sh
$ npm run test

FAIL  src/app.test.jsx
  Pokémon app
    ✅ has a list of Pokémons including Bulbasaur (9ms)
    ✅ has a list of Pokémons (18ms)
    ❌ shows a list of Pokémons retrieved from an API (4ms)

🔴 Pokémon app › shows a list of Pokémons retrieved from an API
   expect(jest.fn()).toHaveBeenCalledWith(...expected)

   Expected: "https://pokeapi.co/api/v2/pokemon"
   Number of calls: 0
```

Ha llegado el momento de hacer la implementación. El código de la llamada a la API lo escribiré en un archivo dentro de una carpeta a la que voy a llamar `services`. Me gusta llamarlo así para evitar hablar en la estructura de carpetas de las decisiones de infraestructura utilizadas. Podría utilizar otro nombre, como por ejemplo `api`. Pero entonces tendría que cambiar el nombre de la carpeta y todos los `import` que hacen referencia a ella en caso de cambiar de una API a otra opción (Firebase, GraphQL...).

```js
// /services/pokemons.js
export async function getPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const { results } = await response.json();
  return results;
}
```

Ahora solamente tenemos que consumirlo en el componente `app.jsx` y dejar de utilizar el archivo `data.json`:

```jsx
import React from "react";
import PokemonListItem from "./pokemon-list-item";
import { getPokemons } from "./services/pokemons";

export default function App() {
  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    getPokemons().then(setPokemons);
  }, []);

  return (
    <section>
      {pokemons.map((item) => (
        <PokemonListItem key={item.name} name={item.name} />
      ))}
    </section>
  );
}
```

## Estructura de archivos

## No olvides la gestión de errores

## Algunos errores comunes que he visto en muchos procesos de selección

Quiero detenerme a explicarte algunos de los errores más frecuentes que he visto en las entrevistas que he hecho, hasta este punto.

### Olvidarse de cómo se escribe un componente o la firma de una función

Si ya estás trabajando con una aplicación y te acostumbras a _copiar y pegar_ el código de otro componente al crear uno nuevo, puede que sea un mal hábito. También es frecuente utilizar _snippets_ que te autocompletan código en tu editor favorito, como [este](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets). Eso está bien si vas a la entrevista con tu equipo portátil. Pero ¿y si te hacen programar en uno de los suyos o en una herramienta online?.

Asegúrate de repasar cómo funciona el código que utilizas a diario. Si copias o utilizas alguna herramienta como la citada anteriormente, hazlo de forma consciente sin olvidar qué trabajo te están ahorrando hacer. O al menos, acuérdate dónde buscar esa información si te quedas en blanco.

### Hacer sobreingeniería

Otro error frecuente: empezar a añadir archivos y carpetas con **Components**, **Containers**, **Reducers**, **instalar Redux** u otra librería de gestíon de estados. Olvídate de todo eso. No necesitas hacer sobreingeniería con una aplicación tan sencilla. Si alguien quisiera ver si sabes manejarte con una gestión de estados compleja, te habrían puesto un problema más difícil.

Al contrario: evita caer en la trampa y **cíñete a seguir el ciclo de Test-Driven Development**:

- 🔴 Escribe un test que falle.
- 🟢 Escribe el código mínimo para hacer que el test pase.
- 🔵 Refactoriza antes de escribir el siguiente test.

La habilidad para evitar esto puede marcar la diferencia en una entrevista técnica.

### No saber gestionar tu tiempo.

Mucha gente quiere demostrar que conoce JavaScript en profundidad y se lanza a implementar el ejercicio en JavaScript puro. Sin librerías. Esto no es una mala decisión si la primera vez que lo haces no es en la entrevista, o si te lo piden explícitamente. Pero puede ser complicado diseñar un sistema de renderizado de componentes que además demuestre que sabes escribir código limpio.

También he visto pruebas en las que se ha evitado utilizar _bootstrappers_ como `create-react-app`, con un montón de configuración. Es guay que sepas cómo configurar Babel, Webpack, Prettier, Eslint... ¿Pero realmente crees que es lo que quiero ver con este ejercicio? Solo te he pedido que muestres los resultados de la llamada a una API. No pierdas el tiempo. Nadie se lo va a mirar.

Huelga decir que si la entrevista es un Live Coding, es decir: en directo... **me parece un suicidio**. Una de las habilidades que me gusta ver en este tipo de entrevistas es **cómo gestionas tu tiempo para entregar el máximo valor posible**.

### Entregar el resultado con warnings

A veces tu código funciona, pero la consola arroja errores o advertencias que te dan información importante, pero de forma silenciosa para tus usuarios. Por ejemplo: un clásico es olvidarse las `key` en los elementos de un listado de React. Tener que añadir una clave única a cada elemento no es demasiado intuitivo. Llevo cinco años trabajando con React y reconozco que aún se me olvida. Para evitar estas cosas, es bueno coger el **hábito de ir revisando la consola** del browser. Los warnings te darán pistas de los errores que se te han escapado.

Si estás en una entrevista, prepárate para que te pregunten **por qué es importante utilizar keys en los listados**. Si crees que no puedes explicarlo, échale un vistazo a [este artículo de Kent C. Dodds](https://kentcdodds.com/blog/understanding-reacts-key-prop) donde lo explica perfectamente.

### Entregar el código con tests fallando

Lo primero que voy a hacer si me envías una prueba técnica es `npm install`. Lo segundo, `npm run test`. Aquí pueden pasar tres cosas, ordenadas en orden de probabilidad:

1. No hay tests
2. Hay tests, pero alguno (o más) fallan
3. Hay tests! 🍾

Vigila esto, antes de dar por finalizado el ejercicio. Causa muy mala impresión y una sensación de falta de atención en los detalles. No empiezes el partido con un gol en contra.

## Conclusiones

Bla bla bla

<small>Foto de la cabecera de [Thao Le Hoang](https://unsplash.com/@h4x0r3?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) en [Unsplash](https://unsplash.com/s/photos/kata?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)</small>
