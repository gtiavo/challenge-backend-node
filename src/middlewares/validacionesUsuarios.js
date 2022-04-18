//Modulos requeridos:
const { check }       = require('express-validator'),
      { emailExiste } = require('../helpers'),
      validarCampos   = require('./validarCampos');

//Campos del usuario a validar:      
const validacionesPostUsua = [
    check('nombre', 'El nombre es obligatorio y debe tener por lo menos 3 caracteres').trim().not().isEmpty().isLength({min:3}), 
    check('apellido', 'El apellido es obligatorio y debe tener por lo  menos 3 caracteres').trim().not().isEmpty().isLength({min:3}), 
    check('password', 'El password debe de tener mas de 6 caracteres').trim().isLength({min:6}), 
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'El email no es valido').isEmail(),
    check('email').custom ( emailExiste ), 
    validarCampos
];



module.exports = {
    validacionesPostUsua
};