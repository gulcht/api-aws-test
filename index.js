const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
require('dotenv').config()


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/att', function(req, res, next) {
    pool.query('SELECT * FROM attractions', function (error, rows, fields) {
        res.json(rows)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})