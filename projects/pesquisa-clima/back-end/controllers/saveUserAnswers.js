const rescue = require('express-rescue');
const { userAnswers } = require('../models');

module.exports = rescue(async (req, res) => {
  // console.log(req.body)
  const { userAnswers: answers } = req.body;
  console.log(answers)
  answers.forEach((e, i) => {console.log(e, i); userAnswers.create({questionId: (Number(i) + 1), answerId: e})})

  // const answers = (await Answers.findAll({ where: { questionId: id } }));
  // return res.status(200).json(answers)
});

