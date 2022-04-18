//Modulos requeridos:
const { request, response } = require("express"),
                     { Op } = require("sequelize"),
{ Peliculas } = require("../models");

//Controladores:
//Listado de las peliculas
const getMovies = async (req = request, res = response) => {
  const { query } = req;
  let peliculas;
  try {
    if (query.name) {
      //Buscar peliculas por titulo
      peliculas = await Peliculas.findAll({
        include: [{ association: "personaje" }],
        where: {
          titulo: { [Op.like]: `%${query.name}%` },
        },
      });
    } else if (query.order) {
      //Ordenar películas ASC/DESC x fecha de creación
      peliculas = await Peliculas.findAll({
        include: [{ association: "personaje" }],
        order: [["createAt", query.order]],
      });
    } else if (query.genre) {
      //Filtrar peliculas por id de Genero
      const id = Number(query.genre);
      peliculas = await Peliculas.findAll({
        include: [
          {
            association: "genero",
            where: {
              id: id,
            },
          },
          { association: "personaje" },
        ],
      });
    } else {
      peliculas = await Peliculas.findAll({
        include: [{ association: "personaje" }],
      });
    }

    if (peliculas == "") {
      res.status(400).json({
      msg: "El elemento solicitado no existe en DB",
      movies: peliculas,
      error:[]
      });
    } else {
      const listPeliculas = peliculas.map((items) => ({
        image: items.imagen,
        title: items.titulo,
        createAt: items.createAt,
        detail: {
          id: items.id,
          image: items.imagen,
          title: items.titulo,
          createAt: items.createAt,
          points: items.calificacion,
          characters: items.personaje.map((per) => per.nombre),
          genre: items.genero?.map((gen) => gen.nombre),
        },
      }));

      res.status(200).json({
        msg: 'ok',
        movies: listPeliculas,
        error: false
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
      movies: null,
      error:true
    });
  }
};


//Solicitar una película
const getMovie = async (req = request, res = response) => {
  
  const { id } = req.params;

  try {
   
    const pelicula = await Peliculas.findByPk( id, {include: [{ association: "personaje" }]} );

    if( !pelicula ) {
      return  res.status(400).json({
        msg: "El elemento solicitado no existe en DB",
        pelicula: [],
        error:[]
      });
    }

    const solicitada = {
      image: pelicula.imagen,
      title: pelicula.titulo,
      createAt: pelicula.createAt,
      detail: {
        id: pelicula.id,
        image: pelicula.imagen,
        title: pelicula.titulo,
        createAt: pelicula.createAt,
        points: pelicula.calificacion,
        characters: pelicula.personaje?.map((per) => per.nombre)
      }
    }

      res.status(200).json({
        msg: 'ok',
        movies: solicitada,
        error: false
      });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
      movies: null,
      error:true
    });
  }
};



//Creacion y registro de peliculas en DB:
const createMovie = async (req = request, res = response) => {
  const { imagen, titulo, createAt, calificacion } = req.body;

  try {
    const pelicula = new Peliculas({ imagen, titulo, createAt, calificacion });

    if( calificacion < 1 || calificacion > 5 ) {
      return res.json({
        msg:'La calificaion debe ser entre 1 y 5',
        movies: null,
        error: []
      })
    }

    //Guardar en DB
    await pelicula.save();

    res.status(201).json({
     msg: 'ok',
     movies: pelicula,
     error: false
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
      movies: null,
      error:true
    });
  }
};

//Actualizacion de usuario y carga en DB
const updateMovie = async (req = request, res = response) => {
  const { id } = req.params;
  // const { personajeId, ...rest } = req.body;
  const { body } = req;

  try {
    const pelicula = await Peliculas.findByPk(id);

    if (!pelicula) {
      return res.status(404).json({
        msg: `El pelicula con id: -${id}- no existe`,
        movies: pelicula,
        error: []
      });
    }

   

    //Actualiza y guarda en DB la pelicula solicitada
    pelicula.update(body);

    res.status(201).json({
      msg: 'ok',
      movies: pelicula,
      error: null
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
      movies: null,
      error:error
    });
  }
};

//Eliminación de usuario de  la DB
const deleteMovie = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const pelicula = await Peliculas.findByPk(id);
    if (!pelicula) {
      return res.status(404).json({
        msg: `El pelicula con id: -${id}- no existe`,
        movies: pelicula,
        error:[]
      });
    }

    //Elimina de la DB la película solicitada 
    pelicula.destroy(id);

    res.status(200).json({
     msg: 'ok',
     movies: pelicula,
     error: null
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
      movies: null,
      error:error
    });
  }
};

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
