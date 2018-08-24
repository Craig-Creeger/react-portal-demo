import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import CarList from "./car-list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listShowing: true
    };
  }
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <h1 className="App-title">
            <img src={logo} className="App-logo" alt="logo" />
            React Fragment Demo
          </h1>
        </header>
        <div className="App-contents">
          <button onClick={this.showCars.bind(this)}>Car List</button>
          {this.state.listShowing && <CarList />}
        </div>
      </React.Fragment>
    );
  }
  showCars() {
    this.setState({ listShowing: true });
  }
}

export default App;
