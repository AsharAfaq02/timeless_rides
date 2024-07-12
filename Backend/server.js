const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const db = require("./models");
const bcrypt = require('bcrypt');
const fs = require('fs');
const IP_ADDRESS = 'localhost';

car_form_data = null;

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Ashars Backend application." });
});

app.post('/send_carSearch', async (req, res) => {
  const { year, make, model } = req.body;
  mess = {
  year: year,
  make: make,
  model: model
  }

  try {
    const car_form = JSON.stringify(mess);
    this.car_form_data = car_form
    // await if log car_form_data
    res.send({ message: car_form_data});

  } catch (error) {
    res.status(400).send({ error: 'Error handling post' });

  }
});
app.get('/info_cars', async (req, res) => {
  if(fs.existsSync("car_wiki.html")){
    fs.unlinkSync("car_wiki.html")
  }

  while(this.car_form_data == null){
    console.log("awating car_form update")
  }
  console.log("at info: ")
  console.log(JSON.parse(this.car_form_data))

  // year = JSON.parse(this.car_form_data)['year']
  // year = JSON.stringify(year)
  // year = year.replace(/"([^"]+)":/g, '$1:');
  make = ''
  model = ''

  make = JSON.parse(this.car_form_data)['make']
  make = JSON.stringify(make)
  make = make.replace(/"([^"]+)":/g, '$1:');

  model = JSON.parse(this.car_form_data)['model']
  model = JSON.stringify(model)
  model = model.replace(/"([^"]+)":/g, '$1:');
 

  query = make + ' ' + model
  let url = 'https://api.wikimedia.org/core/v1/wikipedia/en/search/title?q='+query+'&limit=1';
let response = await fetch( url,
    {
      headers: {
        'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzZmRlNzg5NmFjZGI4YWQ4YjBlNjI2NWExNDgwOWQxNSIsImp0aSI6ImZhOTk5YjQ5M2JkMzhkNWU0NjFkMWI1YTM1NTIyMzg5M2FiNDdkMzYxMzY4MGFiMmQ2YTUxYTljYzY5M2Y0NDczYmJlNDFmZDVhZGU1NWFjIiwiaWF0IjoxNzIwNjgwNzYyLjgxNTMwNiwibmJmIjoxNzIwNjgwNzYyLjgxNTMwOSwiZXhwIjozMzI3NzU4OTU2Mi44MTE3NDUsInN1YiI6Ijc2MDUwMDcxIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.GJrx93wbI-27ShdjoPTAB53Id-_XvR06yuYl6lMEACdDkLC9pPxhySrSMPJExv-tKChTDwri6n0oJZUDZCaVFVy7Yy5734n_LU1NDRUq2cZUtzxb30aEwbahzQq4nLqpHm6bCA-i-8IVdU0TAccyW-nqZxvsxgOg9I4VdC5AeWzNNXx1PnX5qYBwL5dCwv_Ga8z1mqs-KqislDrXUVeEAkbbovytisx_kwkM2Rj6i36Lq3_IJNPIgi9RM4dCJB67eviVwtgAkYFeGGC6mHriDtezW3K3xsBbf6wGbKLfXJgFGfBa2H0HLOZnzmAcW50lS1iNmrYN7Ddz3_6whKo_0JqzBYbbKVazU3Ll20EM3TLX673DWcZo3ME2v2S1cKiMj49Q6IMTumxyc1PsHNQJYHE2Jo5GH2UJR959HUobQ3DIWPFlDvA0NZAIMHiCmeJB7r_F5UPqwYwZYp2B2vt-3agAxLvYfSd9-YkXxZLGP9bA_258cnNQoR-69fihL0AprSMg_GVYxK-wVo8u2EGZvPHX-sNSIXG6X4jtoyMmV9qmKdfysOxRTHriXMixXvAytrhYkfkARNpVP9CcrWZPwHCFIic8RgOHfg7UjgatMLO-VBMY-ZSZGWbQ_-Y2Fx9eewtKmdfGWvNO2IRONC3d6oB_HCIh9s5FV-yMIBgq9Ck',
        'Api-User-Agent': 'http://localhost/8080/info_cars'
        }
    }
);


