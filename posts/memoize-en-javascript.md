---
title: "Qué es un memoize, para qué sirve y cómo se implementa en JavaScript"
date: "2021-01-02"
draft: false
imageSrc: "/images/blog-images/fredy-jacob-t0SlmanfFcg-unsplash.jpg"
summary: "Si has oído hablar de la técnica de **memoize** o **memoization** en programación y quieres saber en qué consiste, para qué sirve y cómo implementarla, este es tu artículo. Voy a intentar explicártelo y darte algunos casos de uso en los que puede ser interesante aplicarla."
hasTweets: false
---

Si has oído hablar de la técnica de **memoize** o **[memoization](https://en.wikipedia.org/wiki/Memoization)** en programación y quieres saber en qué consiste, para qué sirve y cómo implementarla, este es tu artículo. Voy a intentar explicártelo y darte algunos casos de uso en los que puede ser interesante aplicarla.

## ¿Qué es memoize?

Para empezar, ¿por qué se dice _memoize_ y no _memo**ri**ze_? La diferencia es sutil, pero son dos palabras distintas. En [esta respuesta de Stack Overflow](https://stackoverflow.com/a/52873721) lo explican muy bien. Imagina que estás en un examen y te preguntan los 20 primeros dígitos del número Pi. La diferencia sería que **memorizar** implica estudiarlos de antemano para que cuando te los pregunten, sepas responder rápidamente. En cambio, **"memoizar"** implicaría calcularlos por primera vez sin haberlos estudiado previamente - asumiendo que sabes [hacer el cálculo](https://www.wikihow.com/Calculate-Pi) - y recordar el resultado para las siguientes veces que te los pregunten.

Aclarado este punto, _memoize_ es un patrón de diseño que permite que una función sea capaz de recordar ejecuciones previas con los mismos parámetros y devolver el resultado anterior.

Para implementar la técnica con éxito, la función sobre la que la apliques debe ser pura. Es decir: que dados unos parámetros siempre devuelva el mismo resultado, sin provocar ningún efecto. Por ejemplo, una suma de dos números siempre va a dar el mismo resultado. Pero si parte de la ejecución de la función hace que se imprima ese valor por pantalla, la función no es pura. Además de sumar, imprime por pantalla. Si quieres _memoizar_ la suma, antes tendrás que extraer la funcionalidad de imprimir el resultado de la función original.

## ¿Para qué sirve hacer un memoize?

Imagina que tienes que hacer una operación costosa, que por algún motivo tarda un tiempo en ejecutarse. Por ejemplo: un cálculo, una transformación de muchos datos, un algoritmo de búsqueda, ordenación o una llamada a una API. Tu aplicación no tendrá forma de saber el resultado la primera vez que se ejecute. Pero una vez lo tengas no tienes porqué hacerlo de nuevo para las siguientes ejecuciones, porque el resultado será el mismo. En escenarios así es cuando tiene sentido _memoizar_ el resultado.

Mira estos ejemplos con algunos tipos de funciones a las que puedes aplicar la técnica:

```js
function unCalculoMuyCostoso(parametros) {
  /**
   * Código que tarda mucho en ejecutarse 🕰.
   * Una vez hecho el cálculo, podemos devolver 
   * el resultado. ¿Por qué hacerlo otra vez?
   */
}

function ordenar(muchosDatos) {
  /**
   * Ordenar muchos datos puede llevar su tiempo ⏳.
   * Una vez ordenados los datos, sería genial recordar 
   * cómo se han ordenado para no tener que volverlo a hacer.
   */
}

function getProductById(id) {
  /** 
   * Obtiene un producto de una API por su id.
   * La API es lentilla 🐢.
   * Una vez tengamos el producto, podemos 
   * recordarlo para tener que volver a pedírselo a la API.
   */
}
```

**Nota:** Siguiendo el mismo principio para la función _memoize_, en el caso de llamadas a una API también se tienen que seguir algunos principios. Si la API siempre devuelve el mismo resultado cuando se llama con los mismos parámetros, podrás aplicar _memoize_ a la función que la llama. Pero si el endpoint mantiene un estado o provoca algún efecto, no deberías hacerlo. Por ejemplo, no implementes el patrón a una llamada `POST` o `PUT`, o no se insertarán ni actualizarán los registros en el backend. Normalmente, debería ser seguro hacerlo en un `GET`, aunque depende de la implementación. Si tienes dudas, pregunta y asegúrate primero ✅

## ¿Cómo implementar un memoize en JavaScript?

Para implementar un _memoize_, necesitamos dotar a nuestras funciones "lentas" de la capacidad para recordar el resultado de su primera ejecución. La función tiene que ser capaz de ejecutarse **al menos una vez** para conocer cuál es el resultado, ya que no tiene una bola de cristal 🔮. Pero si se ejecuta más veces, debería poder "recordar" el resultado de la primera ejecución y devolverlo para responder rápidamente sin pasar por el proceso lento.

Imagínate que tienes una función muy sencilla, que suma dos números:

```js
function suma(a, b) {
  console.log(`calcula la suma de ${a} y ${b}`);
  return a + b;
}
```

**Nota:** Estoy utilizando una función `suma` simplificar el ejemplo y explicar cómo implementar un _memoize_. Pero es una función tan sencilla que no tendría sentido "memoizarla" en un escenario real.

Si llamas la función dos veces con los mismos parámetros, podrás observar que se calcula la suma en ambas ejecuciones.

```js
const resultado1 = suma(3, 4);
const resultado2 = suma(3, 4);

console.log("resultado 1: " + resultado1);
console.log("resultado 2: " + resultado2);

/*
> calcula la suma de 3 y 4 
> calcula la suma de 3 y 4 
> resultado 1: 7 
> resultado 2: 7
*/
```
## Primer paso: hacer que la función recuerde una ejecución anterior

Vamos a ir poco a poco. Lo primero que haré será que la función suma sea capaz de recordar el valor de una ejecución anterior. Si ya se ha ejecutado, devolverá ese valor en lugar de calcular la suma. Este es el concepto fundamental del _memoize_. Para hacerlo sencillo, podemos empezar guardando el valor en una variable:

```js
/**
 * Guardamos el resultado en una variable declarada fuera 
 * de la función, para que se mantenga el valor entre ejecuciones.
 * Si se declarase dentro, se perdería el valor almacenado en cuanto
 * la ejecución terminase.
 */
let resultado;

function suma(a, b) {
  /**
   * La instrucción sólo se ejecutará si la variable
   * "resultado" no tiene asignado un valor.
   */
  if (!resultado) {
    console.log(`calcula la suma de ${a} y ${b}`);
    resultado = a + b;
  }

  /**
   * Tanto si se ha calculado como si devolvemos el valor
   * memorizado, devolvemos el mismo resultado
   */
  return resultado;
}
```

Si vuelves a ejecutar ambas sumas, verás que en esta ocasión sólo se calculará una vez:

```js
const resultado1 = suma(3, 4);
const resultado2 = suma(3, 4);

console.log("resultado 1: " + resultado1);
console.log("resultado 2: " + resultado2);

/*
> calcula la suma de 3 y 4 
> resultado 1: 7 
> resultado 2: 7
*/
```

## Segundo paso: Encapsular la variable para almacenar la memoria

El ejemplo anterior no es demasiado práctico. No tiene mucho sentido tener por ahí variables colgando para almacenar el resultado que corresponde al ámbito de la función suma. Lo ideal es que sea la propia función la que tenga memoria y no obligue al que la use a crear una variable para ello. Esto es lo que se conoce en programación como [encapsulamiento](https://es.wikipedia.org/wiki/Encapsulamiento_(inform%C3%A1tica)#:~:text=En%20programaci%C3%B3n%20modular%2C%20y%20m%C3%A1s,operaciones%20definidas%20para%20ese%20objeto.).

El problema es que si se declara la variable `resultado` dentro de suma, ésta se volverá a crear cada vez que se ejecute y no lograremos lo que queremos. Tenemos que crear la función suma de forma que tenga acceso a esa variable y que se mantenga el valor entre diferentes ejecuciones.

Para conseguir esto, JavaScript tiene una característica muy útil: las [clausuras](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures) o **closures**. Cualquier función en JavaScript puede devolver una función como resultado. La función devuelta tiene acceso a las variables de la función que la devuelve.

Te lo explico con un ejemplo. Voy a utilizar una clausura para implementar una función alternativa de la suma, pero con memoria:

```js
function sumaConMemoria() {
  let resultado;

  // La función sumaConMemoria devuelve la función suma.
  return function suma(a, b) {
    /**
     * Aunque resultado se declara fuera de suma,
     * tenemos acceso a ella porque ambas están declaradas
     * dentro del ámbito de sumaConMemoria.
     */
    if (!resultado) {
      console.log(`calcula la suma de ${a} y ${b}`);
      resultado = a + b;
    }

    return resultado;
  };
}
```

Ahora para sumar tenemos que hacer algo un poco diferente. Si ejecutas `sumaConMemoria`, en lugar de sumar vas a obtener una función como resultado. Será esa función devuelta la que tendrás que ejecutar para sumar.

```js
/**
 * Ejecutar sumaConMemoria devuelve una función.
 * Esa función se guarda en la variable memoSuma
 */
const memoSuma = sumaConMemoria();

const resultado1 = memoSuma(3, 4);
const resultado2 = memoSuma(3, 4);

console.log("resultado 1: " + resultado1);
console.log("resultado 2: " + resultado2);

/*
> calcula la suma de 3 y 4 
> resultado 1: 7 
> resultado 2: 7
*/
```

Como ves, el resultado es el mismo que antes. La suma solo se ejecuta una vez. Pero en esta ocasión, la memoria está encapsulada dentro del ámbito de `sumaConMemoria`. Hemos conseguido una función que es capaz de gestionar su propia memoria, sin obligarte a saber cómo está implementada. Pero aún hay varias mejoras que podemos hacer. Sigamos.

**Nota:** Tómate tu tiempo para entender bien cómo funcionan las _closures_ (clausuras) en JavaScript. No es un concepto sencillo y se trata de una de las características más complicadas de dominar en el lenguaje.

## Tercer paso: Soportar diferentes ejecuciones

Estoy haciendo un poco de trampa y estoy ejecutando la función siempre con los mismos parámetros (`3` y `4`). Pero si se me ocurre pasarle cualquier otro número la segunda vez que se ejecute, me va a devolver el resultado de la primera ejecución:

```js
const resultado1 = memoSuma(3, 4);
const resultado2 = memoSuma(2, 1);

console.log("resultado 1: " + resultado1);
console.log("resultado 2: " + resultado2);

/*
> calcula la suma de 3 y 4 
> resultado 1: 7 
> resultado 2: 7 💩
*/
```

No parece demasiado útil, ¿verdad? Vamos a arreglarlo. La clave ahora es conseguir que almacenar el resultado en memoria en función de los parámetros. De este modo, **si se vuelve a llamar a la función con los mismos parámetros, se devolverá el resultado almacenado**. Pero si cambian, se ejecutará el cálculo.

La estructura de datos que mejor nos va a venir para conseguir esto es un **diccionario**. En un [diccionario](https://en.wikibooks.org/wiki/A-level_Computing/AQA/Paper_1/Fundamentals_of_data_structures/Dictionaries), tienes una colección de datos almacenados por clave y valor. La clave puede ser una composición de los parámetros y el valor del resultado de la suma. En JavaScript puedes implementar un diccionario con un objeto.

```js
function sumaConMemoria() {
  /**
   * La variable se convierte en un objeto, para ser
   * capaz de almacenar varios resultados en función
   * de los parámetros proporcionados
   */
  let diccionario = {};

  return function suma(a, b) {
    /**
     * La clave es lo que se usará tanto para comprobar si
     * el valor existe en el diccionario como para almacenarlo.
     * Una forma posible de generar la clave a partir
     * de los parámetros de entrada es construir una cadena de texto
     * que incluya dichos valores
     */
    const clave = `${a}_${b}`;

    /**
     * Si el diccionario no tiene un valor definido en la clave generada,
     * se realiza el cálculo
     */
    if (clave in diccionario) {
      console.log(`calcula la suma de ${a} y ${b}`);

      /**
       * Una vez realizado el cálculo por primera vez,
       * se almacena el resultado
       */
      diccionario[clave] = a + b;
    }

    // Finalmente se devuelve el valor almacenado en el diccionario
    return diccionario[clave];
  };
}
```

Si ejecutas la función, verás que ahora se calcula la suma solo cuando se llama con unos parámetros que no tenía anteriormente. Pero si ya los tenía, devuelve el resultado memorizado.

```js
const memoSuma = sumaConMemoria();

const resultado1 = memoSuma(3, 4);
const resultado2 = memoSuma(3, 4);
const resultado3 = memoSuma(2, 1);
const resultado4 = memoSuma(2, 1);

console.log("resultado 1: " + resultado1);
console.log("resultado 2: " + resultado2);
console.log("resultado 3: " + resultado3);
console.log("resultado 4: " + resultado4);

/*
> calcula la suma de 3 y 4 
> calcula la suma de 2 y 1 
> resultado 1: 7 
> resultado 2: 7 
> resultado 3: 3 
> resultado 4: 3 
*/
```

## Cuarto paso: Utilizar composición de funciones para extraer la funcionalidad de memoize

Ahora que ya sabemos cómo implementar un _memoize_, tenemos una función bastante útil. Pero es un rollo tener que hacer esta implementación por cada función en la que queramos conseguir este comportamiento. Lo ideal es extraer la responsabilidad de "memoizar" de la función de suma, para separar ambas responsabilidades. De esta forma podremos hacer un _memoize_ a cualquier función mediante composición funcional.

Iremos poco a poco. Primero voy a definir la firma de la función que quiero conseguir:

```js
function suma(a, b) {
  return a + b;
}

/**
 * memoSuma es una composición de dos comportamientos: sumar y memoizar
 */
const memoSuma = memoize(suma);
```

La función `memoize` tiene que ser capaz de recibir una función como parámetro y devolver una nueva función, con el **súper poder** 🦸‍♀️ de memorizar resultados ya evaluados en función de sus parámetros.

```js
function memoize(fn) {
  let diccionario = {};

  /**
   * Se devuelve una función capaz de recoger cualquier
   * número de parámetros gracias a la desestructuración 
   * (los tres puntos).
   */
  return function (...args) {
    // Si los argumentos existen en el diccionario, devolver el valor memorizado

    // Si no existen, ejecutar fn(), almacenar el resultado y devolverlo.
  }
}
```

En lugar de devolver la función `suma`, `memoize` devuelve una función anónima para poder acceder a los parámetros con los que se llama. Primero mirará si ya existe un valor en el diccionario para los parámetros recibidos. Si no, ejecutará la función `fn`, a la que tiene acceso por el hecho de tratarse de una **clausura** y almacenará el resultado en el diccionario antes de devolverlo.

Pasemos a la implementación completa:

```js
// memoize.js
function memoize (fn) {
  let diccionario = {};
  
  return function(...args) {
    /**
     * Se genera la clave igual que en los pasos anteriores,
     * pero en este caso se soporta cualquier número de parámetros.
     */
    const clave = args.join("_");

    /**
     * Si la clave se encuentra en el diccionario, devuelve el valor
     * de una ejecución anterior.
     */
    if (clave in diccionario) {
      console.log("Devuelve resultado almacenado en el diccionario");
      return diccionario[clave];
    } else {
      /**
       * Se ejecuta la función fn pasándole los parámetros
       */
      const result = fn(...args);

      /**
       * Se almacena el resultado en el diccionario
       */
      diccionario[clave] = result;
      return result;
    }
  };
};

export default memoize;
```

Si escribes la implementación de memoize en un módulo, podrás utilizarlo en cualquier parte de nuestro código simplemente importando dicho módulo.

```js
// suma.js
import memoize from './memoize';

const suma = memoize(function suma(a, b) {
  return a + b;
})

export default suma;
```

De esta forma, quien use el módulo que implementa la función suma, ni siquiera sabrá si está memoizada:

```js
// index.js
import suma from "./suma";

const resultado1 = suma(3, 4);
const resultado2 = suma(3, 4);
const resultado3 = suma(2, 1);
const resultado4 = suma(2, 1);

console.log("resultado 1: " + resultado1);
console.log("resultado 2: " + resultado2);
console.log("resultado 3: " + resultado3);
console.log("resultado 4: " + resultado4);

/*
Devuelve resultado almacenado en el diccionario 
Devuelve resultado almacenado en el diccionario 
resultado 1: 7 
resultado 2: 7 
resultado 3: 3 
resultado 4: 3 
*/
```

## Aplicación práctica

Vale, vamos a dejarnos de sumas y vamos a ver un caso real en el que podría serte útil utilizar una función com `memoize`. Imagina que en tu aplicación necesitas obtener los permisos de un usuario. Esto es algo que seguramente solo necesitarás pedir una vez por sesión, ya que no debería cambiar muy a menudo. Al menos, es aceptable que durante la vida de una sesión se mantengan. 

```js
async function getPermissions(userId) {
  const result = await fetch(`${host}/users/${userId}/permissions`)
  const permissions = await result.json();
  return permissions;
}

export default getPermissions;
```

En vez de hacer una petición a tu backend por cada consulta o navegación para comprobar si el usuario tiene permisos, puedes almacenarlo en memoria tras la primera ejecución.

```js
const getPermissions = memoize(async function(userId) {
  const result = await fetch(`${host}/users/${userId}/permissions`)
  const permissions = await result.json();
  return permissions;
})

export default getPermissions;
```

Si ejecutamos la función dos veces, verás que se obtienen los permisos, pero solo se hace una request en la pestaña Network de las dev tools de tu navegador web. Puedes reemplazar la URL del `fetch` por cualquier URL válida (por ejemplo, [ésta](https://pokeapi.co/api/v2/pokemon/ditto)) para comprobarlo.

```js
getPermissions().then(console.log);
getPermissions().then(console.log);

/**
 * Se imprimen dos veces por consola los permisos,
 * pero solo verás una petición.
 */
```

## Conclusiones

Hemos visto cómo implementar algo que aparentemente es sencillo, pero que implica varios conocimientos sobre cómo funciona JavaScript. Las clausuras y el trato que le da el lenguaje a las funciones, considerándose ciudadanas de primera clase, permiten realizar patrones tan potentes como el _memoize_ que hemos visto en este artículo.

He visto muchos proyectos en los que se utiliza una **librería de estado global** como **Redux** o **Vuex** para conseguir comportamientos como este. Si es tu caso, piensa dos veces si realmente la necesitas. En mi opinión, conseguir una caché en memoria no es suficiente motivo para instalar una dependencia, cuando se puede conseguir lo mismo con una simple función. 

Por último, si consideras utilizar este patrón en tu código, **no te recomiendo utilizar mi implementación**. Aunque es suficiente a efectos didácticos, hay otras opciones mucho mejor testeadas, como [memoizee](https://github.com/medikoo/memoizee#readme) o la propia de [lodash](https://lodash.com/docs/#memoize).

Espero que te haya gustado el artículo, que hayas podido seguirlo y te haya dado algunas ideas para tus próximos proyectos. Si es así, [comparte](http://www.twitter.com/share?url=https%3A%2F%2Fdelacruz.dev%2Fblog%2Fmemoize-en-javascript&text=Qu%C3%A9%20es%20un%20memoize%2C%20para%20qu%C3%A9%20sirve%20y%20c%C3%B3mo%20se%20implementa%20en%20JavaScript&hashtags=javascript) y me harás un poco más feliz 😄.

<small>Foto de la cabecera de [Fredy Jacob](https://unsplash.com/@thefredyjacob?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) en [Unsplash](https://unsplash.com/@thefredyjacob?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)</small>
