const express = require('express');
const rota = express.Router();
const carroControle = require("../controllers/carroControle")

rota.get('/salvar', carroControle.novoCarroSite);
rota.post('/salvar', carroControle.novoCarro);

rota.get('/editar/:id', carroControle.atualizaCarroSite);
rota.post('/editar', carroControle.atualizaCarro);

rota.post('/deleta', carroControle.deletaCarro);

rota.get('/lista', carroControle.todosCarros);


module.exports = rota