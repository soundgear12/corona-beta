import React, { Component } from "react";
import Table from "./Table.js"
import ResetButton from "./ResetButton.js";
import KH from "../../res/gifs/KH.gif"
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

    render() {
        console.log(this.state)

        return (
            <div>
                <div className="centered-row" style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <p className="table-title">Covid Information</p>
                    <ResetButton onClick={() => console.log("reset button clicked!")} />
                </div>

                <div className="centered-row">
                    <img src={KH} alt="kingdom-hearts" />
                </div>

                <Table data={this.state.covids} />    
            </div>

            
        )
    }
}