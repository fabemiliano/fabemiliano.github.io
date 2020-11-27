const rescue = require('express-rescue');
const { Questions } = require('../models');

module.exports = rescue(async (req, res) => {
  const questions = await Questions.findAll();
  return res.status(200).json(questions)
});
