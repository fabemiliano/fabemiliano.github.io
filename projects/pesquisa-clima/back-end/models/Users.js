const Users = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    user: DataTypes.STRING,
    password: DataTypes.STRING
  },
    { timestamps: false }
  );

  return Users;
};

module.exports = Users;