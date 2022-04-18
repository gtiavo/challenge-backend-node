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
        allowNull: false
       
    },
    apellido : {
        type: DataTypes.STRING(100),
        allowNull: false

       
    },
    email : {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
        
    },
    password : {
        type: DataTypes.STRING(100),
        allowNull: false
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