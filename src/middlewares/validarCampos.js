//Modulos requeridos:
const { validationResult } = require("express-validator");

//middleware de ruta, validacion de campos requeridos
const validarCampos = (req, res, next) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json(errors);
    }

    next();

}



module.exports = validarCampos;
