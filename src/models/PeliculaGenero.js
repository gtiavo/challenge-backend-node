const { DataTypes  } = require('sequelize');
const db = require('../db/connections');


const PeliculaGenero = db.define( 'PeliculasGeneros', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    
    peliculaId : {
        type: DataTypes.INTEGER,
        
    },
    generoId : {
        type: DataTypes.INTEGER,
        
    },
   
},
{
    tableName: "peliculas-generos",
    timestamps: false,
  }); 
  
module.exports = PeliculaGenero;  