import React, { Component } from "react";
import TableContainer from "./covid-table/TableContainer";
import TableQueryContainer from "./table-query/TableQueryContainer";
import CovidWorldTableContainer from "./covid-world/CovidWorldTableContainer";
import MenuBar from "./navbar/MenuBar";
import history from "../history";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PeopleVaxxedTableContainer from "./people-vaxxed/PeopleVaxxedTableContainer";
import MainLayout from "./main-layout/MainLayout";

//use BrowserRouter instead of Router
//use format indicated for Route
export default class App extends Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <MenuBar />
                <Routes>
                    <Route exact path="/home" element={<TableContainer />} />
                    <Route exact path="/vaxxed" element={<PeopleVaxxedTableContainer />} />
                    <Route exact path="/layout" element={<MainLayout />} />
                    <Route exact path="/query" element={<TableQueryContainer />} />
                    <Route exact path="/world" element={<CovidWorldTableContainer />} />
                </Routes>
            </BrowserRouter>
        )
    }
}