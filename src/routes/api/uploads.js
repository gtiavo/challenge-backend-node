const { Router } = require('express');
const { check } = require("express-validator");
const { uploads } = require("../../controllers");
const { coleccionespermitidas } = require("../../helpers");
const validarCampos = require("../../middlewares/validarCampos");
const {validarArchivoSubir } = require("../../middlewares/validar-archivo");


//metodo de express
const router = Router();


const {  actualizarImagenClouddinary} = uploads;



router.put('/:coleccion/:id', [
    validarArchivoSubir,
    check('coleccion').custom( c=> coleccionespermitidas(c, ['peliculas', 'generos', 'personajes']) ),
    validarCampos
], actualizarImagenClouddinary);




module.exports = router;