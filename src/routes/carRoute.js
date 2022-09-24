const express = require('express')
const router = express.Router()
const Controller = require('../controllers/ControllerCarro')

router.post('/add', Controller.CarroNovo)

router.get('/all', Controller.Carros)

router.post('/remove', Controller.RemoverCarro)

router.post('/edit', Controller.AtualizaCarro)

router.get('/edit/:id', Controller.AtualizaViewCarro)

router.get('/add', Controller.ViewCarroNovo)
module.exports = router
