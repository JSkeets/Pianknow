import React, { Component } from "react";
import logo from "./logo.svg";
import "./stylesheets/App.css";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import HomePage from "./components/homepage";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />

        <HomePage />
      </div>
    );
  }
}

export default App;
