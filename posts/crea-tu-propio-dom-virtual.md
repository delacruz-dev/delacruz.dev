---
title: "Crea tu propio DOM Virtual"
date: "2017-12-29"
draft: false
frontImageSrc: /images/blog-images/virtual-dom-header.jpeg
frontListImageSrc: "/images/blog-images/virtual-dom-header.jpeg"
summary: "En este artículo me propongo el reto de escribir una pequeña librería para aprovechar y explicar los conceptos que hay detrás del DOM Virtual."
---

Hace poco me pidieron en una entrevista que hiciese una prueba técnica
aparentemente sencilla: apenas un par de páginas y una llamada a una API. La
dificultad estaba en que todo el código debía ser _vanilla JS_. Es decir,
JavaScript puro y duro, sin utilizar Frameworks ni librerías.

Como estoy bastante acostumbrado a desarrollar interfaces de usuario por
componentes, en su momento me dio bastante palo currármelo tanto para una prueba
técnica. Pero tras pensarlo un tiempo y documentarme un poco, me he dado cuenta
de que sería bastante más fácil de lo que puede parecer al principio. Así que
como el reto es interesante, he pensado en escribir una serie de posts
documentando los conceptos que hay detrás de una librería de DOM virtual.

## ¿Cómo representamos el DOM?

Imaginemos que queremos representar un elemento sencillo del DOM, como por
ejemplo:

```html
<div class="hello">Hello, world!</div>
```

Usando una estructura de datos en formato JSON, este nodo podría representarse
de la siguiente forma:

```js
{
  type: 'div',
  props: { class: 'hello' },
  children: [ 'Hello, world!' ]
}
```

El tipo de la etiqueta HTML lo podemos almacenar con la propiedad **type**,
tener un objeto **props** para los atributos y un array de **children** para
representar cualquier tipo de nodos descendientes del actual. Un ejemplo más
completo, sería representar una lista desordenada:

```html
<ul class="list">
  <li>list item 1</li>
  <li>list item 2</li>
</ul>
```

Quedaría:

```js
{
  type: 'ul',
  props: { class: 'list' },
  children: [{
    type: 'li',
    children: [ 'list item 1' ]
  }, {
    type: 'li',
    children: [ 'list item 2' ]
  }]
}
```

## Escribamos una función que nos ayude a representar el DOM

Escribir una vista completa o incluso un componente de este modo es bastante
engorroso, así que hagamos una función que nos facilite un poco el trabajo:

```js
function h(type, props, ...args) {
  const children = args.length ? [].concat(...args) : null;
  return {
    type,
    props,
    children,
  };
}
```

