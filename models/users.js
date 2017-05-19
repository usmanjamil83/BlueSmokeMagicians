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
<<<<<<< Updated upstream
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
=======
      // validate: {
      //   isAlpha: true,
      //   notNull: true,
      //   //do we need this as well?
      //   notEmpty: true,
      //   len: [2, 25]
      // }
    },
    answer1: {
      type: DataTypes.STRING
      // validate: {
      //   isAlpha: true,
      //   notNull: true,
      //   //do we need this as well?
      //   notEmpty: true,
      //   len: [2, 25]
      // }
    },
    answer2: {
      type: DataTypes.STRING
      // validate: {
      //   isAlpha: true,
      //   notNull: true,
      //   //do we need this as well?
      //   notEmpty: true,
      //   len: [2, 25]
      // }
    },
    answer3: {
      type: DataTypes.STRING
      // validate: {
      //   isAlpha: true,
      //   notNull: true,
      //   //do we need this as well?
      //   notEmpty: true,
      //   len: [2, 25]
      // }
    },
    answer4: {
      type: DataTypes.STRING
      // validate: {
      //   isAlpha: true,
      //   notNull: true,
      //   //do we need this as well?
      //   notEmpty: true,
      //   len: [2, 25]
      // }
    },
    answer5: {
      type: DataTypes.STRING
      // validate: {
      //   isAlpha: true,
      //   notNull: true,
      //   //do we need this as well?
      //   notEmpty: true,
      //   len: [2, 25]
      // }
    },
    answer6: {
      type: DataTypes.STRING
      // validate: {
      //   isAlpha: true,
      //   notNull: true,
      //   //do we need this as well?
      //   notEmpty: true,
      //   len: [2, 25]
      // }
    },
    matchpoints: {
      type: DataTypes.INTEGER
      // validate: {
      //   len: [2],
      //   min: 18,
      //   max: 99,
      //   isAlpha: false,
      //   notNull: true,
      //   notEmpty: true
      // }
>>>>>>> Stashed changes
    }
    });
  return User;
};