response.json()
    .then(data => {

      try {
        error_data = data
        jsonData = data['pages'][0]['key'];
        console.log(error_data)
        jsonData = jsonData.replace(/"([^"]+)":/g, '$1:');
      } catch (error) {

        res.send("Invalid search, please try again");
      }
    
      })
    .then(async () => {
        console.log("found page: " + jsonData); // Log the variable when ready
        url = 'https://api.wikimedia.org/core/v1/wikipedia/en/page/' + jsonData + '/html';
        response = await fetch( url,
        {
          headers: {
              'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzZmRlNzg5NmFjZGI4YWQ4YjBlNjI2NWExNDgwOWQxNSIsImp0aSI6ImZhOTk5YjQ5M2JkMzhkNWU0NjFkMWI1YTM1NTIyMzg5M2FiNDdkMzYxMzY4MGFiMmQ2YTUxYTljYzY5M2Y0NDczYmJlNDFmZDVhZGU1NWFjIiwiaWF0IjoxNzIwNjgwNzYyLjgxNTMwNiwibmJmIjoxNzIwNjgwNzYyLjgxNTMwOSwiZXhwIjozMzI3NzU4OTU2Mi44MTE3NDUsInN1YiI6Ijc2MDUwMDcxIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.GJrx93wbI-27ShdjoPTAB53Id-_XvR06yuYl6lMEACdDkLC9pPxhySrSMPJExv-tKChTDwri6n0oJZUDZCaVFVy7Yy5734n_LU1NDRUq2cZUtzxb30aEwbahzQq4nLqpHm6bCA-i-8IVdU0TAccyW-nqZxvsxgOg9I4VdC5AeWzNNXx1PnX5qYBwL5dCwv_Ga8z1mqs-KqislDrXUVeEAkbbovytisx_kwkM2Rj6i36Lq3_IJNPIgi9RM4dCJB67eviVwtgAkYFeGGC6mHriDtezW3K3xsBbf6wGbKLfXJgFGfBa2H0HLOZnzmAcW50lS1iNmrYN7Ddz3_6whKo_0JqzBYbbKVazU3Ll20EM3TLX673DWcZo3ME2v2S1cKiMj49Q6IMTumxyc1PsHNQJYHE2Jo5GH2UJR959HUobQ3DIWPFlDvA0NZAIMHiCmeJB7r_F5UPqwYwZYp2B2vt-3agAxLvYfSd9-YkXxZLGP9bA_258cnNQoR-69fihL0AprSMg_GVYxK-wVo8u2EGZvPHX-sNSIXG6X4jtoyMmV9qmKdfysOxRTHriXMixXvAytrhYkfkARNpVP9CcrWZPwHCFIic8RgOHfg7UjgatMLO-VBMY-ZSZGWbQ_-Y2Fx9eewtKmdfGWvNO2IRONC3d6oB_HCIh9s5FV-yMIBgq9Ck',
              'Api-User-Agent': 'http://localhost/8080/info_cars'
          }});
        response.text()
        .then(data => {
        jsonData = JSON.stringify(data); // Store the JSON data in a variable
        jsonData = jsonData.replace(/"([^"]+)":/g, '$1:');
        //console.log(jsonData)

        fs.writeFile("car_wiki.html", jsonData, (err) => {
          if (err) {
              console.error('Error writing to file:', err);
          } else {
              console.log('Data written to car_wiki.html')
          }

          while(!fs.existsSync("car_wiki.html")){
            console.log("awaiting upload to car_wiki.html")
          }
          console.log('car_wiki.html is updated')

          fs.readFile("./car_wiki.html", 'utf-8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            console.log('posting file contents')
            res.send(JSON.stringify(data));
          
          })

        })
      })
    })
  

})







app.post('/signup', async (req, res) => {
  const { username, email, pass_word } = req.body;
  try {
    const newUser = await db.tutorials.create({ username, email, pass_word });
    if (newUser) {
      res.status(200).send({ message: 'Validated Form' })
    }
    else {
      res.status(400).send({ error: 'Invalid Signup' });
    }
  } catch (error) {
    res.status(400).send({ message: 'Invalid Form' });
  }
});

app.post('/login', async (req, res) => {
  const { email, pass_word } = req.body;
  try {
    const user = await db.tutorials.findOne({ where: { email } });
    console.log("user log posted");
    if (!user) {
      return res.status(400).send({ error: 'User not found' });
    }
    const password_valid = await bcrypt.compareSync(pass_word, user.pass_word);
    if (!password_valid) {
      // Password is incorrect
      return res.status(400).send({ error: 'Incorrect Email or Password' });
    }
    res.status(200).send({ message: 'Validated Password' });
  } catch (error) {
    res.status(400).send({ error: 'Incorrect Email or Password' });
  }
});

// async function executeGPT(prompt) {
//   const OpenAI = require("openai");
//   const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY
//   })
//   const fs = require('fs');
//   console.log("running chatGPT")
//   content_string = "in line seperated paragraphs with bold titles, write a history, design/ build, and popular upgrades on this car: " + prompt;
//   const completion = await openai.chat.completions.create({
//   model: "gpt-3.5-turbo",
//   messages: [
//   { "role": "system", "content": "You are a car enthusiast, and have an expansive knowledge on all things cars." },
//   { "role": "user", "content": content_string }
//   ]})
//   return completion.choices[0].message['content']

// }
// app.post('/searchCar', async (req, res) => {
//   const { year, make, model } = req.body;
//   mess = {
//   year: year,
//   make: make,
//   model: model
//   }

//   try {
//     const into_chatGPT = JSON.stringify(mess);
//     const send_out = await executeGPT(into_chatGPT)
//     console.log(send_out)
//     console.log(year, make, model);
//     res.send({ message: JSON.stringify(send_out) });

//   } catch (error) {
//     res.status(400).send({ error: 'Error handling post' });

//   }
// });
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.sync()