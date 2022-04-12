//Modulos requeridos:
const { request, response } = require("express"),
                     { Op } = require('sequelize'),   
             { Personajes } = require("../models");

//Controladores:
//Listado de todos los personajes
const getCharacters = async (req = request, res = response) => {

  const { query } = req;
  let personajes;
  try {

      if( query.name ){
         personajes = await Personajes.findAll({
          include: [
            {association: 'pelicula'}
          ],
          where: {
            nombre: {[Op.like]: `%${query.name}%` }
          }
        });
      }else if(query.age) {
        const edad = Number(query.age);
        personajes = await Personajes.findAll({
          include: [
            {association: 'pelicula'}
          ],
          where: {
            edad: {[Op.eq]: edad }
          }
        });
      }else if(query.movies) {
        const id = Number(query.movies)
        personajes = await Personajes.findAll({
          include:{ 
           association: 'pelicula',
           where: {
            id: {[Op.eq]: id }
           }
          }
        });
      }
      else {
        personajes = await Personajes.findAll({
          include: [
            {association: 'pelicula'}
          ]
        });
      }
      
    
if( personajes == '' ){
 res.json({
  msg:'El elemento solicitado no existe en DB'
})
}
else {

  const listPersonajes = personajes.map((items) => ({
    nombre: items.nombre,
    imagen: items.imagen,
    detail: {
      edad: items.edad,
      peso: items.peso,
      historia: items.historia,
      films:{
        titulos: items.pelicula.map( peli =>  peli.titulo )
      } 
    }
  }));
  
  
  res.json({
    characters: listPersonajes
  });
}
        

  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
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

    res.status(201).json(personaje);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
    });
  }
};

//Actualizacion de usuario y carga en DB
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

//Eliminación de usuario de  la DB
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