const Papa = require('papaparse')
const fs =  require('fs')

const covidFilePath = './csv/covid.csv'
const covidConfirmedFilePath = './csv/covidConfirmed.csv'
//const covidConfirmedFilePath = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv'
//const covidWorldFilePath = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv'
//const covidWorldFile = fs.readFileSync(covidWorldFilePath, "utf8")
const covidFile = fs.readFileSync(covidFilePath, "utf8")
const covidConfirmedFile = fs.readFileSync(covidConfirmedFilePath, "utf8")

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

    return { Region, newdate, Deaths, Recoveries, Active, DeathRateCases }
})

const covidData = Papa.unparse(covidArray)
createFile("./csv/covidTable.csv", covidData, "Covid table successfully saved!")

//Confirmed Covid Cases
const covidConfirmedRows = {}
Papa.parse(covidConfirmedFile, {
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
        covidConfirmedRows.data = results.data
        covidConfirmedRows.errors = results.errors
        covidConfirmedRows.meta = results.meta
    }
})

const covidConfirmedLocationArray = covidConfirmedRows.data.map(row => {
    const { UID, Admin2, Province_State, "2/4/22": Cases } = row

    return { UID, Admin2, Province_State, Cases}
})

const covidConfirmedData = Papa.unparse(covidConfirmedLocationArray)
createFile("./csv/covidConfirmedTable.csv", covidConfirmedData, "Covid location table successfully saved!")


function createFile(filePath, data, msg) {
    fs.writeFile(filePath, data, err => {
        if (err) throw err;
        console.log(msg)
    })
}