const userAnswers = (sequelize, DataTypes) => {
  const userAnswers = sequelize.define("userAnswers", {
    id: DataTypes.INTEGER,
  },
    { timestamps: false }
  );
  userAnswers.associate = (models) => {
    models.Questions.belongsToMany(models.Answers, {
      as: 'answer',
      through: userAnswers,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.Answers.belongsToMany(models.Questions, {
      as: 'question',
      through: userAnswers,
      foreignKey: 'id',
      otherKey: 'id',
    });
  }
  return userAnswers;
};

module.exports = userAnswers;