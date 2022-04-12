 //Modulos requeridos:
 const { Router }     = require('express'),
 {validarJWT}   = require('../../middlewares/validar-jwt'),
 { movies } = require('../../controllers');

//metodo de express
const router = Router();

//Desestructuración de characters:
const { 
createMovie, deleteMovie,
getMovies, updateMovie
} = movies;

//Middleware de ruta - validacion de token
router.use(validarJWT);

//Rutas:
//Listado de personajes
router.get('/', getMovies);

//CRUD
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);




module.exports = router;