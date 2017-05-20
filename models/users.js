module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      validate: {
       isAlpha: true,
       notNull: true,
         //do we need this as well?
         notEmpty: true,
         len: [2, 25]
       },
       age: {
         type: DataTypes.INTEGER,
         validate: {
           len: [2],
           min: 18,
           max: 99,
           isAlpha: false,
           notNull: true,
           notEmpty: true
         }
       },
       gender: {
         type: DataTypes.STRING,
         defaultValue: "Male",
         validate: {
           isIn: [
           ["Agender", "Androgynous", "Female", "Male", "Pangender", "Transgender", "Transsexual"]
           ],
         }
       },
       quote: {
         type: DataTypes.STRING,
         defaultValue: "Let's git up!",
         validate: {
           notNull: true,
           isAlphanumeric: true,
           len: [2, 100],
         }
       },
       image: {
        //change dt to string to store file path instead?
        type: DataTypes.STRING,
        validate: {
          notNull: true
        }
      },
      answer1: {
        type: DataTypes.STRING,
        validate: {
          notNull: true
        }
      },
      answer2: {
        type: DataTypes.STRING,
        validate: {
          notNull: true
        }
      },
      answer3: {
        type: DataTypes.STRING,
        validate: {
          notNull: true
        }
      },
      answer4: {
        type: DataTypes.STRING,
        validate: {
          notNull: true
        }
      },
      answer5: {
        type: DataTypes.STRING,
        validate: {
          notNull: true
        }
      },
      answer6: {
        type: DataTypes.STRING,
        validate: {
          notNull: true
        }
      },
      matchpoints: {
        type: DataTypes.INTEGER,
        validate: {
          notNull: true
        }
      }
    }
  });
  return User;
};
