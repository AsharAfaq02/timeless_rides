const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();

const db = require("./models");

const bcrypt = require('bcrypt');

const IP_ADDRESS = 'localhost';

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
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
  const {email, pass_word } = req.body;
  try {
   
    const user = await db.tutorials.findOne({ where: {email}});
    console.log("user log posted");
   

    if(!user){
      return res.status(400).send({error: 'User not found'});
     }

     const password_valid = await bcrypt.compareSync(pass_word, user.pass_word);
     if (!password_valid) {
      // Password is incorrect
      return res.status(400).send({ error: 'Incorrect Email or Password' });
    }
    
    res.status(200).send({ message: 'Validated Password' });
  
    } catch (error) {
      res.status(400).send({error: 'Incorrect Email or Password'});
   
    }
    });
    
    //newest post for searchCar tool, not done
    app.post('/searchCar', async (req, res) => {
      const {year, make, model } = req.body;
      
      mess = {
        year: year,
        make: make,
        model: model
      }

      try {

        console.log(year, make, model);

        res.send({message: JSON.stringify(mess)});
       
       
      }catch (error) {
        res.status(400).send({error: 'blah'});
     
      }
    });
   
        
       

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.sync()