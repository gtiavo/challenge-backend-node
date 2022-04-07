const { Router } = require('express'),
      router = Router(),
      { usuarios } = require('../controllers'),
      { getUsuarios, createUsuario, 
        deleteUsuario, getUsuario, updateUsuario
     } = usuarios;


//Rutas:
//Todos los usuario
router.get('/', getUsuarios );
//Usuario
router.get('/:id', getUsuario );
//Crear usuario
router.post('/', createUsuario );
//Actualizar usuario
router.put('/:id', updateUsuario );
//Borrar usuario
router.delete('/:id', deleteUsuario );



module.exports = router;