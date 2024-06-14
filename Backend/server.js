const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./models");

const bcrypt = require('bcrypt');

const IP_ADDRESS = '192.168.86.51';

var corsOptions = {
  origin: "http://192.168.86.51:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Ashars Backend application." });
});


app.post('/signup', async (req, res) => {
    const { username, email, pass_word } = req.body;
 
    try {
      const newUser = await db.tutorials.create({ username,email, pass_word });
      if(newUser){
        res.status(200).send({message: 'Validated Form'})
      }
     else{
      res.status(400).send({error: 'Invalid Signup'});

     }
    } catch (error) {
      res.status(400).send({message: 'Invalid Form'});
    }
  });
app.post('/login', async (req, res) => {
  const { username, email, pass_word } = req.body;
  try {
   
    const user = await db.tutorials.findOne(
      
      
      { where: {email }  });
    
     if (user) {
      console.log("user log posted");
     const password_valid = await bcrypt.compareSync(pass_word, user.pass_word);
        if(password_valid){
          res.status(200).send({message: 'Validated Password'})
     }
     else{
      res.status(400).send({error: 'User not found'});
     }
    }

  } catch (error) {
    res.status(400).send({error: 'Incorrect Email or Password'});
  }
  });


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.sync()