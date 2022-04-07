const { request, response } = require("express");

const getUsuarios = (req = request, res = response) => {
  res.json({
    msg: "getUsuarios",
  });
};

const getUsuario = (req = request, res = response) => {
  res.json({
    msg: "getUsuario",
  });
};

const createUsuario = (req = request, res = response) => {
  res.json({
    msg: "createUsuario",
  });
};

const updateUsuario = (req = request, res = response) => {
  res.json({
    msg: "updateUsuario",
  });
};

const deleteUsuario = (req = request, res = response) => {
  res.json({
    msg: "deleteUsuario",
  });
};

module.exports = {
  getUsuarios,
  createUsuario,
  deleteUsuario,
  getUsuario,
  updateUsuario,
};
