//Modulos requeridos:
const { check }       = require('express-validator'),
      { emailExiste } = require('../helpers'),
      validarCampos   = require('./validarCampos');

//Campos del usuario a validar:      
const validaciones = [
    check('nombre', 'el nombre es obligatorio').not().isEmpty(), 
    check('apellido', 'el apellido es obligatorio').not().isEmpty(), 
    check('password', 'el password debe de tener mas de 6 caracteres').isLength({min:6}), 
    check('email', 'el email no es valido').isEmail(),
    check('email').custom ( emailExiste ), 
    validarCampos
];

module.exports = validaciones;