const { request, response } = require('express');
const cloudinary = require('cloudinary').v2
cloudinary.config( process.env.CLOUDINARY_URL);

const { Personajes, Generos, Peliculas} = require('../models')


const actualizarImagenClouddinary = async( req = request, res = response) => {
    
    const { id, coleccion } = req.params;
    
    const extensionesValidas = ['png', 'jpg', 'jpeg', 'gif'];

    let modelo;

    try {
        
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
                return res.status(500).json({ msg: 'Se me olvido validar esto'});
        }
    
        //validar extensiones permitidas
        const corte = req.files.archivo.name.split('.');
        const extension = corte[ corte.length - 1];
    
        if( !extensionesValidas.includes(extension)) {
            return res.status(400).json(`La extension ${ extension } no es permitida, ${ extensionesValidas }`);  
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
    
    
        res.status(201).json({
            msg: 'ok',
            modelo,
            error: null
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
          msg: "comuniquese con el adminitrador",
          modelo: null,
          error:true
        });
    }

}





module.exports = {
    actualizarImagenClouddinary
}