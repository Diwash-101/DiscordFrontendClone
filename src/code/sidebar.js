import React from "react";
import "sidebar.css";
function icon(id, check) {
  return (
    <div className="icon">
      <input type="radio" name="r" id={id} defaultChecked={check} />
      <label htmlFor={id}>
        <div className="serverIcon">
          <div className="Wrapper" id="wrap1"></div>
        </div>
      </label>
    </div>
  );
}

function sidebar() {
  return (
    <div className="sidebar">
      {icon("a", true)}
      <hr />
      {icon("b")}
      {icon("c")}
      {icon("d")}
    </div>
  );
}

export default sidebar;
