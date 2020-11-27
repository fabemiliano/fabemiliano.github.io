'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const QuestionsTable = queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    })
    return QuestionsTable;
  },

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('Questions')
};
