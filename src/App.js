import React, { Component } from "react";
import "./App.css";
import CarList from "./car-list";
import SortedCars from "./sorted-cars";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <SortedCars sweetRide={this.state.sweetRide} pileOfCrap={this.state.pileOfCrap} />
        <section>
          <p>Swipe until it hurts</p>
          <CarList accept={this.addToSweetList} reject={this.addToCrapList} />
        </section>
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
