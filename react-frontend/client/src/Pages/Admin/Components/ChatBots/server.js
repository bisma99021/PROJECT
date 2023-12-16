const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

app.get('/chatbot', (req, res) => {
  // Handle GET request for /chatbot here
  res.send('This is the GET endpoint for /chatbot');
});

app.post('/chatbot', (req, res) => {
  // Handle POST request for /chatbot here
  const data = req.body;
  console.log('Received data:', data);

  // Send the received data as a response
  res.json({ message: 'Data received successfully', data });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
