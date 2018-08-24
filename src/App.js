import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import CarList from "./car-list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listShowing: true,
      sweetRide: [],
      pileOfCrap: []
    };
    this.showCars = this.showCars.bind(this);
    this.addToSweetList = this.addToSweetList.bind(this);
    this.addToCrapList = this.addToCrapList.bind(this);
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
        <main>
          <p>
            <button onClick={this.showCars}>Display the Cars</button>
            <br />
            Swipe until it hurts
          </p>
          <section className="columnar">
            {this.state.listShowing && (
              <CarList accept={this.addToSweetList} reject={this.addToCrapList} />
            )}
            <div>
              <h2>
                <span style={{ fontSize: "larger" }} role="img" aria-label="car">
                  🚗
                </span>{" "}
                Sweet Ride
              </h2>
              <div className="sweetRide">
                {this.state.sweetRide.map(car => (
                  <p key={car}>{car}</p>
                ))}
              </div>
              <h2 style={{ marginTop: "2.5em" }}>
                <span style={{ fontSize: "larger" }} role="img" aria-label="crap">
                  💩
                </span>{" "}
                Pile of Crap
              </h2>
              <div className="pileOfCrap">
                {this.state.pileOfCrap.map(car => (
                  <p key={car}>{car}</p>
                ))}
              </div>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
  showCars() {
    this.setState({ listShowing: true });
  }
  addToSweetList(carName) {
    this.setState({ sweetRide: this.state.sweetRide.concat(carName) });
  }
  addToCrapList(carName) {
    this.setState({ pileOfCrap: this.state.pileOfCrap.concat(carName) });
  }
}

export default App;
