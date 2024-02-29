const express = require('express');
const pessoas = require('./pessoaRoutes.js');
module.exports = app => {
  app.use(
    express.json(),
    pessoas
   );
};