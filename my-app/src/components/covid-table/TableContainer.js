import React, { Component } from "react";
import Table from "./Table.js"
import KH from "../../res/gifs/KH.gif"

// could use nation flags instead of GIFs
export default class TableContainer extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch('http://localhost:4000/getAllCovid')
            .then(res => res.json())
            .then((json => {
                this.setState({ data: json })
            }))
    }

    render() {
        console.log(this.state)

        return (
            <div>
                <div className="centered-row" style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <p className="table-title">Anime Information</p>
                </div>

                <div className="centered-row">
                    <img src={KH} alt="kingdom-hearts" />
                </div>

                <Table data={this.state.data} />    
            </div>

            
        )
    }
}