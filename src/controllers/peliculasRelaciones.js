const { request, response }                     = require("express"),
      { PeliculasPersonajes, PeliculasGeneros } = require("../models");
      

const createRegister = async (req = request, res = response) => {
  const { peliculaId, personajeId, generoId } = req.body;

  try {
    if (personajeId) {
      const registro = new PeliculasPersonajes({ peliculaId, personajeId });
      await registro.save();
      return res.json({
        msg: 'ok',
        registro,
        error: null
      });
    } else if (generoId) {
      const registro = new PeliculasGeneros({ peliculaId, generoId });
      await registro.save();
      return res.json({
        msg: 'ok',
        registro,
        error: null
      });
    } else {
      return res.json({
        msg: "Debe completar todos los campos",
        registro: null,
        error:[]
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
      registro: null,
      error:error
    });
  }
};

const deleteRegisterPersonaje = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const registro = await PeliculasPersonajes.destroy(id);

    res.json({
      msg: 'ok',
      registro,
      error: null
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
      registro: null,
      error:error
    });
  }
};

const deleteRegisterGenero = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const registro = await PeliculasGeneros.destroy(id);

    res.json({
      msg: 'ok',
      registro,
      error: null
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
      registro: null,
      error:error
    });
  }
};

const getRegisters = async (req = request, res = response) => {
  const peliculasGeneros = await PeliculasGeneros.findAll();
  const peliculasPersonajes = await PeliculasPersonajes.findAll();

  res.json({
    msg: 'ok',
    peliculasGeneros,
    peliculasPersonajes,
    error:error
  });
};

module.exports = {
  createRegister,
  deleteRegisterPersonaje,
  deleteRegisterGenero,
  getRegisters,
};
