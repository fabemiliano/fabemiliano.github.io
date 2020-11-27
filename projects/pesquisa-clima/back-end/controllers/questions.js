const rescue = require('express-rescue');
const { Questions } = require('../models');

module.exports = rescue(async (req, res) => {
  const { id } = req.params;
  const question = (await Questions.findAll({ where: { id }, attributes: { exclude: ['id'] } }))[0];
  return res.status(200).json(question)
});
