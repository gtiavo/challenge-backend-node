//Modulos requeridos:
const express = require('express'),
      cors    = require('cors'),
      db      = require('../db/connections'),
      morgan  = require('morgan');

//Modelo del Servidor:
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //path de las rutas
    this.path = {
      api: "/",
      auth: "/auth"
    };

    this.dbConnection();
    this.middleware();
    this.routes();
  }

  //DataBase
   //Coneccion a la DB
   async dbConnection() {
    try {
       await db.authenticate();
       console.log('Database online'); 
    } catch (error) {
        throw new Error( error )
    }
}

  //middleware
  middleware() {
    //CORS
    this.app.use(cors());

    //morgan
    this.app.use( morgan('dev'));

    //json
    this.app.use(express.json());

    //static
    this.app.use(express.static("src/public"));
  }

  //Rutas
  routes() {
    this.app.use(this.path.api, require("../routes/api"));
    this.app.use(this.path.auth, require("../routes"));
  }

  //Escuchando puerto
  get listen() {
    this.app.listen(this.port, () => {
      console.log(`El servido esta corriendo en el puerto: ${this.port} XD`);
    });
  }
}

module.exports = { Server };
