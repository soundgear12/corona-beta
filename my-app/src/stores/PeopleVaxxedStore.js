import alt from "../alt";
import Actions from "../actions";


const getallPeopleVaxxedUrl = "http://localhost:4000/getallVaxxed/"

class PeopleVaxxedStore {
    constructor() {
        this.vaxxed = []

        this.bindListeners({
            handleGetPeopleVaxxed: Actions.GET_PEOPLE_VAXXED
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

}

export default PeopleVaxxedStore = alt.createStore(PeopleVaxxedStore, "PeopleVaxxedStore")
window.PeopleVaxxedStore = PeopleVaxxedStore;