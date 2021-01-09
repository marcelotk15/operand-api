const { isCep } = require('./helpers')

module.exports = {
  cepFormat(req, res, next) {
    const { cep } = req.params;

    if (isCep(cep)) {
      return next()
    }

    return res.json({ status: 400, msg: 'CEP mal formatado' })
  }
}