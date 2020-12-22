---
title: "Qué es un memoize y cómo implementarlo en JavaScript"
date: "2020-12-13"
draft: false
imageSrc: "/images/blog-images/goran-ivos-idmvPhF8t4E-unsplash.jpg"
summary: ""
hasTweets: false
---

Si has oído hablar de la técnica de **memoize** o **memoization** en programación y quieres saber en qué consiste, para qué sirve y cómo implementarla, este es tu artículo. Voy a intentar explicártelo y darte algunos casos de uso en los que puede ser interesante aplicarla.

## ¿Qué es memoize?

Para empezar, ¿por qué se dice _memoize_ y no _memo**ri**ze_? Por lo visto, son dos palabras distintas. En [esta respuesta de Stack Overflow](https://stackoverflow.com/a/52873721) lo explican muy bien. Imagina que estás en un examen y te preguntan los 20 primeros dígitos del número Pi. La diferencia sería que **memorizar** implica estudiarlos antemano para que cuando te los pregunten, sepas responder rápidamente. En cambio, **memoizar** implicaría calcularlos por el proceso lento la primera vez sin haberlos estudiado previamente y recordar el resultado para las siguientes veces que te los pregunten.

## ¿Para qué sirve hacer un memoize?

Imagina que tienes que hacer una operación costosa, o simplemente que tarda un tiempo en ejecutarse. Por ejemplo: un cálculo, un algoritmo de búsqueda u ordenación o una llamada a una API. Tu aplicación no tendrá forma de saber el resultado la primera vez que se ejecute. Pero una vez lo tengas no tienes por qué hacerlo de nuevo para las siguientes ejecuciones, porque el resultado será el mismo. En escenarios así es cuando tiene sentido _memoizar_ el resultado.

Mira estos ejemplos con algunos tipos de funciones a las que puedes aplicar la técnica:

```js
function unCalculoMuyCostoso(parametros) {
  // Código que tarda mucho en ejecutarse 🕰.
  // Una vez hecho el cálculo, podemos devolver el resultado. ¿Por qué hacerlo otra vez?
}

function ordenar(muchosDatos) {
  // Ordenar muchos datos puede llevar su tiempo ⏳.
  // Una vez ordenados los datos, sería genial recordar cómo se han ordenado para no tener que volverlo a hacer.
}

function getProductById(id) {
  // Obtiene un producto de una API por su id.
  // La API es lentilla 🐢.
  // Una vez tengamos el producto, podemos recordarlo para tener que volver a pedírselo a la API.
}
```

## ¿Cómo implementar un memoize en JavaScript?

Para implementar un memoize, necesitamos dotar a nuestras funciones "lentas" de la capacidad para recordar el resultado de su primera ejecución.

Es decir: la función va a tener que ejecutarse por primera vez para conocer cuál es el resultado (no tiene una bola de cristal 🔮). Pero si se ejecuta más veces, debería poder "recordar" el resultado de la primera ejecución y devolverlo para responder rápidamente sin pasar por el proceso lento.

Empecemos con el ejemplo de la función que obtiene los datos de un producto de una API:

```js
async function getProductsById(id) {
  const response = await fetch(`https://example.com/products/${id}`)
  const data = await response.json()
  return data
}
```

Para recordar el resultado, necesitamos guardarlo en algún sitio en memoria. Podemos utilizar una variable pero, ¿dónde la guardamos? Si la creamos dentro de la función `getProductsById` se creará cada vez que se ejecute y el resultado se perderá tan pronto como la función termine su ejecución. Así que **hay que hacerlo fuera**.

Por suerte, estamos haciendo este ejemplo con JavaScript, que tiene una característica que nos viene genial: las **clausuras, o closures**. Puedes [leer más al respecto sobre closures en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures). Podemos crear una clausura para devolver una función que tenga acceso a una variable en la que almacenar el resultado, pero que no se cree y se destruya cada vez que se ejecute:

```js
function getProductsById() {
  // Data es una variable que se crea fuera del alcance de la closure
  let data = null

  return function getProductsByIdClosure(id) {
    const response = await fetch(`https://example.com/products/${id}`)
    // El resultado se guarda en la variable data, a la que la closure tiene acceso
    // por estar creada dentro del alcance de getProductsById
    data = await response.json()
    return data
  }
}
```

Aún hay varias cosas que tenemos que hacer para que esto funcione como queremos. Pero antes, me gustaría puntualizar que la forma de llamar a esta función sería ahora la siguiente:

```js
await getProductsById()('a-product-id')
```

¿Te confunde el último `()`?. Piensa que `getProductsById` devuelve **una función asíncrona**, así que tenemos que ejecutar esa función para que se haga el fetch. Podemos escribirlo de otra forma para que quede un poco más claro:

```js
const getProductsByIdClosure = getProductsById()
await getProductsByIdClosure('a-product-id')
```
