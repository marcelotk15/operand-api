const Sequelize = require('sequelize');
const Cep = require('../models/cep');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

Cep.init(connection);

module.exports = connection;