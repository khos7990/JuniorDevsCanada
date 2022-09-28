import Home from "./Pages/Home/Home";
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

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.exp <= Date.now() / 1000) {
        localStorage.removeItem("token");
        token = null;
      } else {
        this.setState({ user: payload.user });
      }
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <Routes>
            <Route
              path="/"
              element={<Home setUserInState={this.setUserInState} />}
            />
          </Routes>
        ) : (
          <Auth setUserInState={this.setUserInState} />
        )}
      </div>
    );
  }
}
