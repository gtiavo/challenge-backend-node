//Modulos requeridos:
const { Usuarios } = require("../models");

//Funciones:
//Valida si el email ya existe:
const emailExiste = async (correo) => {
  const existeEmail = await Usuarios.findOne({
    where: {
      email: correo,
    },
  });
  if (existeEmail) {
    throw new Error(`El email ${correo} ya está registrado`);
  }
};

module.exports = {
  emailExiste,
};
