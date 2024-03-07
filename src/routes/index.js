const express = require('express');
const pessoas = require('./pessoaRoutes.js');
const categorias = require('./categoriaRoutes.js');
const cursos = require('./cursoRoutes.js');
module.exports = app => {
  app.use(
    express.json(),
    pessoas,
    categorias, 
    cursos
   );
};