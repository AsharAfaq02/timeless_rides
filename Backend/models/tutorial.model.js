const bcrypt = require('bcrypt');
module.exports = (sequelize, Sequelize) => {

    const Tutorial = sequelize.define("users", {
     
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [7, Infinity], // Minimum length of 5 characters
            msg: 'Username must be at least 7 characters long' // Error message if validation fails
          },
          notContains: {
            args: ' ',
            msg: 'username cannot contain spaces'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true, //is it a valid email
          async isUnique(value) { //is it unique
            const exists = await Tutorial.findOne({ where: { email: value } }); 
            if (exists) {
              throw new Error('Email already in use.');
            }
          },
          notContains: {
            args: ' ',
            msg: 'email cannot contain spaces'
          }
        }
        
      },
      pass_word: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [7, Infinity], // Minimum length of 5 characters
            msg: 'password must be at least 7 characters long' // Error message if validation fails
          },
          notContains: {
            args: ' ',
            msg: 'password cannot contain spaces'
          }
        }
      },
      
    },
    {
     hooks: {
      beforeCreate: async (user) => {
       if (user.pass_word) {
        const salt = await bcrypt.genSaltSync(10, 'a');
        user.pass_word = bcrypt.hashSync(user.pass_word, salt);
       }
      }
     }
    });
    return Tutorial;
  };