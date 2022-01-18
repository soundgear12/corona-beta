const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Lat1618!",
    database: "coronavirus"
})
let query = ""

db.connect(err => {
    if (err) throw err;
    console.log("Connection successful!")

    query = "DROP TABLE IF EXISTS COVID"
    executeQuery(query, "Covid table dropped!")
    
    //remove id for covid table. leave unique identifiers to more specifc tables. (e.g. sum of every stat)
    query = "CREATE TABLE COVID (row_id INT AUTO_INCREMENT PRIMARY KEY, region VARCHAR(255), date date, deaths INT, recoveries INT, active INT, death_rate_cases DECIMAL)"
    executeQuery(query, "Covid table created!")

    query = "LOAD DATA LOCAL INFILE 'csv/covidTable.csv' INTO TABLE COVID FIELDS TERMINATED BY ',' IGNORE 1 LINES"
    + "(region, date, deaths, recoveries, active, death_rate_cases)"
    executeQuery(query, "Covid table loaded!")
    
    //run mysql query to reformat date

    db.end(err => {
        if (err) throw err;
        console.log("All done! Closing the database connection!")
    })
})

function executeQuery(query, msg) {
    db.query(query, err => {
        if (err) throw err;
        console.log(msg)
    })
}