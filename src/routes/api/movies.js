 //Modulos requeridos:
 const { Router }                      = require('express'),
       {validarJWT}                    = require('../../middlewares/validar-jwt'),
       { movies, peliculasRelaciones } = require('../../controllers');

//metodo de express
const router = Router();

//Desestructuración:
//Characters
const { 
createMovie, deleteMovie,
getMovies, updateMovie
} = movies;

//peliculasRelaciones
const {
    createRegister, deleteRegisterPersonaje,
     deleteRegisterGenero, getRegisters
    } = peliculasRelaciones

//Middleware de ruta - validacion de token
router.use(validarJWT);

//Rutas:
//Listado de películas
router.get('/', getMovies);

//CRUD de películas
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

//Creacion de registros asociados
router.post('/asociados', createRegister);
//Borrado de registros
router.delete('/asociados/personaje/:id', deleteRegisterPersonaje);
router.delete('/asociados/genero/:id', deleteRegisterGenero);

//Listado de registro de relaciones
router.get('/asociados', getRegisters);






module.exports = router;