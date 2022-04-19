 //Modulos requeridos:
const { Router }     = require('express'),
      { characters } = require('../../controllers');
const {validarJWT, validacionesPersonaje }  = require('../../middlewares');

//metodo de express
const router = Router();

//Desestructuración de characters:
const { 
  getCharacters, createCharacter,
   updateCharacter, deleteCharacter,
   getCharacter 
  } = characters;

//Middleware de ruta - validacion de token
router.use(validarJWT);

//Rutas:
//Listado de personajes
router.get('/', getCharacters);
//Solicitar un personaje
router.get('/:id', getCharacter);


//CRUD de personajes
router.post('/',validacionesPersonaje ,createCharacter);
router.put('/:id', validacionesPersonaje , updateCharacter);
router.delete('/:id', deleteCharacter);




module.exports = router;