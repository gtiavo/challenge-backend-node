//Modulos requeridos:
const { Router }   = require('express'),
      { usuarios } = require('../controllers'),
{ validacionesPostUsua } = require('../middlewares');

//metodo de express     
const  router = Router();

//desestructuración de usuarios:
const   { createUsuario, deleteUsuario, updateUsuario } = usuarios;


//Rutas:
//Register
//Crear usuario
router.post('/', validacionesPostUsua , createUsuario );
//Actualizar usuario
router.put('/:id',updateUsuario );
//Borrar usuario
router.delete('/:id', deleteUsuario );



module.exports = router;