---
title: "Un año haciendo mentoría a desarrolladores"
date: "2020-07-29"
draft: false
imageSrc: "/images/blog-images/undraw_absorbed_in_xahs.png"
summary: "En este artículo te explico cómo fui dándole forma la idea de ofrecer un servicio de mentoring profesional para programadores. Siguiendo la metodología Lean, fui desde la concepción de la idea hasta la validación de hipótesis y el lanzamiento del primer MVP."
hasTweets: true
---

Hace aproximadamente un año comencé a trabajar en dar a luz este proyecto del que hoy estoy orgulloso. Aunque la idea de ofrecer un servicio de mentoring profesional para programadores comenzó a dar vueltas en mi cabeza meses atrás. Un amigo y ex-compañero de una de las empresas en las que he trabajado contactó conmigo. Me comentó que estaba buscando un mentor que le ayudase a subir de nivel en su nuevo puesto como desarrollador senior. Su empresa le facilitaba un presupuesto anual para invertir en formación y estaba dispuesto a llegar a un acuerdo económico conmigo por dedicarle mi tiempo.

Aunque me sentí halagado y agradecido por su propuesta, mi primera respuesta fue negativa: no estaba preparado. Tenía demasiadas preguntas y no me sentía cómodo cobrándole por algo a lo que aún no sabía cómo dar forma. Pero empecé a pensar en ello, haciéndome muchas preguntas al respecto. ¿En qué consiste exactamente eso de **subir de nivel**? ¿Qué debería incluir un servicio de **mentoring profesional**? ¿Qué tendría que quedarse fuera de ese servicio? ¿Existe gente interesada en pagar por un servicio así? Si la hay, ¿cuánto estarían dispuestos a invertir en ello? ¿Estaría social y moralmente aceptado cobrar por una mentoría?

En este artículo me gustaría compartir contigo cómo fui dándole forma a esta idea y encontrando la respuesta a estas preguntas.

## Dando forma al servicio

