 //Modulos requeridos:
 const { Router }    = require('express'),
       { check }     = require('express-validator'),
       validarCampos = require('../middlewares/validarCampos'),  
       { auth }      = require('../controllers');

       
//metodo de express     
const  router = Router(); 
       
       
//Desestructuración de auth:      
const { login } = auth;



//Rutas:
//Login
router.post('/',
[
    //Validaciones
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
],
 login);


module.exports = router;