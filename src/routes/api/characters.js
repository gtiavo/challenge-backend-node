 //Modulos requeridos:
const { Router }     = require('express'),
      {validarJWT}   = require('../../middlewares/validar-jwt'),
      { characters } = require('../../controllers');

//metodo de express
const router = Router();

//Desestructuración de characters:
const { 
  getCharacters, createCharacter,
   updateCharacter, deleteCharacter 
  } = characters;

//Middleware de ruta - validacion de token
router.use(validarJWT);

//Rutas:
//Listado de personajes
router.get('/', getCharacters);

//CRUD
router.post('/', createCharacter);
router.put('/:id', updateCharacter);
router.delete('/:id', deleteCharacter);




module.exports = router;