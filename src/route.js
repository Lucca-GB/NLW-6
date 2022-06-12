const express = require('express')

const route = express.Router()

/*req = requisição da rota*/
/*res = resposta da rota*/
route.get('/', (req, res) => res.render("index"))

module.exports = route