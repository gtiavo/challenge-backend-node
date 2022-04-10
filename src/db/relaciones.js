//Modulos requeridos:
//Modelos de la DB
const { Generos } = require('../models'),
      { Peliculas } = require('../models'),
      { Personajes } = require('../models');


//Relaciones:
Personajes.belongsToMany( Peliculas, {
    as: 'pelicula',
    through: 'peliculas-personajes',
    foreignKey: 'personajeId',
    otherKey: 'peliculaId',
    timestamps: false
} ); 

Peliculas.belongsToMany( Personajes, {
    as: 'personaje',
    through: 'peliculas-personajes',
    foreignKey:  'peliculaId',
    otherKey: 'personajeId',
    timestamps: false
} );