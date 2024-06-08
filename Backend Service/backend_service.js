const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 4100;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Handle form submission
app.post('/submit', (req, res) => {
  const formData = req.body;

  // Define the path to the JSON file
  const jsonFilePath = path.join(__dirname, 'formData.json');

  // Read the existing data from the JSON file
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      return res.status(500).json({ error: 'Error reading JSON file' });
    }

    // Parse the existing data
    const existingData = data ? JSON.parse(data) : [];

    // Add the new form data
    existingData.push(formData);

    // Write the updated data back to the JSON file
    fs.writeFile(jsonFilePath, JSON.stringify(existingData, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error writing to JSON file' });
      }

      res.status(200).json({ message: 'Form data saved successfully' });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});