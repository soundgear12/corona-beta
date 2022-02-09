const mysql = require('mysql');
const Query = require('mysql/lib/protocol/sequences/Query');

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

    query = "DROP TABLE IF EXISTS DAILY_COVID"
    executeQuery(query, "Daily Covid table dropped!")

    query = "CREATE TABLE DAILY_COVID (UID INT PRIMARY KEY, City VARCHAR(255), Province_State VARCHAR(255), Cases INT)"
    executeQuery(query, "Daily Covid table created!")

    query = "LOAD DATA LOCAL INFILE 'csv/covidConfirmedTable.csv' INTO TABLE DAILY_COVID FIELDS TERMINATED BY ',' IGNORE 1 LINES"
    + "(uid, city, province_state, cases)"
    executeQuery(query, "Daily Covid table loaded!")

    //People vaccinated in US
    query = "DROP TABLE IF EXISTS PEOPLE_VAXXED"
    executeQuery(query, "People vaxxed table dropped!")

    query = "CREATE TABLE PEOPLE_VAXXED (FIPS INT, Province_State VARCHAR(255), Country_Region VARCHAR(255), Date date, People_Fully_Vaccinated INT, People_Partially_Vaccinated INT)"
    executeQuery(query, "People vaxxed table created!")

    query = "LOAD DATA LOCAL INFILE 'csv/peopleVaxxedTable.csv' INTO TABLE PEOPLE_VAXXED FIELDS TERMINATED BY ',' IGNORE 1 LINES"
    + "(FIPS, Province_State, Country_Region, Date, People_Fully_Vaccinated,People_Partially_Vaccinated)"
    executeQuery(query, "People vaxxed table loaded!")

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