//Modulos requeridos:
const { Router }   = require('express'),
      { usuarios } = require('../controllers'),
{ validacionesUsuario, validarJWT } = require('../middlewares');

//metodo de express     
const  router = Router();

//desestructuración de usuarios:
const   { createUsuario, deleteUsuario, updateUsuario } = usuarios;


//Rutas:
//Register
//Crear usuario
router.post('/', validacionesUsuario , createUsuario );

router.use( validarJWT );
//Actualizar usuario
router.put('/:id', validacionesUsuario ,updateUsuario );
//Borrar usuario
router.delete('/:id', deleteUsuario );



module.exports = router;