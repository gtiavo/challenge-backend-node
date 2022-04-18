const { DataTypes  } = require('sequelize');
const db = require('../db/connections');


const Pelicula = db.define( 'Peliculas', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    imagen : {
        type: DataTypes.STRING(200),
       
    },
    titulo : {
        type: DataTypes.STRING(100),
        allowNull: false
       
    },
    createAt : {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false
        
    },
   
    calificacion: {
        type: DataTypes.INTEGER(5),
        allowNull: false
        
    },
},
{
    tableName: "peliculas",
    timestamps: false
  }); 
  
module.exports = Pelicula;  