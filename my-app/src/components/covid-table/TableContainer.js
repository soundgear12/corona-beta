import React, { Component } from "react";
import Table from "./Table.js"
import ResetButton from "./ResetButton.js";
import CovidStore from "../../stores/CovidStore.js";
import Actions from "../../actions"

// could use nation flags instead of GIFs
export default class TableContainer extends Component {
    state = {
        covids: []
    }

    componentDidMount() {
        CovidStore.listen(this.onChange)
        Actions.getCovids("")
    }

    componentWillUnmount() {
        CovidStore.unlisten(this.onChange)
    }

    onChange = store => {
        const { covids } = store
        this.setState({ covids })
    }

    handleDelete = event => {
        const { id } = event.target
        Actions.deleteCovid(id)
    }

    handleReset = () => {
        Actions.resetCovidTable("")
        //add additional tables (reference tables, many-to-one, one-to-many)
    }

    render() {
        const data = this.state.covids.map(covid => {
            covid.Actions = <i className="fa fa-trash-alt delete-button" id={covid.covid_id} onClick={this.handleDelete} title="Delete" />

            return covid
        })

        return (
            <div>
                <div className="centered-row" style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <p className="table-title">Covid Information</p>
                    <ResetButton onClick={this.handleReset} />
                </div>

                <div className="centered-row">
                </div>

                <Table data={data} />    
            </div>

            
        )
    }
}