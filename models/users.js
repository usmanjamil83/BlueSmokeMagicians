module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING
      // validate: {
      //   isAlpha: true,
      //   notNull: true,
      //   //do we need this as well?
      //   notEmpty: true,
      //   len: [2, 25]
      // }
    },
    age: {
      type: DataTypes.INTEGER
      // validate: {
      //   len: [2],
      //   min: 18,
      //   max: 99,
      //   isAlpha: false,
      //   notNull: true,
      //   notEmpty: true
      // }
    },
    gender: {
      type: DataTypes.STRING,
      defaultValue: "Male"
      // validate: {
      //   isIn: [
      //   ["Agender", "Androgynous", "Female", "Male", "Pangender", "Transgender", "Transsexual"]
      //   ],
      // }
    },
    quote: {
      type: DataTypes.STRING,
      defaultValue: "Let's git up!"
      // validate: {
      //   notNull: true,
      //   isAlphanumeric: true,
      //   len: [2, 100],
      // }
    }
    // image: {
    //   //change dt to string to store file path instead?
    //   type: DataTypes.STRING,
    //   defaultValue: "home/christine/Pictures/Screenshot.png"
    //   // validate: {
    //   //   notNull: true
    //   //     //does extra data need to be added here?
    //   //   }
    //   }
    });
  return User;
};