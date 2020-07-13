; // se supendan scipts que esten corriendo
'use strict'

const express = require('express'),
      bodyPaser = require('body-parser'),
      usuarioRutas = require('../routes/usuario.rutas')


let app = express()

app.use(bodyPaser.urlencoded({ extended: false}))
app.use(bodyPaser.json())

app.use('/api', usuarioRutas)

module.exports = app


 