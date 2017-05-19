module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.STRING,
      defaultValue: "Male"
    },
    quote: {
      type: DataTypes.STRING,
      defaultValue: "Let's git up!"
    },
    image: {
      type: DataTypes.BLOB
    },
    answer1: {
      type: DataTypes.STRING
    },
    answer2: {
      type: DataTypes.STRING
    },
    answer3: {
      type: DataTypes.STRING
    },
    answer4: {
      type: DataTypes.STRING
    },
    answer5: {
      type: DataTypes.STRING
    },
    answer6: {
      type: DataTypes.STRING
    },
    matchpoints: {
      type: DataTypes.INTEGER
    }
    });
  return User;
};