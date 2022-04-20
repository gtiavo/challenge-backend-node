const { DataTypes  } = require('sequelize');
const db = require('../db/connections');


const Personaje = db.define( 'Personajes', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    imagen : {
        type: DataTypes.STRING(200),
        defaultValue: 'public/assets/no-image.jpg' 
       
    },
    nombre : {
        type: DataTypes.STRING(100),
        allowNull: false
       
    },
    edad : {
        type: DataTypes.INTEGER,
        
    },
    peso : {
        type: DataTypes.INTEGER,
        
    },
    historia : {
        type: DataTypes.STRING,
        allowNull: false
        
    },
},
{
    tableName: "personajes",
    timestamps: false,
  }); 
  
module.exports = Personaje;  