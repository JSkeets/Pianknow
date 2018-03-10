import React from "react";
class SideBar extends React.Component {
  render() {
    return (
      <div className="side-bar">
        <div id="lessons">Lessons</div>
        <div id="music-theory">Music Theory</div>
        <div id="songs">Songs</div>
        <div id="key-6">Contact Us </div>
      </div>
    );
  }
}

export default SideBar;
