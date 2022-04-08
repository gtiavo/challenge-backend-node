const { Router }   = require('express'),
      router       = Router(),
      validaciones = require('../middlewares/validacionesUsuarios'),
      { usuarios } = require('../controllers'),
      { createUsuario, deleteUsuario, updateUsuario } = usuarios;


//Rutas:
//Crear usuario
router.post('/', validaciones, createUsuario );
//Actualizar usuario
router.put('/:id', updateUsuario );
//Borrar usuario
router.delete('/:id', deleteUsuario );



module.exports = router;