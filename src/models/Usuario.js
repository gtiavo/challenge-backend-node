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
  
  Usuario.prototype.toJSON =  function () {
    let values = Object.assign({}, this.get());
  
    delete values.password;
    return values;
  }
  
module.exports = Usuario;  