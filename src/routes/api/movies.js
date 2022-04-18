 //Modulos requeridos:
 const { Router }   = require('express'),
       {validarJWT, validarCampos} = require('../../middlewares'),
       { check }    = require('express-validator'),
       { movies, peliculasRelaciones } = require('../../controllers');

//metodo de express
const router = Router();

//Desestructuración:
//Peliculas
const { 
createMovie, deleteMovie,
getMovies, updateMovie, getMovie
} = movies;

//peliculasRelaciones
const {
    createRegister, deleteRegisterPersonaje,
     deleteRegisterGenero, getRegisters
    } = peliculasRelaciones;

//Middleware de ruta - validacion de token
router.use(validarJWT);

//Rutas:
//Listado de películas
router.get('/', getMovies);
//Solicitar una película
router.get('/:id', getMovie);



//CRUD de películas
router.post('/',[
   check('titulo', 'El titulo es obligatorio').trim().not().isEmpty(),
   validarCampos
], createMovie);
router.put('/:id',[
    check('titulo', 'El titulo es obligatorio').trim(),
    validarCampos
], updateMovie);
router.delete('/:id', deleteMovie);

//Creacion de registros asociados
router.post('/asociados', createRegister);
//Borrado de registros asociados
router.delete('/asociados/personaje/:id', deleteRegisterPersonaje);
router.delete('/asociados/genero/:id', deleteRegisterGenero);

//Listado de registro de relaciones
router.get('/asociados', getRegisters);



module.exports = router;