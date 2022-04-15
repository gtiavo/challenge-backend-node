const { DataTypes  } = require('sequelize');
const db = require('../db/connections');


const Usuario = db.define( 'Usuarios', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre : {
        type: DataTypes.STRING(100),
       
    },
    apellido : {
        type: DataTypes.STRING(100),
       
    },
    email : {
        type: DataTypes.STRING(100),
        
    },
    password : {
        type: DataTypes.STRING(100),
        
    },
},
{
    tableName: "usuarios",
    timestamps: false,
  }); 
  
  
module.exports = Usuario;  