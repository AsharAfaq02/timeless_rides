module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("users", {
     
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      pass_word: {
        type: Sequelize.STRING
      }
    });
  
    return Tutorial;
  };