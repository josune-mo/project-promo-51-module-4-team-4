const express = require ('express');
const router = express.Router ();

//**Importamos el controlador 
const controller = require ('../controllers/projectsController');



//**Obtenemos proyectos:
//**Todos */
router.get('/projects', controller.getAllProjects);

//**por ID */
router.get('/:id', controller.getProjectById);

//**Añadir */
router.post('/', controller.createProject);

// //**Actualizar*/
// router.put('/:id', controller.updateProject);

//**Eliminar */
router.delete('/:id', controller.deleteProject);

module.exports = router;