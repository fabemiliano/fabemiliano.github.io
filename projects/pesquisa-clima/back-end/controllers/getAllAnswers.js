const rescue = require('express-rescue');
const { userAnswers } = require('../models');

module.exports = rescue(async (req, res) => {
  const answers = await userAnswers.findAll();
  console.log(answers)
  return res.status(200).json(answers)
});
