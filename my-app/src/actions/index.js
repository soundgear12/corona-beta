import alt from "../alt";
import toastr from "toastr"

class Actions {
    getCovids(payload) {
        return payload
    }

    deleteCovid(id) {
        toastr.success(`Deleted covid with id ${id} from Covid table!`)
        return id
    }

    resetCovidTable(payload) {
        toastr.success("Reset Covid table!")
        return payload
    }

    getDailyCovids(payload) {
        return payload
    }

    getPeopleVaxxed(payload) {
        return payload
    }

    getTotalVaxxed(payload) {
        return payload
    }

    getBothVaxxedTotal(payload) {
        return payload
    }

}

export default alt.createActions(Actions)