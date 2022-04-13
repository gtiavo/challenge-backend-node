const { request, response } = require("express"),
                     { Op } = require("sequelize"),
                { Generos } = require("../models");

const getGenres = async( rq = request, res = response) => {

    const generos = await Generos.findAll();

    res.json({
        generos
    })

};

const createGenre = async( req = request, res = response) => {

    const { nombre, imagen} = req.body;

    try {
        
    const genero = await Generos.create({nombre, imagen});

    res.json({
        genero
    })

    } catch (error) {
        console.log(error);
    }

};

const updateGenre = async( req = request, res = response) => {

    const { id } = req.params;
    const { body } = req;

    try {
        
    const genero = await Generos.findByPk(id);

    if( !genero ) {
        return res.json({
            msg: `El registro con id - ${ id } - no existe`
        });
    }

    genero.update(body);
     res.json({
        genero
    })


    } catch (error) {
        console.log(error);
    }

};

const deleteGenre = async( req = request, res = response) => {

    const { id } = req.params;

    try {
        
    const genero = await Generos.findByPk(id);

    if( !genero ) {
        return res.json({
            msg: `El registro con id - ${ id } - no existe`
        });
    }

    genero.destroy(id);
    res.json({
        genero
    });
  
    } catch (error) {
        console.log(error);
    }

};


module.exports = {
    getGenres,
    createGenre,
    updateGenre,
    deleteGenre
}