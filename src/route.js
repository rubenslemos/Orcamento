const express = require('express')
const QuestionController = require('./controllers/QuestionController.js')
const route = express.Router()
const RoomController = require('./controllers/RoomController')

route.get('/', (_req, res) => res.render("index", { page: 'enter-room' }))
route.get('/cadastrocliente', (_req, res) => res.render("cadastrocliente", { page: 'cadastrocliente' }))
route.get('/cadastrousuario', (_req, res) => res.render("cadastrousuario", { page: 'cadastrousuario' }))
route.get('/orcamento', (_req, res) => res.render("orcamento", { page: 'orcamento' }))
route.get('/servicos', (_req, res) => res.render("servicos", { page: 'servicos' }))
module.exports = route