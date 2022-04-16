 //Modulos requeridos:
 const { Router }     = require('express'),
       {validarJWT}   = require('../../middlewares/validar-jwt'),
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
router.post('/', createGenre);
router.put('/:id', updateGenre);
router.delete('/:id', deleteGenre);




module.exports = router;