const { DataTypes  } = require('sequelize');
const db = require('../db/connections');


const Genero = db.define( 'Generos', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre : {
        type: DataTypes.STRING(100),
       
    },
    imagen : {
        type: DataTypes.STRING(100),
       
    },
    
},
{
    tableName: "generos",
    timestamps: false,
  }); 
  
module.exports = Genero;  