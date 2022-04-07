const express = require('express'),
      cors    = require('cors'),
      morgan = require('morgan');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //path de las rutas
    this.path = "/api";

    this.dbConection();
    this.middleware();
    this.routes();
  }

  //DataBase
  dbConection() {}

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
    this.app.use(this.path, require("../routes"));
  }

  //Escuchando puerto
  get listen() {
    this.app.listen(this.port, () => {
      console.log(`El servido esta corriendo en el puerto: ${this.port} XD`);
    });
  }
}

module.exports = { Server };
