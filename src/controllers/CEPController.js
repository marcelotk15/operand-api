const Sequelize = require('sequelize')

const { isCep } = require('../helpers');
const Cep = require('../models/cep');

module.exports = {
  async searchByCep(req, res) {
    const { cep } = req.params;
    
    const useCep = cep.replace('-', '');

    console.log(useCep);

    const result = await Cep.findOne({
      where: {
        cep: useCep
      },
      attributes: {
        exclude: ['id', 'createdAt', 'updatedAt']
      }
    });

    return res.json({ status: 200, result });
  },

  async searchByStreet(req, res) {
    const { street } = req.params;

    if (!street) return res.json({ status: 404, msg: 'algo deu errado' });

    const result = await Cep.findAll({
      where: {
        street: {
          [Sequelize.Op.like]: `%${street}%`
        }
      },
      attributes: {
        exclude: ['id', 'createdAt', 'updatedAt']
      }
    })

    return res.json({ status: 200, result });
  }
}