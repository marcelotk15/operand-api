'use strict';

const { getCepsBase } = require('../../helpers')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cepBase = await getCepsBase();

    const n = 100; // divide array

    const result = new Array(Math.ceil(cepBase.length / n))
      .fill()
      .map(() => cepBase.splice(0, n));
       
    for await (const line of result) {
      await queryInterface.bulkInsert('ceps', line);
    }
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
