const { request, response } = require("express"),
                { Generos } = require("../models");

//Listado de todos los generos                
const getGenres = async (req = request, res = response) => {
  const generos = await Generos.findAll();

  res.json({
    msg: "ok",
    generos,
    error: false,
  });
};

//Creacion y guardado en DB de un genero
const createGenre = async (req = request, res = response) => {
  const { nombre } = req.body;

  try {
    const [genero, created] = await Generos.findOrCreate({ where: {nombre}});

    if( !created ) {
        return res.json({
            msg: `El genero ${ nombre } ya existe en DB`,
            genero: null,
            error:[]
        })
    }
    

    res.json({
        msg: "ok",
        genero,
        error: false,
    });
  } catch (error) {
    console.log(error);
  }
};

//Actualizar y guardar en DB un genero
const updateGenre = async (req = request, res = response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const genero = await Generos.findByPk(id);

    if (!genero) {
      return res.json({
        msg: `El registro con id - ${id} - no existe`,
      });
    }

    genero.update(body);
    res.json({
      genero,
    });
  } catch (error) {
    console.log(error);
  }
};


//Eliminacion de la DB de un genero
const deleteGenre = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const genero = await Generos.findByPk(id);

    if (!genero) {
      return res.json({
        msg: `El registro con id - ${id} - no existe`,
      });
    }

    genero.destroy(id);
    res.json({
      genero,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getGenres,
  createGenre,
  updateGenre,
  deleteGenre,
};
