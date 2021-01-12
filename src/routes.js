const express = require('express');

const {cepFormat} = require('./middleware')
const CepController = require('./Controllers/CEPController')

const router = express.Router();

// Home... Wello world
router.get('/', (req, res) => {
  res.json({ status: 200, msg: 'Olá mundo' })
})

router.get('/cep/:cep', cepFormat, CepController.searchByCep)
router.get('/rua/:street', CepController.searchByStreet)

module.exports = router