import React, { Component } from "react";
import logo from "./logo.svg";
import "./stylesheets/App.css";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SideBar />
      </div>
    );
  }
}

export default App;
