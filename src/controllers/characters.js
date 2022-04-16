//Modulos requeridos:
const { request, response } = require("express"),
                     { Op } = require("sequelize"),
             { Personajes } = require("../models");

//Controladores:
//Listado de todos los personajes
const getCharacters = async (req = request, res = response) => {
  const { query } = req;
  let personajes;
  try {
    if (query.name) {
      //Buscar personajes por nombre
      personajes = await Personajes.findAll({
        include: [{ association: "pelicula" }],
        where: {
          nombre: { [Op.like]: `%${query.name}%` },
        },
      });
    } else if (query.age) {
      //Filtrar personajes por edad
      const edad = Number(query.age);
      personajes = await Personajes.findAll({
        include: [{ association: "pelicula" }],
        where: {
          edad: { [Op.eq]: edad },
        },
      });
    } else if (query.movies) {
      //Filtar personajes por id de peliculas
      const id = Number(query.movies);
      personajes = await Personajes.findAll({
        include: {
          association: "pelicula",
          where: {
            id: { [Op.eq]: id },
          },
        },
      });
    } else {
      personajes = await Personajes.findAll({
        include: [{ association: "pelicula" }],
      });
    }

    if (personajes == "") {
      res.status(400).json({
        msg: "El elemento solicitado no existe en DB",
        personajes,
        error:[]
      });
    } else {
      const listPersonajes = personajes.map((items) => ({
        name: items.nombre,
        image: items.imagen,
        detail: {
          id: items.id,
          name: items.nombre,
          image: items.imagen,
          age: items.edad,
          weight: items.peso,
          history: items.historia,
          films: {
            titles: items.pelicula?.map((peli) => peli.titulo),
          },
        },
      }));

      res.json({
        msg:'ok',
        characters: listPersonajes,
        error: false
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
      characters: null,
      error:true
    });
  }
};

//Solicitar un personaje
const getCharacter = async (req = request, res = response) => {
 
  const { id } = req.params

  try {

    const personaje = await Personajes.findByPk( id, {include: [{ association: "pelicula" }]} );

    if( !personaje ) {
      return  res.status(400).json({
        msg: "El elemento solicitado no existe en DB",
        personaje: [],
        error:[]
      });
    }

    const solicitado = {
      name: personaje.nombre,
      image: personaje.imagen,
      detail: {
        id: personaje.id,
        name: personaje.nombre,
        image: personaje.imagen,
        age: personaje.edad,
        weight: personaje.peso,
        history: personaje.historia,
        films: {
          titles: personaje.pelicula?.map((peli) => peli.titulo),
        },
      }
    }
    

    
    res.json({
      msg:'ok',
      characters: solicitado,
      error: false
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
      characters: null,
      error:true
    });
  }
};

//Creacion y registro de personajes en DB:
const createCharacter = async (req = request, res = response) => {
  const { imagen, nombre, edad, peso, historia } = req.body;

  try {
    const personaje = new Personajes({ imagen, nombre, edad, peso, historia });

    //Guardar en DB
    await personaje.save();

    res.status(201).json({
      msg:'ok',
      characters: personaje,
      error: false
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
      characters: null,
      error:true
    });
  }
};

//Actualizacion de usuario y carga en DB
const updateCharacter = async (req = request, res = response) => {
  const { id } = req.params;
  // const { peliculaId, personajeId, ...rest } = req.body;
  const { body } = req;

  try {
    const personaje = await Personajes.findByPk(id);

    if (!personaje) {
      return res.status(404).json({
        msg: `El personaje con id: -${id}- no existe`,
        characters: personaje,
        error:[]
      });
    }

    //Actualiza y guarda el personaje en DB
    personaje.update(body);

    res.status(201).json({
      msg:'ok',
      characters: personaje,
      error: false
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
      characters: null,
      error:true
    });
  }
};

//Eliminación de usuario de  la DB
const deleteCharacter = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const personaje = await Personajes.findByPk(id);
    if (!personaje) {
      return res.status(404).json({
        msg: `El personaje con id: -${id}- no existe`,
        characters: personaje,
        error:[]
      });
    }

    //Elimina el personaje solicitado de la DB
    personaje.destroy(id);
    res.status(200).json({
      msg:'ok',
      characters: personaje,
      error: false
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
      characters: null,
      error:true
    });
  }
};

module.exports = {
  getCharacters,
  getCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
