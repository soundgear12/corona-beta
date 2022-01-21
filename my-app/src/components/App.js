import React, { Component } from "react";
import TableContainer from "./covid-table/TableContainer";
import Table from "./covid-table/Table";
import MenuBar from "./navbar/MenuBar";
import history from "../history";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//use BrowserRouter instead of Router
//use format indicated for Route
export default class App extends Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <MenuBar />
                <Routes>
                    <Route exact path="/home" element={<TableContainer />} />
                    <Route exact path="/test" element={<Table />} />
                </Routes>
            </BrowserRouter>
        )
    }
}