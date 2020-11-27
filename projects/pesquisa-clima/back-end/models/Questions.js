const Questions = (sequelize, DataTypes) => {
  const Questions = sequelize.define("Questions", {
    question: DataTypes.STRING,
    type: DataTypes.STRING
  },
    { timestamps: false }
  );
  Questions.associate = (models) => {
    Questions.hasMany(models.Answers, {foreignKey: 'id', as: 'answers'})
  }
  return Questions;
};

module.exports = Questions;