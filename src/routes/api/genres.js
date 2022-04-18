 //Modulos requeridos:
 const { Router }     = require('express'),
       { check }      = require('express-validator'),
       {validarJWT, validarCampos}   = require('../../middlewares'),
       { genres }     = require('../../controllers');

//metodo de express
const router = Router();

//Desestructuración de generos:
const { 
getGenres, createGenre,
updateGenre, deleteGenre
} = genres;

//Middleware de ruta - validacion de token
router.use(validarJWT);

//Rutas:
//Listado de genero
router.get('/', getGenres);


//CRUD de genero
router.post('/', [
   check('nombre', 'El nombre es obligatoririo').trim().isLength({min: 3 })
   .withMessage('El nombre debe de terner mas de 3 caracteres'),
   validarCampos  
] ,createGenre);

router.put('/:id', updateGenre);
router.delete('/:id', deleteGenre);




module.exports = router;