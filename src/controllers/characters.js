const { request, response } = require("express"),
             { Personajes } = require("../models");

const getCharacters = async (req = request, res = response) => {
  try {
    const personajes = await Personajes.findAll();
    const listPersonajes = personajes.map((items) => ({
      nombre: items.nombre,
      imagen: items.imagen,
    }));

    res.json({
      msg: "getPersonajes",
      personajes: listPersonajes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
    });
  }
};

const createCharacter = async (req = request, res = response) => {
  const { imagen, nombre, edad, peso, historia } = req.body;

  try {
    const personaje = new Personajes({ imagen, nombre, edad, peso, historia });

    //Guardar en DB
    await personaje.save();

    res.status(201).json(personaje);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
    });
  }
};

const updateCharacter = async (req = request, res = response) => {
  const { id } = req.params;
  // const { password, ...rest } = req.body;
  const { body } = req;

  try {
    const personaje = await Personajes.findByPk(id);

    if (!personaje) {
      return res.status(404).json({
        msg: `El personaje con id: -${id}- no existe`,
      });
    }

    personaje.update(body);
    res.status(201).json({
      personaje,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
    });
  }
};

const deleteCharacter = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const personaje = await Personajes.findByPk(id);
    if (!personaje) {
      return res.status(404).json({
        msg: `El personaje con id: -${id}- no existe`,
      });
    }

    personaje.destroy(id);
    res.status(200).json({
      personaje,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
    });
  }
};

module.exports = {
  getCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
