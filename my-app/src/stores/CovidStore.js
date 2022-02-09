import alt from "../alt";
import Actions from "../actions";

const getAllUrl = "http://localhost:4000/getAllCovid"
const deleteUrl = "http://localhost:4000/deleteCovid/"
const resetUrl = "http://localhost:4000/resetCovid"

class CovidStore {
    constructor() {
        this.covids = []

        this.bindListeners({
            handleGetCovids: Actions.GET_COVIDS,
            handleDeleteCovid: Actions.DELETE_COVID,
            handleResetCovid: Actions.RESET_COVID_TABLE
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

    handleDeleteCovid = id => {
        console.log(`CovidStore :: handle delete called on row_id ${id}`)
        fetch(`${deleteUrl}${id}`).then(() => {
            this.handleGetCovids("")
        })
    }

    handleResetCovid = payload => {
        console.log("CovidStore :: handle reset covid table")
        fetch(resetUrl).then(() => {
            this.handleGetCovids("")
        })
    }

}

export default CovidStore = alt.createStore(CovidStore, "CovidStore")
window.CovidStore = CovidStore;