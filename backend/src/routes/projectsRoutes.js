const express = require ('express');
const router = express.Router ();

// Importamos el controlador 
const controller = require ('../controllers/projectsController');

// Obtenemos proyectos:
// Todos
router.get('/list', controller.getAllProjects);

// por ID
router.get('/:id', controller.getProjectById);

// Añadir
router.post('/add', controller.createProject);

// Eliminar
router.delete('/:id', controller.deleteProject);

module.exports = router;