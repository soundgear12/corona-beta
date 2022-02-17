import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import PeopleVaxxedStore from "../../stores/PeopleVaxxedStore";
import Actions from "../../actions"

// could use nation flags instead of GIFs
export default class MainLayout extends Component {
    state = {
        vaxxed: []
    }

    componentDidMount() {
        PeopleVaxxedStore.listen(this.onChange)
        Actions.getBothVaxxedTotal("")
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
            <div className="centered-row" style={{ paddingTop: 10, paddingBottom: 10 }}>
                <p className="table-title">Layout Template</p>

                <div className="cell-container">

                    <div className="main-cell">
                        <p className="cell-title">State Name</p>
                        <h1 className="main-cell-number">99</h1>
                        <p>View Sources</p>

                    </div>


                    <div className="attribute-cell">
                        <p className="cell-title">Select Province/State</p>
                    </div>

                    <div className="attribute-cell">
                        <p className="cell-title">Location</p>
                        <p className="coordinates">13°31′N 144°50′E </p>
                    </div>

                    <div className="attribute-cell">
                        <p className="cell-title">Vaccination Status</p>
                    </div>

                    <div className="date">
                        <p className="cell-title">Date</p>
                        <p>
                        </p>
                    </div>


                </div>


            </div>
        );
    }
}