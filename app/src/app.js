const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// MySQL connection
const db = mysql.createConnection({
  host: "192.168.56.12",   // dbserver VM IP
  user: "root",
  password: "root",        // we’ll set this up in MySQL
  database: "cicd_db"
});

db.connect(err => {
  if (err) {
    console.error("❌ DB connection failed:", err.stack);
    return;
  }
  console.log("✅ Connected to MySQL DB.");
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello 🚀 from Node.js + MySQL CI/CD project!");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`App running at http://0.0.0.0:${port}`);
});
