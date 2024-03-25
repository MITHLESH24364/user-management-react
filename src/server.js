// Assuming this is your backend server file (e.g., server.js)

const express = require('express');
const bodyParser = require('body-parser');


// Parse incoming request bodies in JSON format
app.use(bodyParser.json());

// Dummy database to simulate storing user data
let users = [];

// API endpoint to handle saving user data
app.post('/api/user_management', (req, res) => {
  const userData = req.body;
  users.push(userData);
  console.log('User data received:', userData);
  res.status(200).json({ message: 'User data saved successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});






















const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 90;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user_management'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// API endpoint to handle saving user data
app.post('/api/users', (req, res) => {
  const { username, email, age, city } = req.body;

  // Validation (you can add more validation logic as needed)
  if (!username || !email || !age || !city) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Insert data into the database
  const sql = 'INSERT INTO user_data (username, email, age, city) VALUES (?, ?, ?, ?)';
  db.query(sql, [username, email, age, city], (err, result) => {
    if (err) {
      console.error('Error saving user data:', err);
      return res.status(500).json({ error: 'Error saving user data' });
    }
    console.log('User data saved successfully');
    res.status(200).json({ message: 'User data saved successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});