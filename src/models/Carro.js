const Sequelize = require('sequelize')
const db = require('./banco.js')

const Car = db.define('carros', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  nome: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
    notEmpty: {
      msg: 'Nome nao pode ser em branco'
    }
  },

  model: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: {
      msg: 'Modelo nao pode ser em branco'
    }
  },

  motor: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: {
      msg: 'Motor nao pode ser em branco'
    }
  },

  ano: {
    type: Sequelize.INTEGER,
    allowNull: false,
    notEmpty: {
      msg: 'Ano nao pode ser em branco'
    }
  },

  fabricante: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: {
      msg: 'Fabricante nao pode ser em branco'
    }
  },

  cor: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: {
      msg: 'Cor nao pode ser em branco'
    }
  },

  opcionais: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: {
      msg: 'Opcionais nao pode ser em branco'
    }
  }
})

Car.sync()

module.exports = Car
