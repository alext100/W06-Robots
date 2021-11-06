Week 6 - Challenge WeekEnd
Robots
Tendrás que crear un frontend en React (con Redux) que permita al usuario gestionar un listado con sus robots. El usuario debe poder crear, modificar y borrar robots. Cada robot debe mostrar un nombre, una imagen (URL de internet) y unas características:

Velocidad (0-10)
Resistencia (0-10)
Fecha de creación
Tendrás que crear una base de datos MongoDB para almacenar los robots, en Atlas.

Tendrás que crear una API REST con Express, con los siguientes endpoints:

[GET] /robots -> devuelve un array con todos los robots de la BD

[GET] /robots/:idRobot -> devuelve un robot de la BD por id

[POST*] /robots/create -> recibe un robot (sin id), lo crea en la BD y devuelve el robot recién creado

[PUT*] /robots/update -> recibe un robot, modifica en la BD el robot con la misma id que el recibido, y devuelve el robot modificado

[DELETE*] /robots/delete/:idRobot -> elimina de la BD un robot por id y devuelve un objeto con la id

Recuerda que cada response debe ir con un código de status adecuado y que todos los body de las responses tienen que ser objetos en JSON.

- Las request con POST, PUT y DELETE estarán protegidas con un token, que debe pasarse por query param. P.e.: /robots/create?token=h29D8b23Llm45

src

- components

  - button:

    1.  Renderiza un button con el texto enviado por props.
    2.  Con actionOnClick llama una funcion.

  - robotCard (renderiza la card con los datos de un robot recibidos por props)

  - robotList:
    1.  Recibe la info desde API
    2.  Con el metodo .map() renderiza los robotCards
    3.  Renderiza los Buttons (crear, modificar, borrar) para cada robotCards

- hooks

  - useRobots.js (Dispatchea thunks)

- redux

  - actions
    - actionCreator
    - actionTypes
  - reducers
    - index.js (rootReducer)
    - robotsReducer
  - store
    - index.js (configureStore)
  - thunks
    - thunks.js
      1.  Comunica con API
      2.  Dispatchea actions con respuestas de API

- App.js
  - renderiza robotList
  - renderiza header, footer, h1
