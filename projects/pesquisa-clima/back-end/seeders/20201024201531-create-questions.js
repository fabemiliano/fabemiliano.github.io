'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Há quanto tempo você está na Dressler",
          type: "multiple",
        },
        {
          question: "Como você considera a remuneração (Salário e Benefícios) que recebe em relação ao trabalho que você executa",
          type: "multiple",
        },
        {
          question: "Por uma remuneração igual a que você recebe, você sairia da nossa empresa para trabalhar em uma outra empresa semelhante",
          type: "multiple",
        },
        {
          question: "Você se considera satisfeito com os benefícios da empresa",
          type: "multiple",
        },
        {
          question: "O que você acha que poderia ser melhor",
          type: "open",
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete("Questions", null, {}),
};
