import React, { Component } from "react";
import PeopleVaxxedStore from "../../stores/PeopleVaxxedStore";
import Actions from "../../actions"

// could use nation flags instead of GIFs
export default class MainLayoutContainer extends Component {
    state = {
        vaxxed: []
    }

    componentDidMount() {
        PeopleVaxxedStore.listen(this.onChange)
        Actions.getPeopleVaxxed("")
    }

    componentWillUnmount() {
        PeopleVaxxedStore.unlisten(this.onChange)
    }

    onChange = store => {
        const { vaxxed } = store
        this.setState({ vaxxed })
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
        const data = this.state.vaxxed.map(vaxx => {
            //covid.Actions = <i className="fa fa-trash-alt delete-button" id={covid.covid_id} onClick={this.handleDelete} title="Delete" />

            return vaxx
        })

        return (
            <div>
                <div className="centered-row" style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <p className="table-title">People vaccinated in US Information</p>
                </div>

                <div className="centered-row">
                </div>


            </div>

            
        )
    }
}