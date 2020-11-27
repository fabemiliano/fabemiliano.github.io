'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Answers",
      [
        {
          answer: "Há menos de dois anos",
          questionId: 1,
        },
        {
          answer: "Há mais de dois anos",
          questionId: 1,
        },
        {
          answer: "Minha remuneração é justa e adequada à minha função",
          questionId: 2,
        },
        {
          answer: "Minha remuneração é injusta e baixa pelo o que eu faço",
          questionId: 2,
        },
        {
          answer: "Minha remuneração está abaixo do mercado",
          questionId: 2,
        },
        {
          answer: "É compatível com o mercado, mas injusta em relação à minha responsabilidade",
          questionId: 2,
        },
        {
          answer: "Minha remuneração é baixa, mas está compatível com o que eu faço",
          questionId: 2,
        },
        {
          answer: "Sim",
          questionId: 3,
        },
        {
          answer: "Não",
          questionId: 3,
        },
        {
          answer: "Talvez, dependeria da localização",
          questionId: 3,
        },
        {
          answer: "Talvez, dependeria dos benefícios",
          questionId: 3,
        },
        {
          answer: "Sim",
          questionId: 4,
        },
        {
          answer: "Não",
          questionId: 4,
        },
        {
          answer: "Parcialmente",
          questionId: 4,
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete("Answers", null, {}),
};
