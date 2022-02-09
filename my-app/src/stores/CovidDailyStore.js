import alt from "../alt";
import Actions from "../actions";


const getallDailyCovidUrl = "http://localhost:4000/getallDailyCovid/"

class CovidDailyStore {
    constructor() {
        this.covitos = []

        this.bindListeners({
            handleGetDailyCovids: Actions.GET_DAILY_COVIDS
        })
    }


    handleGetDailyCovids = payload => {
        console.log("get daily covids from CovidDailyStore")

        fetch(getallDailyCovidUrl)
            .then(res => res.json())
            .then(json => {
                return this.setState({ covitos: json })
            })
    }

}

export default CovidDailyStore = alt.createStore(CovidDailyStore, "CovidDailyStore")
window.CovidDailyStore = CovidDailyStore;