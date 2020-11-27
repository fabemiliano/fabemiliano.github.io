const rescue = require('express-rescue');
const { Users } = require('../models');

module.exports = rescue(async (req, res) => {
  const { user, password } = req.body;
  const  userFound = (await Users.findAll({ where: { user } }))[0];
  if (!userFound) return res.status(401).json({ message: 'Usuário não encontrado' })
  const {password: userPassword} = userFound;
  if (password !== userPassword) return res.status(400).json({ message: 'Senha Incorreta' })
  return res.status(200).json({ message: 'Logado' })
});

