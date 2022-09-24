const Sequelize = require('sequelize')

const sequelize = new Sequelize('tepweb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    omitNull: true
  });

sequelize.authenticate()
.then(function(){
    console.log("Conectado com o banco")
  
}).catch(function(){
    console.log("Falha com o banco")
})

module.exports = sequelize