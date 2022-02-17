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
        Actions.getTotalVaxxed("")
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
                        <h3>99</h3>
                    </div>
                </div>
            </div>    
        );
    }
}