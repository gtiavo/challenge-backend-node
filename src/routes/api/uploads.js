const { Router } = require('express');
const { check } = require("express-validator");
const { uploads } = require("../../controllers");
const { coleccionespermitidas } = require("../../helpers");
const {validarArchivoSubir, validarJWT, validarCampos } = require("../../middlewares");




//metodo de express
const router = Router();

//Desestructuración de uploads: 
const {  actualizarImagenClouddinary } = uploads;



router.put('/:coleccion/:id', [
    validarJWT,
    validarArchivoSubir,
    check('coleccion').custom( c=> coleccionespermitidas(c, ['peliculas', 'generos', 'personajes']) ),
    validarCampos
], actualizarImagenClouddinary);




module.exports = router;