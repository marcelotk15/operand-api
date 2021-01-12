const { Model, DataTypes } = require("sequelize");

class Cep extends Model {
  static init(sequelize) {
    super.init(
      {
        cep: {
          type: DataTypes.STRING,
          allowNull: false
        },
        state: {
          type: DataTypes.STRING,
          allowNull: false
        },
        city: {
          type: DataTypes.STRING,
          allowNull: false
        },
        neighborhood: {
          type: DataTypes.STRING,
          allowNull: true // porque existe campos sem dados na base de dados
        },
        street: {
          type: DataTypes.STRING,
          allowNull: true // porque existe campos sem dados na base de dados
        }
      }, {
        sequelize,
        modelName: 'cep'
      }
    );
  }
}

module.exports = Cep;