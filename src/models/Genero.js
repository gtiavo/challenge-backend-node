const { DataTypes  } = require('sequelize'),
                  db = require('../db/connections');


const Genero = db.define( 'Generos', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre : {
        type: DataTypes.STRING(100),
        allowNull: false
       
    },
    imagen : {
        type: DataTypes.STRING(200),
        defaultValue: 'public/assets/no-image.jpg' 
    },
    
},
{
    tableName: "generos",
    timestamps: false,
  }); 
  
module.exports = Genero;  