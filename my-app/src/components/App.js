import React, { Component } from "react";
import TableContainer from "./covid-table/TableContainer";
import CovidForm from "./covid-form/CovidForm";
import CovidListContainer from "./covid-list/CovidListContainer";
import UserListContainer from "./user-list/UserListContainer";
import CovidWorldTableContainer from "./covid-world/CovidWorldTableContainer";
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
                    <Route exact path="/add" element={<CovidForm />} />
                    <Route exact path="/list" element={<CovidListContainer />} />
                    <Route exact path="/users" element={<UserListContainer />} />
                    <Route exact path="/world" element={<CovidWorldTableContainer />} />
                </Routes>
            </BrowserRouter>
        )
    }
}