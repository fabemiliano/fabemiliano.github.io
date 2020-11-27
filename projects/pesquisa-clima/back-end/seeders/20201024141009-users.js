'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Users",
      [
        {
          user: "Dressler",
          password: "test123",
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete("Users", null, {}),
};
