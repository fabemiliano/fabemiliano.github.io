const Answers = (sequelize, DataTypes) => {
  const Answers = sequelize.define("Answers", {
    answer: DataTypes.STRING,
    questionId: DataTypes.INTEGER,
  },
    { timestamps: false }
  );
  Answers.associate = (models) => {
    Answers.belongsTo(models.Questions,
      { foreignKey: 'questionId', as: 'answers' });
  };
  return Answers;
};

module.exports = Answers;