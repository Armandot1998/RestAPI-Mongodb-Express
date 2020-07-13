;
'use strict'
const express = require('express'),
      usuariosController = require('../controllers/usuario.controller')
      

let api = express.Router()

// ENDPOINT

api.get('/prueba', usuariosController.prueba)


module.exports = api