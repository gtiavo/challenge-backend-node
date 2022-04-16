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

//validar las colecciones para la
//carga de archivos
const coleccionespermitidas = ( coleccion = '', colecciones = [] ) => {
  const incluida = colecciones.includes( coleccion);
  if( !incluida ) {
    throw new Error(`La coleccion ${ coleccion} no es permitida, ${ colecciones}`);
  }
  return true;
}

module.exports = {
  emailExiste,
  coleccionespermitidas
};
