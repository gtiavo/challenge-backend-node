//Modulos requeridos:
const { Router }   = require('express'),
      validaciones = require('../middlewares/validacionesUsuarios'),
      { usuarios } = require('../controllers');

//metodo de express     
const  router = Router();

//desestructuración de usuarios:
const   { createUsuario, deleteUsuario, updateUsuario } = usuarios;


//Rutas:
//Register
//Crear usuario
router.post('/', validaciones, createUsuario );
//Actualizar usuario
router.put('/:id', updateUsuario );
//Borrar usuario
router.delete('/:id', deleteUsuario );



module.exports = router;