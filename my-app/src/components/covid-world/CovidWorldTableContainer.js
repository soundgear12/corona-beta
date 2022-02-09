import React, { Component } from "react";
import CovidWorldTable from "./CovidWorldTable";
import CovidDailyStore from "../../stores/CovidDailyStore.js";
import Actions from "../../actions"

// could use nation flags instead of GIFs
export default class CovidWorldTableContainer extends Component {
    state = {
        covitos: []
    }

    componentDidMount() {
        CovidDailyStore.listen(this.onChange)
        Actions.getDailyCovids("")
    }

    componentWillUnmount() {
        CovidDailyStore.unlisten(this.onChange)
    }

    onChange = store => {
        const { covitos } = store
        this.setState({ covitos })
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
        const data = this.state.covitos.map(covito => {
            //covid.Actions = <i className="fa fa-trash-alt delete-button" id={covid.covid_id} onClick={this.handleDelete} title="Delete" />

            return covito
        })

        return (
            <div>
                <div className="centered-row" style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <p className="table-title">Daily Covid Information</p>
                </div>

                <div className="centered-row">
                </div>

                <CovidWorldTable data={data} />    
            </div>

            
        )
    }
}