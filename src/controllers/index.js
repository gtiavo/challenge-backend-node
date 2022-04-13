//Modulos requeridos:
const usuarios            = require('./usuarios'),
      auth                = require('./auth'),
      characters          = require('./characters'),
      movies              = require('./movies'),
      genres              = require('./genres'),
      peliculasRelaciones = require('./peliculasRelaciones');



module.exports = {
    usuarios,
    auth,
    characters,
    movies,
    genres,
    peliculasRelaciones
}