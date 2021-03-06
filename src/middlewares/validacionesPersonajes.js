const { check }     = require("express-validator");
const validarCampos = require("./validarCampos");



const validacionesPersonaje = [
    check('nombre', 'El nombre es obligatorio').trim().not().isEmpty(),
    check('historia', 'Debes completar el campo "Historia"').trim().not().isEmpty(),
    validarCampos
];

module.exports = {
    validacionesPersonaje
}