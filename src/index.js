const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3030;

const hbs = handlebars.create({
  partialsDir: ['.views/partials']
});


// rotas
const rotaCarros = require('./routes/rotaCarros');



//uses
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//view engine
app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

// rotas use
app.use('/carros', rotaCarros);



app.get('/', (req, res) => {
  res.render('home')
});
app.get('/home', (req, res)=>{
  res.render('home')
})

app.listen(port);
