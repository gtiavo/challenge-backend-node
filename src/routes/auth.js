 const { Router }    = require('express'),
       router        = Router(),
       { auth }      = require('../controllers'),
       { check }     = require('express-validator'),
       validarCampos = require('../middlewares/validarCampos'),
       { login }     = auth;


//Rutas:
//Login
router.post('/',
[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
],
 login);


module.exports = router;