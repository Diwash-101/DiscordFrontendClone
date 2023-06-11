import React from "react";
import "./bar.css";

function friend() {
  return (
    <div className="chatName">
      <div className="chatIcon"></div>
      <div className="friendName">
        <span>DBOSS</span>
      </div>
    </div>
  );
}

function bar() {
  return (
    <div class="bar">
      {friend()}
      {friend()}
      {friend()}
    </div>
  );
}

export default bar;
