import "./App.css";
import "./chatbox.js";

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

function message() {
  return (
    <div className="message">
      <div className="profilepic chatIcon"></div>
      <div className="msgcontainer">
        <div className="profilename">
          <h5>DBOSS</h5>
        </div>
        <div className="datetime"> 02/23/2023 2:59 PM</div>
        <div className="filler"></div>
        <div className="msg">Hello, how are you?</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="Sidebar">
        {icon("a", true)}
        <hr />
        {icon("b")}
        {icon("c")}
        {icon("d")}
      </div>
      <div className="Bar">
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
        {friend()}
      </div>
      <div className="Chat">
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
        {message()}
      </div>
      <div className="Last"></div>
      <div className="topbar">
        <div className="search" contentEditable="true">
          Find or start a conversation
        </div>
        <div className="Vl topVl"></div>
      </div>
    </div>
  );
}

export default App;
