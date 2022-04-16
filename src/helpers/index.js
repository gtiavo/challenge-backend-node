const generarJWT  = require('./generar-jwt'),
      generarMSG  = require('./generar-msg'),
      dbValidator = require('./db-validator');




module.exports = {
    ...generarJWT,
    ...dbValidator,
    ...generarMSG
}