const express = require('express')

const route = express.Router()

/*req = requisição da rota*/
/*res = resposta da rota*/
route.get('/', (req, res) => res.render("index"))
route.get('/room', (req, res) => res.render("room"))
route.get('/create-pass', (req, res) => res.render("create-pass"))

module.exports = route