const express = require ('express')
const app = express()
const path = require('path')
const port = 3000

const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const session = require('express-session')

const hbs = handlebars.create({
  partialsDir: ['.src/views/partials']
})

const Carro = require('./src/routes/carRoute')
const banco = require('./src/models/banco')

const CarController = require('./src/controllers/ControllerCarro')

app.use(express.json())
app.use(session({ secret: 'uiuiui' }))
app.use(bodyParser.urlencoded({ extended: true }))


app.engine('handlebars', handlebars.engine())
app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/src/public'))

app.use('/cars',Carro)

app.get('/',(req,res)=>{

  res.render('home')
})

banco.sync()
  .then(() => {
    app.listen(4545)
  })
  .catch(err => {
    console.log(err)
  })
  
//Ao inciar Webserver
app.listen(port, ()=>{
  console.log('Iniciado')
})