const rescue = require('express-rescue');
const { Answers } = require('../models');

module.exports = rescue(async (req, res) => {
  const answers = await Answers.findAll();
  return res.status(200).json(answers)
});
