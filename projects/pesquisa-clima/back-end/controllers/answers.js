const rescue = require('express-rescue');
const { Answers } = require('../models');

module.exports = rescue(async (req, res) => {
  const { id } = req.params;
  const answers = (await Answers.findAll({ where: { questionId: id } }));
  return res.status(200).json(answers)
});

