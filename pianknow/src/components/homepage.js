import React from "react";
import SideBar from "./sidebar";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-main">
          <h1>Play your first song within minutes</h1>
          <h4>Learning Piano has never been easier</h4>
        </div>
        <SideBar />
      </div>
    );
  }
}

export default HomePage;
