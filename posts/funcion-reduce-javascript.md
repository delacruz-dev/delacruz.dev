---
title: "Manipular listas en JavaScript: La función reduce()"
date: "2020-10-11"
draft: false
summary: "En este artículo explico cómo se utiliza uno de los métodos que proporciona JavaScript para manipular listas. Se trata de la función reduce(), que te permite tomar todos los elementos de un listado y reducirlos a un único valor como resultado."
frontImageSrcSet: "/images/blog-images/cederic-vandenberghe-KsAwr1ZHQro-unsplash.jpg"
frontImageSrc: /images/blog-images/cederic-vandenberghe-KsAwr1ZHQro-unsplash.jpg
frontListImageSrc: /images/blog-images/cederic-vandenberghe-KsAwr1ZHQro-unsplash.jpg
---

La función `.reduce()` te será útil para tomar todos los elementos de una lista, aplicar una función a cada uno de ellos y **acumular el resultado en un valor** de salida. La principal diferencia con [la función `map()`](https://delacruz.dev/blog/funcion-map-javascript) es que ésta siempre va a devolver un nuevo Array. Sin embargo, como verás, `reduce()` es más flexible.

La firma de la función es la siguiente:

```js
const resultado = lista.reduce(function callback(valorAnterior, valorActual) {
  return; /* resultado de la función callback */
}, valorInicial);
```

<small>**Nota:** La firma no es _exactamente_ esta, pero no quiero complicarla para facilitar la explicación. Si quieres saber cuál es la firma completa, puedes consultarla en [su página en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce).</small>

Vamos a verla poco a poco:

- **resultado** es una variable que recogerá el valor después de haber aplicado la función `reduce()`.
- **reduce** es la función de la que estamos hablando. Todas las listas de tipo `Array` tienen una función `.reduce()` que puedes invocar. Recibe dos parámetros: una función `callback` y el valor inicial.
- **callback** es una función que se pasa como primer parámetro a la función `reduce()`. A su vez, `callback()` recibe dos parámetros: el valor anterior y el valor actual. Lo que va a hacer reduce es **recorrer todos los elementos de la lista y aplicar la función callback**. El valor anterior será el resultado devuelto por la ejecución anterior de `callback()`. Si es la primera vez, será el `valorInicial`. Para el valor actual, asignará el elemento que esté evaluando en ese momento.
- **valorInicial** Es el valor que `reduce` le pasará a `callback` como `valorAnterior` la primera vez que lo ejecute. Este valor es **opcional** y si no le pasas nada, se utilizará el primer elemento de la lista y se saltará al segundo.

Sé que puede ser un poco complicado, pero ahora veremos un ejemplo. A mí me ayuda imaginarme la función `reduce` como una cadena de montaje. Por ejemplo, de un coche. El primer operario atornilla las puertas, cuando termina el segundo las pinta, el tercero pone las ruedas. Pero cada uno empieza a trabajar en el coche después de que el anterior haya hecho su trabajo con él. Al final de la cadena, tienes el coche completamente montado.

Vamos a ver un ejemplo:

```js
const partesDelCoche = ["asientos", "volante", "puertas", "ruedas", "pintura metalizada"];

const coche = partesDelCoche.reduce(function (valorAnterior, valorActual) {
  return `${valorAnterior} ${valorActual},`;
}, "Mi coche tiene: ");
```

`.reduce()` va a tomar el primer elemento de la lista de `partesDelCoche` y va a ejecutar la función que le he pasado como primer parámetro. Como es la primera iteración, estamos mirando el primer elemento de la lista y no existe un `valorAnterior`. Así que el valor anterior será el valor inicial. El texto `"Mi coche tiene: "`. El valor actual será `"asientos"`, que es el primer elemento de la lista. Como resultado, devuelve un nuevo string combinando ambas variables mediante una [plantilla de cadena de texto](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings).

Es decir, la primera ejecución de la función tendrá esta pinta:

```js
function (valorAnterior /* "Mi coche tiene: " */, valorActual /* "asientos" */) {
  return `${valorAnterior} ${valorActual},`; /* "Mi coche tiene: asientos," */
}
```

La segunda iteración **tomará como valor anterior el resultado de la anterior ejecución**. Es decir: `"Mi coche tiene: asientos,"`. Recuerda el ejemplo de la cadena de montaje. El primer operario ya ha montado los asientos en el coche y el siguiente de la cadena lo recibe para hacer su trabajo. El `valorActual` será el segundo elemento de la lista: `"volante"`.

La segunda ejecución de la función será así:

```js
function (valorAnterior /* "Mi coche tiene: asientos " */, valorActual /* "volante" */) {
  return `${valorAnterior} ${valorActual},`; /* "Mi coche tiene: asientos, volante," */
}
```

Y así hasta llegar al último elemento. ¿Puedes ejecutar mentalmente todos los elementos de la lsita? ¿Da el resultado que esperabas?

El valor final que se devolverá y se almacenará en la variable `coche` es: `"Mi coche tiene: puertas, ruedas, pintura metalizada, volante, asientos,"`.

<small>**Nota:** Tal vez te preguntes cómo puedes eliminar esa última coma. Hay varias maneras: puedes hacer un [substring](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/substring), por ejemplo. Aunque para algo así yo ni siquiera usaría un `.reduce()`, sino un [join](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/join). Pero quería utilizar el ejemplo de la cadena de montaje, así que sígueme el rollo 😉</small>

## Ejemplo sin valor inicial

Si recuerdas mi artículo anterior sobre la [función Map](https://delacruz.dev/blog/funcion-map-javascript), allí vimos cómo no tienes por qué declarar la función de callback en el momento de utilizar `.reduce()`, sino que puedes pasarle cualquier función que tenga la misma firma. Esto te permitirá hacer código más limpio y legible.

Por ejemplo, si quieres **sumar todos los elementos de una lista**, puedes escribirlo así:

```js
function suma(a, b) {
  return a + b;
}

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const resultado = numeros.reduce(suma);

console.log(resultado); // 450
```

Fíjate que al no pasarle nada como valor inicial, la primera ejecución de suma ha saltado a la segunda posición (`20`) y ha tomado como valor inicial el primer elemento del array (`10`). Es decir, la primera ejecución de suma recibe:

Puedes ser muy creativo con el valor inicial que le pasas a una función reduce y el valor que devuelve.

```js
function suma(a /* 10 */, b /* 20 */) {
  return a + b; /* 30 */
}
```

La segunda ejecución, tomará el resultado de la ejecución anterior, `30`, y evaluará la tercera posición del array, que en este caso también es `30`:

```js
function suma(a /* 30 */, b /* 30 */) {
  return a + b; /* 60 */
}
```

La siguiente será `60` y `40` y así sucesivamente hasta devolver el resultado de la última suma.

## Seamos creativos

Una de las cosas que más me gustan de JavaScript es que es muy flexible, lo cual te permite ser muy creativo. El valor inicial te permite pasarle _cualquier cosa_ y devolver _cualquier cosa_. Recuerda: la diferencia con `.map()` es que Map siempre devuelve una lista, pero aquí tienes más posibilidades. Por ejemplo, puedes convertir una lista de objetos en un único objeto.

Imagina que tienes una lista de productos que vienen modelados como objetos con su `id`, `nombre` y `precio`:

```js
const productos = [
  {
    id: "apple-watch-s6",
    nombre: "Apple Watch Series 6",
    precio: "429,00 €",
  },
  {
    id: "iphone-se",
    nombre: "iPhone SE",
    precio: "489,00 €",
  },
  {
    id: "macbook-air",
    nombre: "Macbook Air",
    precio: "1.199,00 €",
  },
];
```

Esta lista es conveniente si quieres mostrar una lista de productos, pero si quieres acceder al precio de un producto en concreto, tienes que recorrerla hasta encontrarlo. Sería más conveniente tener un objeto y acceder directamente por su id:

```js
const productos = {
  "macbook-air": {
    id: "macbook-air",
    nombre: "Macbook Air",
    precio: "1.199,00 €",
  },

  /* ... */
};
```

Podemos utilizar `.reduce()` para convertir el listado de productos original en una estructura de datos más conveniente, como la del segundo ejemplo.

```js
productos.reduce(
  function (valorAnterior, valorActual) {
    return Object.assign(valorAnterior, { [valorActual.id]: valorActual });
  },
  {} /* el valor inicial es un objeto vacío */
);
```

La función `.reduce()` comenzará con un objeto vacío `{}` como valor inicial. Dentro de la función callback, se hará un [Object.assign](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/assign) por cada elemento de la lista para copiar las propiedades del segundo objeto en el original (el objeto vacío que pasamos como valor inicial).

Ese segundo objeto tiene solo una [propiedad dinámica o computada](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names). Es decir, el nombre de la propiedad tomará el valor de la variable que pasemos entre corchetes: `[]`. Nos interesa acceder a los productos por su id, así que ese es el valor que utilizo para construir las propiedades del nuevo objeto: `[valorActual.id]`.

Vamos paso a paso una vez más. La primera iteración llamará a la función callback con los siguientes parámetros:

```js
function (valorAnterior /* {} */, valorActual /* { id: "apple-watch-s6", ... } */) {
  /**
   * El segundo parámetro de Object.assign es un objeto con una propiedad.
   * El nombre de la propiedad es el id de valorActual.
   * El valor es el propio valorActual.
   *
   * { "apple-watch-s6": { id: "apple-watch-s6, nombre: "Apple Watch Series 6", ... }}
   */
  return Object.assign(valorAnterior, { [valorActual.id]: valorActual });
}
```

La segunda iteración tendrá el objeto que hemos generado anteriormente y se le añadirá uno nuevo, asignado a una propiedad que se obtendrá del id del elemento en la segunda posición. Y así consecutivamente.

Al terminar, si quieres saber el precio del Apple Watch Series 6, puedes hacer:

```js
productos["apple-watch-s6"].price;
```

En lugar de recorrer toda la lista.

## Conclusión

La función `.reduce()` es súper potente y muy práctica para manipular listados. No dudes en permitirte ser creativo o creativa y utilizarla para transformar listas en estructuras de datos más convenientes o aplicar funciones para hacer tu código más legible.

<small>Foto de la cabecera de [Cederic Vandenberghe](https://unsplash.com/@cedericvandenberghe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) en [Unsplash](https://unsplash.com/@cedericvandenberghe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)</small>
