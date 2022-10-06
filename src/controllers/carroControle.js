const Carro = require('../models/Carro');

module.exports = class carroControle {
  static novoCarroSite(req, res) {
    res.render('carros/formulario');
  }
  static async atualizaCarroSite(req, res) {
    const id = req.params.id;
    try {
      const carro = await Carro.findOne({ where: { id: id }, raw: true });
      res.render('carros/atualizar', { carro });
    } catch (err) {
      console.log(err);
    }
  }
  static async novoCarro(req, res) {
    const DadosCarro = {
      nome: req.body.nome,
      modelo: req.body.modelo,
      motor: req.body.motor,
      ano: req.body.ano,
      fabricante: req.body.fabricante,
      valor: req.body.valor,
      cor: req.body.cor,
      opcionais: req.body.opcionais
    };

    await Carro.create(DadosCarro)
      .then(result => {
        console.log('criado com sucesso');
      })
      .catch(err => {
        console.log(err);
      });
    res.render('carros/formulario');
  }

  static async atualizaCarro(req, res) {
    const { id } = req.body;
    const DadosCarro = {
      nome: req.body.nome,
      modelo: req.body.modelo,
      motor: req.body.motor,
      ano: req.body.ano,
      fabricante: req.body.fabricante,
      valor: req.body.valor,
      cor: req.body.cor,
      opcionais: req.body.opcionais
    };
    await Carro.update(DadosCarro, { where: { id: id } })
      .then(result => {
        console.log('atualizado com sucesso');
        res.redirect('/carros/lista');
      })
      .catch(err => {
        console.log(err);
      });
  }

  static async deletaCarro(req, res) {
    const { id } = req.body;
    try {
      Carro.destroy({ where: { id: id } });
      console.log('removido com sucesso');
    } catch (err) {
      console.log(err);
    }
    res.redirect('/carros/lista');
  }

  static async todosCarros(req, res) {
    try {
      const carros = await Carro.findAll({ raw: true });
      res.render('carros/lista', { carros });
    } catch (err) {
      console.log(err);
    }
  }
};
