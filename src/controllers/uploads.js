const path = require('path');
const fs = require('fs');
const cloudinary = require('cloudinary').v2
cloudinary.config( process.env.CLOUDINARY_URL);

const { request, response } = require('express');

const { Personajes, Generos, Peliculas} = require('../models')


const actualizarImagenClouddinary = async( req = request, res = response) => {
    
    const { id, coleccion } = req.params;

    let modelo;

    switch ( coleccion ) {
        case 'peliculas':
            modelo = await Peliculas.findByPk(id);

            if( !modelo ) {
                return res.status(400).json({
                    msg: `No existe una pelicula con el id ${ id }`
                })
            }
            break;
        case 'generos':
            modelo = await Generos.findByPk(id);
    
            if( !modelo ) {
                   return res.status(400).json({
                     msg: `No existe un genero con el id ${ id }`
                  })
              }
             break;
        case 'personajes':
        modelo = await Personajes.findByPk(id);

        if( !modelo ) {
                return res.status(400).json({
                    msg: `No existe un personaje con el id ${ id }`
                })
            }
            break;
    
        default:
            return res.status(500).json({ msg: 'Se me olvido validafr esto'});
    }

    //Limpiar imagenes previas
    if( modelo.imagen ) {
        const nombreArr = modelo.imagen.split('/');
        const nombre = nombreArr[ nombreArr.length - 1 ];
        const [ public_id ] = nombre.split('.');
         cloudinary.uploader.destroy( public_id );
    }

    const { tempFilePath } = req.files.archivo;
  const { secure_url } = await  cloudinary.uploader.upload( tempFilePath);

    modelo.imagen = secure_url;

    await modelo.save();


    res.json(modelo);
}





module.exports = {
    actualizarImagenClouddinary
}