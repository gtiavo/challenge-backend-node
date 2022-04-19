 //Modulos requeridos:
 const { Router }     = require('express'),
       { check }      = require('express-validator'),
       { genres }     = require('../../controllers');
const {validarJWT, validarCampos} = require('../../middlewares');

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
   check('nombre', 'El nombre es obligatoririo').trim().not().isEmpty(),
   check('nombre', 'El nombre debe de terner mas de 3 caracteres').isLength({min: 3 }),
   validarCampos  
] ,createGenre);

router.put('/:id',[
   check('nombre', 'El nombre es obligatoririo').trim().not().isEmpty(),
   check('nombre', 'El nombre debe de terner mas de 3 caracteres').isLength({min: 3 }),
   validarCampos  
], updateGenre);

router.delete('/:id', deleteGenre);




module.exports = router;