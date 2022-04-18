const validacionesPersonajes = require('./validacionesPersonajes'),
       validacionesUsuarios  = require('./validacionesUsuarios'),
       validarArchivo        = require('./validar-archivo'),
       validarCampos         =require('./validarCampos'),
       validarJWT            = require('./validar-jwt')




module.exports = {
    ...validacionesPersonajes,
    ...validacionesUsuarios,
    ...validarArchivo,
    ...validarJWT,
    validarCampos
}