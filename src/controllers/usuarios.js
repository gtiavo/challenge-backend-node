//Modulos requeridos:
const { request, response } = require("express"),
                     bcrypt = require("bcryptjs"),
                 { sgMail } = require('../services/sendgrid'),
               { Usuarios } = require("../models");



//Controladores:
//Creacion y registro de usuarios en DB:
const createUsuario = async (req = request, res = response) => {
  const { nombre, apellido, email, password } = req.body;

  try {
    const usuario = new Usuarios({ nombre, apellido, email, password });

    //Encriptar la contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    //email de bienvenida
    const msg = {
      to: email, // Change to your recipient
      from: 'victorg.avila@gmail.com', // Change to your verified sender
      subject: 'Bienvenido a mi app, ChallengeNode',
      text: 'Bienvenido a mi app',
      html: `<article style="border: 1px solid black;
      width: 50%;
      font-size: 20px;
      text-align: center;
      padding: 20px;
      background-color: rgba(0, 0, 255, 0.726);
      color: aliceblue;">
      Gracias por pertenecer a esta enorme comunidad!!! :D
      <img 
      style="margin-top: 20px;"
      width="50%"
      src="https://icdn.dtcn.com/image/digitaltrends_es/34-many-wooden-emoticon-or-emoji-face-balls-one-up-front-720x720.jpg"
      alt="no se encontro la imagen"
        >
     </article>`,
    }

    
    
    //Guardar en DB
    await usuario.save();
    await sgMail.send(msg);
    
    res.status(201).json({
      msg:'ok',
      usuario,
      error:false
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
      movies: null,
      error: true
    });
  }
};

//Actualizacion de usuario y carga en DB
const updateUsuario = async (req = request, res = response) => {
  const { id } = req.params;
  const { password, ...rest } = req.body;

  try {
    const usuario = await Usuarios.findByPk(id);

    if (!usuario) {
      return res.status(404).json({
        msg: `El usuario con id: -${id}- no existe`,
        usuario,
        error:[]
      });
    }

    if (password) {
      //Encriptar la contraseña
      const salt = bcrypt.genSaltSync();
      rest.password = bcrypt.hashSync(password, salt);
    }

    //Actualiza y guarda en DB al usuario solicitado
    usuario.update(rest);

    res.status(201).json({
      msg: 'ok',
      usuario,
      error:false
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

//Eliminación de usuario de  la DB
const deleteUsuario = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const usuario = await Usuarios.findByPk(id);
    if (!usuario) {
      return res.status(404).json({
        msg: `El usuario con id: -${id}- no existe`,
        usuario,
        error:[]
      });
    }

    usuario.destroy(id);
    res.status(200).json({
      msg: 'ok',
      usuario,
      error:false
    });
  } catch (error) {
    console.log(error);
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
      movies: null,
      error:true
    });
  }
};

module.exports = {
  createUsuario,
  deleteUsuario,
  updateUsuario,
};