Puedes llamar a la función como quieras, no tiene importancia. En el ejemplo,
utilizo _h()_ porque la idea original para este tipo de funciones viene de
[hyperscript](https://github.com/hyperhype/hyperscript). Con la función
anterior, ahora podemos representar el DOM así:

```js
const div = h("div", { className: "hello" }, "Hello, world!");
```

Fíjate que utilizo **className** porque **class** es una palabra reservada del
lenguaje.

## Utilicemos JSX

Reconozco que estoy muy acostumbrado a utilizar la sintaxis tipo XML que
proporciona JSX para definir vistas, gracias a (o por culpa de) React. Pero al
contrario de lo que piensa la mayoría, JSX no es exclusivo ni propietario de
React, sino que [tiene sentido por si mismo](https://facebook.github.io/jsx/).

Pero, **¿qué es JSX?**. Jason Miller tiene un fantástico
[artículo](https://jasonformat.com/wtf-is-jsx/), del que estoy cogiendo muchas
de las ideas para escribir este, en el que lo explica a las mil maravillas.
Échale un vistazo si quieres profundizar más en el tema. En mi caso, lo que me
ayudó a terminar de entenderlo fue utilizar el [REPL de
Babel](https://babeljs.io/repl). Si escribes en el lado izquierdo lo siguiente:

```js
const helloWorld = <div className="hello">Hello, world!</div>;
```

Verás que el resultado, tras transpilar el código JSX, es:

```js
var helloWorld = React.createElement("div", { className: "hello" }, "Hello, world!");
```

Se parece bastante a nuestra función **h()**, ¿verdad? En este caso, Babel asume
que vas a utilizar React como librería para interpretar JSX, pero también te da
la opción de proporcionar tu propia función de transpilado, incluyendo el
siguiente comentario sobre tu código:

```js
const helloWorld = <div className="hello">Hello, world!</div>;
```

El resultado, ahora sí, tras el transpilado de Babel, será:

```js
var helloWorld = h("div", { className: "hello" }, "Hello, world!");
```

Esto es fantástico, ya que las condiciones de la prueba se siguen cumpliendo:
JSX no es ninguna librería, tan solo es una sintaxis especial que puede
interpretar Babel y traducirla a algo que tenga sentido en JavaScript. Y tampoco
prohibía utilizar la última versión del estándar ECMAScript ni había limitación
en cuanto a las herramientas de desarrollo, así que transpilar el código con
Babel tampoco es trampa.

Puedes probar el [siguiente código en JSFiddle](https://jsfiddle.net/58pmedyd/)
para ver el resultado de aplicar los pasos realizados hasta ahora.

## Renderizando elementos en el DOM

Ya hemos visto que representar elementos de DOM virtual en combinación con JSX
es bastante sencillo, así nos queda la parte de implementar cómo renderizar esos
elementos en el auténtico DOM.

Empecemos por algo sencillo: una función _createElement(node)_ a la que le
pasaremos un nombre de etiqueta HTML y creará dicho elemento utilizando la API
del DOM de JavaScript:

```js
function createElement(node) {
  return typeof node === ‘string’
    ? document.createTextNode(node)
    : document.createElement(node.type)
}
```

Ignoremos de momento las _props_ y _children_. La función acepta un nodo de
nuestra estructura JSON anterior y evalúa si es de tipo **string** para crear un
nodo tipo texto o, en caso contrario, crear el elemento correspondiente al tipo
de etiqueta facilitado.

Ahora sí, pensemos en los nodos hijos. También serán del mismo tipo del padre,
así que podríamos aplicar una función **recursiva** que llame a _createElement_
y los vaya añadiendo al nodo padre:

```js
function createElement(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.type);
  node.children.map(createElement).forEach((child) => element.appendChild(child));
  return element;
}
```

Ya podemos probar si funciona, añadiendo el elemento al DOM. Primero, creamos el
nodo donde se va a renderizar nuestro componente en el HTML:

```html
...
<body>
  <div id="root"></div>
</body>
```

Y luego, añadimos un simple script que añada el componente al _root:_

```js
const helloWorld = <div className="hello">Hello, world!</div>;

document.getElementById("root").appendChild(createElement(helloWorld));
```

Aquí tienes el enlace al ejemplo completo funcionando en [JSFiddle](https://jsfiddle.net/oL0bmwg7/).

## Conclusiones

A veces nos acostumbramos tanto a utilizar una librería o framework que se nos
olvida cómo funciona por debajo. En este artículo hemos visto que representar un
DOM virtual es bastante sencillo, solo hacen falta un par de funciones. Y que
JSX es algo que puedes utilizar sin complejos solo por el hecho de estar
transpilando tu código con Babel.

Si el artículo tiene buena aceptación, me gustaría escribir sobre cómo se haría
el _diffing_, para comprobar qué elementos han cambiado y también cómo
implementar las _props_ y los eventos.

## Referencias

- [WTF is JSX](https://jasonformat.com/wtf-is-jsx/), por Jason Miller
- [How to write your own Virtual
  DOM](https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060),
  por deathmood
- [hnpwa-vanilla/dom-api](https://github.com/cristianbote/hnpwa-vanilla/blob/master/src/core/dom-api.js). El código que me inspiró para escribir este artículo

---

¿Quieres saber cómo empezar a aprender los fundamentos de librerías de interfaz de usuario como [React.JS](https://reactjs.org/)? ¿Te gustaría practicar técnicas de ingeniería inversa como la que he utilizado para escribir este artículo?. Si necesitas un **mentor** que te ayude a dar un salto en tu carrera profesional, echa un vistazo a mis planes de [mentoring](/mentoring).
