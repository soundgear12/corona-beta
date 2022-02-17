import alt from "../alt";
import Actions from "../actions";


const getallPeopleVaxxedUrl = "http://localhost:4000/getallVaxxed/"
const getBothVaxxUrl = "http://localhost:4000/getbothVaxxed/"
const getBothVaxxTotalUrl = "http://localhost:4000/getbothVaxxTotal/"

class PeopleVaxxedStore {
    constructor() {
        this.vaxxed = []

        this.bindListeners({
            handleGetPeopleVaxxed: Actions.GET_PEOPLE_VAXXED,
            //handleGetBothVaxx: Actions.GET_BOTH_VAXXED,
            handleGetBothVaxxTotal: Actions.GET_BOTH_VAXXED_TOTAL
            
        })
    }


    handleGetPeopleVaxxed = payload => {
        console.log("get people vaxxed from PeopleVaxxedStore")

        fetch(getallPeopleVaxxedUrl)
            .then(res => res.json())
            .then(json => {
                return this.setState({ vaxxed: json })
            })
    }

    handleGetBothVaxxTotal = payload => {
        console.log("get people vaxxed totals from PeopleVaxxedStore")

        fetch(getBothVaxxTotalUrl)
            .then(res => res.json())
            .then(json => {
                return this.setState({ vaxxed: json })
            })
    }

}

export default PeopleVaxxedStore = alt.createStore(PeopleVaxxedStore, "PeopleVaxxedStore")
window.PeopleVaxxedStore = PeopleVaxxedStore;