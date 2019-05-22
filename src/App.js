import React from "react";
import "./App.css";

import UserForm from "./components/UserForm";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">GITHUB PROFILE</header>
        <UserForm />
      </div>
    );
  }
}

export default App;
