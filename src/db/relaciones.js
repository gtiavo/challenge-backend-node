//Modulos requeridos:
//Modelos de la DB
const { Generos }    = require('../models'),
      { Peliculas }  = require('../models'),
      { Personajes } = require('../models');


//Relaciones:
//Peliculas - Personajes
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


//peliculas - Generos
Generos.belongsToMany( Peliculas, {
    as: 'pelicula',
    through: 'peliculas-generos',
    foreignKey: 'generoId',
    otherKey: 'peliculaId',
    timestamps: false
} ); 

Peliculas.belongsToMany( Generos, {
    as: 'genero',
    through: 'peliculas-generos',
    foreignKey:  'peliculaId',
    otherKey: 'generoId',
    timestamps: false
} );