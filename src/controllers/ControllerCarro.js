const { raw } = require('body-parser')
const carrao = require('../models/Carro')

module.exports = class CarController {
  static async CarroNovo(req, res) {
    const carroForm = {
      nome: req.body.nome,
      model: req.body.model,
      motor: req.body.motor,
      ano: req.body.ano,
      fabricante: req.body.fabricante,
      cor: req.body.cor,
      opcionais: req.body.opcionais
    }
    console.log(carroForm)

    await carrao.create(carroForm)
      .then(result => {
        console.log('CARRO CRIADO COM SUCESSO')
        res.render('carros/CarroForm')
      })
  }
  static ViewCarroNovo(req, res) {
    res.render('carros/CarroForm')
  }
  static async Carros(req, res) {
    try {
      const carros = await Car.findAll({ raw: true })
      res.render('carros/ListarCarro', { carros })
    } catch (err) {
      console.log(err)
    }
  }

  static async RemoverCarro(req, res) {
    const { id } = req.body
    try {
      carrao.destroy({ where: { id: id } })
      console.log('CARRO REMOVIDO COM SUCESSO')
    } catch (err) {
      console.log(err)
    }
    res.redirect('/carros/carros')
  }
  static async AtualizaViewCarro(req, res) {
    const id = req.params.id
    try{
      const car = await carrao.findOne({wher:{id:id}, raw: true})
      res.render('carros/AtualizarCarroForm', {car})
    }
    catch(err){
      console.log(err)
    }
  }
  static async AtualizaCarro(req, res) {
    const { id } = req.body
    const carroForm = {
      nome: req.body.nome,
      model: req.body.model,
      motor: req.body.motor,
      ano: req.body.ano,
      fabricante: req.body.fabricante,
      cor: req.body.cor,
      opcionais: req.body.opcionais
    }
    console.log(carroForm)

    await carrao.update(carroForm, { where: { id: id } })
      .then(result => {
        console.log('CARRO ATUALIZADO COM SUCESSO')
        res.redirect('/carros/carros')
      })
      .catch(err => {
        console.log(err)
      })
  }
}
