const express = require('express');

const router = express.Router();

// Home... Wello world
router.get('/', (req, res) => {
  res.json({ status: 200, msg: 'Olá mundo' })
})

module.exports = router