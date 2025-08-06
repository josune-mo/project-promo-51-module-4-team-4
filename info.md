
Etructura típica Modelo Vista Controller (MVC)

src/
├── controllers/
│ └── projectsController.js  (Contiene la lógica de cada endpoint)
├── routes/
│ └── projectsRoutes.js  (Define las rutas y las conecta con los controladores)
├── models/
│ └── projects.js  (Opcional) Aquí podría ir la lógica de acceso a BBDD, como nuestro proyecto es pequeño no lo he añadido
├── db/
│ └── db.js   (Conexión a la base de datos MySQL)
├── index.js  (Punto de entrada de la API)


En nuestro proyecto:

src/
├── controllers/
│   └── projectsController.js   (Aquí está la lógica, con endpoints que normalmente se ponen en models -> projects )
├── routes/
│   └── projectsRoutes.js       (Aquí van las rutas endpoints)
├── db/
│   └── db.js                   (Conexión a la base de datos)
├── .env                        (Variables de entorno)
├── index.js                    (Punto de entrada del backend)
└── info.md                     (Este archivo 😉 que eliminaremos antes de publicar)
