'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const QuestionsTable = queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      answer: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      questionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'Questions', key: 'id' },
      },
    })
    return QuestionsTable;
  },

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('Answers')
};
