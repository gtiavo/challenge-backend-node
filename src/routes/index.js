//Modulos requeridos:
const { Router }    = require('express'),
      usuariosRutas = require('./usuarios'),
      authRutas     = require('./auth');

//metodo de express     
const  router = Router();

//Rutas:
router.use('/register', usuariosRutas );
router.use('/login', authRutas );

   
module.exports = router;



