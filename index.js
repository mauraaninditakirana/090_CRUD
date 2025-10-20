const express = require('express');
let mysql = require('mysql2');
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Unicorn5@',
  database: 'mahasiswa',
  PORT: 3308
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to mysql:' + err.stack);
    return;
  }
  console.log('Connection Successfully!');
});
