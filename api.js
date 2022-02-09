const express = require('express')
//cors allows other ports to make requests
const cors = require('cors')
const mysql = require('mysql')

const app = express()
const port = 4000

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Lat1618!',
    database: 'coronavirus'
})

app.use(cors())

app.get('/getallCovid', (req, res) => {
    const query = "SELECT * FROM COVID"
    db.query(query, (err, rows) => {
        if (err) throw err;
        res.send(rows)
    })
})

app.get('/deleteCovid/:id', (req, res) => {
    const query = `DELETE FROM Covid WHERE row_id = ${req.params.id}`
    db.query(query, (err, rows) => {
        if (err) throw err;
        res.send(rows)
    })
})

//Daily Covid
app.get('/getallDailyCovid', (req, res) => {
    const query = "SELECT * FROM DAILY_COVID"
    db.query(query, (err, rows) => {
        if (err) throw err;
        res.send(rows)
    })
})

//People Vaxxed in US
app.get('/getallVaxxed', (req, res) => {
    const query = "SELECT * FROM PEOPLE_VAXXED"
    db.query(query, (err, rows) => {
        if (err) throw err;
        res.send(rows)
    })
})

//People vaccinated in US

app.listen(port, () => console.log(`REST API listening on port ${port}`))