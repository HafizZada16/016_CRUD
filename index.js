const express = require("express");
let mysql = require("mysql2");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!"); 
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hpx128535',
    database: 'biodata',
    port: 3308
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:' + err.stack);
        return;
    }
    console.log('Connected Sussessfully');
});

app.get('api/users', (req, res) => { 
    db.query('SELECT * from users', (err, results) => {
        if (err) {  
            console.error('Error executing query:' + err.stack);
            res.status(500).send('Error fetching users');
            return;
        }
        res.json(results);
    });
});

app.post('api/users', (req, res) => {
    const {name, nim, kelas} = req.body;

    if (!name || !email || !kelas) {
        return res.status(400).json({ message : 'Nama, nim, dan kelas harus diisi'});
    }

    
});