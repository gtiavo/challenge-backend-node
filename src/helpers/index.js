const generarJWT  = require('./generar-jwt'),
      dbValidator = require('./db-validator');




module.exports = {
    ...generarJWT,
    ...dbValidator
}