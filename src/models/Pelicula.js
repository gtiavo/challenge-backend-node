const { DataTypes  } = require('sequelize');
const db = require('../db/connections');


const Pelicula = db.define( 'Peliculas', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    imagen : {
        type: DataTypes.STRING(100),
       
    },
    titulo : {
        type: DataTypes.STRING(100),
       
    },
    createAt : {
        field: 'created_at',
        type: DataTypes.DATE,
        
    },
    updatedAt : {
        field: 'updated_at',
        type: DataTypes.DATE,
        
    },
    calificacion: {
        type: DataTypes.INTEGER,
        
    },
},
{
    tableName: "peliculas",
    timestamps: false
  }); 
  
module.exports = Pelicula;  