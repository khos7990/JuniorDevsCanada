import Home from "../src/Pages/Home";
import Auth from "./Pages/Auth/Auth";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    user: null,
  };

  setUserInState = (incomingUserData) => {
    console.log(incomingUserData);
    this.setState({ user: incomingUserData });
  };

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <Routes>
            <Route path="/" element={Home} />
          </Routes>
        ) : (
          <Auth setUserInState={this.setUserInState} />
        )}
      </div>
    );
  }
}
