//Modulos requeridos:
const { request, response } = require("express"),
                     bcrypt = require("bcryptjs"),
             { generarJWT } = require("../helpers"),
               { Usuarios } = require("../models");



//Controladores:
//Login de usuario registrado y generacion de token
const login = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    //Verificar si el email existe
    const usuario = await Usuarios.findOne({
      where: {
        email: email,
      },
    });
    if (!usuario) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos",
      });
    }

    // Verificar la contraseña
    const validPassword = bcrypt.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos",
      });
    }

    // Generar el JWT
    const token = await generarJWT(usuario.id);

    res.json({
      usuario,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  login,
};
