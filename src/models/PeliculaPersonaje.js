const { DataTypes  } = require('sequelize');
const db = require('../db/connections');


const PeliculaPersonaje = db.define( 'PeliculasPersonajes', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    
    peliculaId : {
        type: DataTypes.INTEGER,
        
    },
    personajeId : {
        type: DataTypes.INTEGER,
        
    },
   
},
{
    tableName: "peliculas-personajes",
    timestamps: false,
  }); 
  
module.exports = PeliculaPersonaje;  