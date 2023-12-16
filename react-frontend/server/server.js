const express = require('express');
const cors = require("cors");
const pool = require("./database");


const app = express();

app.use(express.json());
app.use(
  cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
  })
);

app.post("/login", async (req, res) => {
  const email = req.body["email"];
  const password = req.body["password"];

  const loginQuery = `SELECT * FROM users WHERE email = $1 AND password = $2`;
  const loginValues = [email, password];

  try {
    const user = await pool.query(loginQuery, loginValues);

    if (user.rows.length > 0) {
      // Successful login
      return res.json({ success: true });
    } else {
      // Invalid credentials
      return res.json({ success: false });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.post("/addUser", async (req, res) => {
  const name = req.body["name"];
  const email = req.body["email"];
  const phoneNumber = req.body["phoneNumber"];
  const password = req.body["password"];
  const confirm_password = req.body["confirm_password"];

  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Number: " + phoneNumber);
  console.log("Password: " + password);
  console.log("Confirm Password: " + confirm_password);

  const insertQuery = `INSERT INTO users (name, email, phoneNumber, password, confirm_password) VALUES ($1, $2, $3, $4, $5)`;
  const values = [name, email, phoneNumber, password, confirm_password];

  // Check if the email already exists
  const emailExistsQuery = `SELECT * FROM users WHERE email = $1`;
  const emailExistsValues = [email];

  const existingUser = await pool.query(emailExistsQuery, emailExistsValues);

  if (existingUser.rows.length > 0) {
    // Email already exists, handle accordingly
    return res.status(400).json({ error: 'Email already exists' });
  }

  pool.query(insertQuery, values)
    .then((response) => {
      console.log("Data Saved");
      console.log(response);
      res.json({ success: true }); // Send a JSON response indicating success
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" }); // Send an error response
    });
});

app.listen(4000, () => console.log("SERVER ON LOCALHOST 4000"));