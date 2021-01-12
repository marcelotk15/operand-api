'use strict';

const { getCepsBase } = require('../../helpers')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ceps', await getCepsBase());
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
