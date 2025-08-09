// Importaciones
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());
app.use(express.json({ limit: '50mb' }));


// Rutas
const projectRoutes = require("./routes/projectsRoutes");
app.use("/projects", projectRoutes);

// Servidor
console.log('Conectando a base de datos con usuario:', process.env.DB_USER);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// Servidor de estaticos 
const serverStatic = express.static('./frontend');
app.use(serverStatic);
