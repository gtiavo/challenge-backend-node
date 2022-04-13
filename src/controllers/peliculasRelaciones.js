const { request, response }                     = require("express"),
      { PeliculasPersonajes, PeliculasGeneros } = require("../models");
      

const createRegister = async (req = request, res = response) => {
  const { peliculaId, personajeId, generoId } = req.body;

  try {
    if (personajeId) {
      const registro = new PeliculasPersonajes({ peliculaId, personajeId });
      await registro.save();
      return res.json({
        registro,
      });
    } else if (generoId) {
      const registro = new PeliculasGeneros({ peliculaId, generoId });
      await registro.save();
      return res.json({
        registro,
      });
    } else {
      return res.json({
        msg: "Debe completar todos los campos",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteRegisterPersonaje = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const registro = await PeliculasPersonajes.destroy(id);

    res.json(registro);
  } catch (error) {
    console.log(error);
  }
};

const deleteRegisterGenero = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const registro = await PeliculasGeneros.destroy(id);

    res.json(registro);
  } catch (error) {
    console.log(error);
  }
};

const getRegisters = async (req = request, res = response) => {
  const peliculasGeneros = await PeliculasGeneros.findAll();
  const peliculasPersonajes = await PeliculasPersonajes.findAll();

  res.json({
    peliculasGeneros,
    peliculasPersonajes,
  });
};

module.exports = {
  createRegister,
  deleteRegisterPersonaje,
  deleteRegisterGenero,
  getRegisters,
};
