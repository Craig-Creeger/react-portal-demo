import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function SortedCars(props) {
  // This would have been better named as 'ReactDOM.renderPortal'.
  return ReactDOM.createPortal(
    <React.Fragment>
      <h2>
        <span style={{ fontSize: "larger" }} role="img" aria-label="car">
          🚗
        </span>{" "}
        Sweet Ride
      </h2>
      {props.sweetRide.map(car => (
        <p key={car}>{car}</p>
      ))}
      <h2 style={{ marginTop: "2.5em" }}>
        <span style={{ fontSize: "larger" }} role="img" aria-label="crap">
          💩
        </span>{" "}
        Pile of Crap
      </h2>
      {props.pileOfCrap.map(car => (
        <p key={car}>{car}</p>
      ))}
    </React.Fragment>,
    document.getElementById("sortedList")
  );
}

SortedCars.propTypes = {
  sweetRide: PropTypes.arrayOf(PropTypes.string).isRequired,
  pileOfCrap: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SortedCars;
