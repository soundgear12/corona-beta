const Papa = require('papaparse')
const fs =  require('fs')

const covidFilePath = './csv/covid.csv'
const covidFile = fs.readFileSync(covidFilePath, "utf8")

const covidRows = {}
Papa.parse(covidFile, {
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
        covidRows.data = results.data
        covidRows.errors = results.errors
        covidRows.meta = results.meta
    }
})

const covidArray = covidRows.data.map(row => {
    const { Region, date, Deaths, Recoveries, Active, DeathRateCases } = row

    const datearray = date.split("/");
    
    const newdate =  datearray[2] + '-' + datearray[0] + '-' + datearray[1];
    console.log(newdate);

    return { Region, newdate, Deaths, Recoveries, Active, DeathRateCases }
})

const covidData = Papa.unparse(covidArray)
createFile("./csv/covidTable.csv", covidData, "Covid table successfully saved!")

function createFile(filePath, data, msg) {
    fs.writeFile(filePath, data, err => {
        if (err) throw err;
        console.log(msg)
    })
}