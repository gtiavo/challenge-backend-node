//Modulos requeridos:
const { request, response } = require("express"),
                     bcrypt = require("bcryptjs"),
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

    //Guardar en DB
    await usuario.save();

    res.status(201).json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
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
      });
    }

    if (password) {
      //Encriptar la contraseña
      const salt = bcrypt.genSaltSync();
      rest.password = bcrypt.hashSync(password, salt);
    }

    usuario.update(rest);
    res.status(201).json({
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
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
      });
    }

    usuario.destroy(id);
    res.status(200).json({
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "comuniquese con el adminitrador",
    });
  }
};

module.exports = {
  createUsuario,
  deleteUsuario,
  updateUsuario,
};
