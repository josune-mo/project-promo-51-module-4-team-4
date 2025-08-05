// Importaciones
const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 11655 || 4000;

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// Conexión a la BBDD con variables de entorno
const getConnection = async () => {
  return await mysql.createConnection({
    host: server-projects-server-projects.j.aivencloud.com,
    user: avnadmin,
    password: AVNS_9lvqi0vXNtuReoLROLE,
    database: projects_db,
    port: 11655,
  });
};