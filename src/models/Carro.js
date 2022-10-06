const Sequelize = require('sequelize');
const banco = require('./banco.js');

const Carro = banco.define('carros', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  modelo: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  motor: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  ano: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  fabricante: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  valor: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  cor: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  opcionais: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  }
});

Carro.sync()

module.exports = Carro