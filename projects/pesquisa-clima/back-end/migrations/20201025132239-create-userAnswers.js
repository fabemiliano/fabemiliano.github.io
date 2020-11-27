'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const QuestionsTable = queryInterface.createTable('userAnswers', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      answerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'Answers', key: 'id' },
        primaryKey: true,
      },
    })
    return QuestionsTable;
  },

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('userAnswers')
};