Durante mi etapa en [King](https://king.com/es) estuve haciendo de mentor a algunos compañeros de equipo. Viendo que tenía interés, mi manager me animó a hacerlo como el siguiente paso natural dentro de mi desarrollo profesional y me ayudó a pulir mi metodología. El feedback que recibía era muy positivo y poco a poco empezaron a acudir a mi personas de otros equipos. Descubrí que me gustaba y llegué a reunir suficientes recursos y material para adaptar el método a diferentes perfiles y niveles de experiencia.

Al principio pensé en enfocar el servicio a ayudar a personas a mejorar sus habilidades de programación. Pero una vez más, cuando se lo comenté a mi manager, me abrió los ojos:

> Tío, hay doscientos mil cursos online gratuitos para aprender JavaScript. ¿Por qué iba a pagarte a tí?

No le faltaba razón. La gente ya tiene muchas opciones para empezar a programar y conseguir un trabajo. Pero una vez están ahí, ¿qué es lo siguiente?

Decidí cambiar el enfoque e incluso el _público objetivo_ a quién dirigirme. No iba a buscar gente que necesitase aprender a programar. Iba a ayudar a personas que ya tienen un trabajo, pero no han tenido exposición a entornos de mejora continua, aplicaciones con elevados volúmenes de tráfico, dinámicas de trabajo [Lean y Agile](https://amzn.to/3jOggSO)... Yo he tenido el privilegio de estar en empresas donde he podido aprender todas esas cosas. Decidí que era lo que iba a aportar.

## Validando la idea

Tenía claro que antes de poner toda la carne en el asador tenía que validar mi hipótesis:

> ¿Existen profesionales dispuestos a pagar por un mentor que les ayude a crecer profesionalmente?

Empecé hablando con amigos y ex-compañeros. No es la mejor forma de formarte una opinión, pero sí que me sirvió para darme cuenta de algunas cosas en las que no había pensado. Me comentaron que hay mucha gente que paga por servicios similares cuando va a un psicólogo, a un coach o cuando contratan a un entrenador personal. Profesores particulares de inglés, clases de baile...

¿Pagarían por alguien que les ayude a ser mejores programadores?

Decidí tratar de llegar a una audiencia más amplia haciendo una pequeña encuesta en Twitter, que llegó a bastante gente gracias a la difusión de mi amigo [Miguel Ángel](https://midu.dev/):

<blockquote class="twitter-tweet" tw-align-center><p lang="es" dir="ltr">Si conocieses a alguien profesional que pudiese hacerte mentoring y te ayudase a mejorar en tu carrera profesional para conseguir tus objetivos, ¿te parecería bien pagar por ese servicio?</p>&mdash; Dani de la Cruz (@d4nidev) <a href="https://twitter.com/d4nidev/status/1138916111037194240?ref_src=twsrc%5Etfw">June 12, 2019</a></blockquote>

En el mismo hilo preguntaba sobre el rango de precios que alguien estaría dispuesto a pagar por semejante servicio.

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">En caso de haber votado que sí, ¿cuál de las siguientes franjas de precio se ajusta más a lo que consideras un precio justo por un servicio como este?</p>&mdash; Dani de la Cruz (@d4nidev) <a href="https://twitter.com/d4nidev/status/1138917459203960832?ref_src=twsrc%5Etfw">June 12, 2019</a></blockquote>

Un 85% de los votos fueron favorables. La palmada en la espalda que necesitaba para lanzar un MVP. Además, tuve muy buen feedback constructivo de algunas personas que consideraban que no pagarían por este servicio, como este de Ignacio:

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">No tiene porque pero para mí el mentoring lo es, si no llámalo clase o consultoría... totalmente legítimo.</p>&mdash; Ignacio Villanueva 🏳️‍🌈 (en casa 🏡) (@IgnaciodeNuevo) <a href="https://twitter.com/IgnaciodeNuevo/status/1138937247456256000?ref_src=twsrc%5Etfw">June 12, 2019</a></blockquote>

O este otro, de Víctor:

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Concibo el mentoring como algo visceral, un acuerdo de mutuo y no como algo de pago 💸.<br><br>Para eso hay trainings, profesores, academias, consultorías, coaches...<br><br>Si lo que quieres es cobrar, yo usaría otro nombre. No me gustaría que se corrompiera la bonita palabra mentor 😇!</p>&mdash; Victor Ribero 🧘🏼‍♂️ (@devictoribero) <a href="https://twitter.com/devictoribero/status/1139068080724815872?ref_src=twsrc%5Etfw">June 13, 2019</a></blockquote>

Este feedback me hizo pensar que algunas personas tienen una connotación de "mentoring" como algo que haces de mutuo acuerdo por un igual, y se sienten incómodos cobrando por algo así. Consideré que quizás debería cambiar el vocabulario para evitar esa connotación.

Como parte del proceso de validación de mi idea hice una investigación de servicios similares. Descubrí que en desarrollo de software hay [bastante](https://wesbos.com/) [gente](https://kentcdodds.com/) [que](https://midu.dev/) [hace](https://carlosazaustre.es/) [cursos](https://www.horacioh.com/), pero pocos que hagan mentoring. Yo respeto muchísimo a quienes hacen cursos, ya que he hecho algunos y soy consciente del tiempo que requiere prepararlos. Tenía claro que quería diferenciarme de ese nicho.

En cambio, en otras disciplinas es bastante habitual encontrar profesionales del mentoring. Encontré diseñadores, marketing o perfiles de gestión y dirección ofreciendo este servicio, así que eso me ayudó a reafirmarme. Finalmente, decidí seguir mi instinto y comprometerme con el concepto de **mentoring profesional**.

## El primer MVP

Ya tenía suficiente información para lanzarme a validar mis hipótesis. Hay que recordar que una hipótesis no está validada hasta que no obtienes un resultado esperado tangible. Lo que tenía hasta entonces era bastante feedback y opiniones. Recuerda que quería comprobar si alguien estaría dispuesto a pagar por mi servicio. Así que el siguiente objetivo que me marqué fue el de conseguir a **mi primer cliente**.

La primera versión del _producto_ o servicio que publiqué es la web que estáis viendo. Decidí no utilizar ninguna plantilla, ya que me parecía incongruente que alguien que se venda como experto en tecnologías Frontend no haga su propio diseño. Pero tampoco quería picarme todo el marcado y los estilos desde cero, así que me apoyé en [Bulma](https://bulma.io/) como framework CSS.

Para mi sorpresa, la idea se validó sola.

Estaba trabajando en la web y puse una versión muy rudimentaria online, aún sin todo el contenido decidido. Ni siquiera había pensado en cómo promocionarla en redes sociales, AdWords... etc. Y entonces un día contactó conmigo mi primer cliente.

Había encontrado la página antes de que la hiciese oficial, había visto lo que ofrecía y ya tenía claro que quería contratarme. Después de una primera conversación telefónica y otra sesión gratuita, comencé con él y tuvo el valor de pagarme por adelantado. Nunca podré agradecerle lo suficiente que confiase en mí de ese modo. Era justo lo que necesitaba para hacerlo público.

Varias semanas después, anuncié el servicio en mis redes sociales. No estaba perfecto, pero nunca lo iba a estar. Tan solo me aseguré de que tuviese Google Analytics, para identificar fuentes de tráfico y cómo rendían las páginas en buscadores.

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">He decidido lanzar un servicio de <a href="https://twitter.com/hashtag/mentoring?src=hash&amp;ref_src=twsrc%5Etfw">#mentoring</a> para ayudar a programadores y programadoras a dar un salto en su carrera. Si estás buscando trabajo, quieres lograr un ascenso o saber cómo crecer profesionalmente para ayudar mejor a tu equipo, ¡escríbeme!<a href="https://t.co/gDyAKPhop6">https://t.co/gDyAKPhop6</a></p>&mdash; Dani de la Cruz (@d4nidev) <a href="https://twitter.com/d4nidev/status/1169119102524362752?ref_src=twsrc%5Etfw">September 4, 2019</a></blockquote>

## Lo que he aprendido durante este año

Me reservo para otro artículo lo que he aprendido personalmente como mentor tras todo este tiempo haciendo mentoring. En su lugar me gustaría centrarme en lo que he aprendido sobre el servicio que estoy ofreciendo.

Los primeros meses recibí una avalancha de solicitudes. Tantas que me vi obligado a rechazar a la mayoría, ya que no quería comprometerme sin estar seguro de poder dar un servicio de buena calidad. Empecé dando servicio a tres personas. A medida que ya no necesitaban tanta disponibilidad, me atreví a aceptar hasta cinco. Pero un año después veo claro el primer problema: que **este servicio escala tanto como da de sí mi tiempo libre**. La buena noticia es que he probado que hay demanda, así que o consigo más tiempo libre o encuentro la manera de optimizar mejor el tiempo del que dispongo.

Otro de mis aprendizajes es que no solo hay programadores particulares dispuestos a invertir en su crecimiento profesional. **También han acudido a mí empresas**. Si no hubiese lanzado una primera versión del servicio, jamás habría descubierto esto. Este conocimiento me abre nuevas posibilidades para el futuro que espero poder explorar en breve.

Por último, he aprendido a **simplificar la oferta**. Al principio pensé en ofrecer tres "paquetes" de servicios distintos con diferentes rangos de precio. Pero tras mis primeras experiencias como mentor me di cuenta de que me estaba equivocando. Cada persona es distinta y no puedes estandarizar un servicio y esperar encontrar gente que encaje. Es habitual que las personas que acuden a mí **no tengan muy claro qué es lo que necesitan** y descubrirlo forma parte del proceso de mentoría. Por ejemplo: hay gente que me ha escrito buscando mejorar técnicamente sus conocimientos de programación. Pero hemos terminado trabajando sus habilidades de comunicación y liderazgo. **He aprendido a adaptarme a lo que la persona necesita**. Así que decidí simplificar el plan de precios ofreciendo dos opciones: contratar diez sesiones o ir con más calma y evaluar después de cada sesión si vale la pena seguir o no.

## Conclusiones

Sigo aprendiendo de la experiencia, pero estoy muy orgulloso de cómo he dado forma a la idea y la he llevado a cabo. He querido escribir este artículo porque esta mentalidad orientada a experimentar y concentrarse en el aprendizaje es precisamente la que pretendo inculcar si decides trabajar conmigo.

Si te pica la curiosidad y quieres saber cómo puedo ayudarte, [escríbeme](/contact) y hablamos. Sin compromiso.
