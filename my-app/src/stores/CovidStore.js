import alt from "../alt";
import Actions from "../actions";

const getAllUrl = "http://localhost:4000/getAllCovid/"

class CovidStore {
    constructor() {
        this.covids = []

        this.bindListeners({
            handleGetCovids: Actions.GET_COVIDS
        })
    }

    handleGetCovids = payload => {
        console.log("get covids from CovidStore")

        fetch(getAllUrl)
            .then(res => res.json())
            .then(json => {
                return this.setState({ covids: json })
            })
    }
}

export default CovidStore = alt.createStore(CovidStore, "CovidStore")
window.CovidStore = CovidStore;