import React, { Component } from "react";
import InputList from "./InputList";

export default class TableQueryContainer extends Component {
    state = {
        formValues: {
            fips: '',
            province_state: '',
            people_fully_vaccinated: ''
        }
    }

    handleInput = event => {
        const { formValues } = this.state
        this.setState({ formValues })
    }

    render() {
        const { formValues } = this.state
        return (
            <div>
                <div className='centered-row' style={{ marginTop: 20 }}>
                <div className='add-form-card'>
                    <div className='add-form-title'>
                        Add Anime
                    </div>

                    <form className='add-form' onSubmit={this.handleSubmit}>
                        <div className='inline-block'>
                            <InputList formValues={formValues} handleInput={this.handleInput} />
                            <div className='left-aligned'>
                                <input type="submit" value="Add Anime" className='add-form-submit' />
                            </div>
                        </div>

                        <div
                            className='add-form-element left-aligned inline-block'
                            style={{ marginTop: 10, verticalAlign: "top" }}
                        >

                        </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}