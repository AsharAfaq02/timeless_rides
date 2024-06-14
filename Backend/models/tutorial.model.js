const bcrypt = require('bcrypt');
module.exports = (sequelize, Sequelize) => {
    
    const Tutorial = sequelize.define("users", {
     
      username: {
        type: Sequelize.STRING,
        allowNull: false,
       
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
          }
        }
      },
      pass_word: {
        type: Sequelize.STRING,
        allowNull: false,
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