const mysql = require("mysql2/promise");
require("dotenv").config();
console.log('USUARIO:', process.env.DB_USER);


// Conexión a la BBDD con variables de entorno
const getConnection = async () => {
  return await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
};

module.exports = getConnection;