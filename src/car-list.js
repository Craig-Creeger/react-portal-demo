import React from "react";
import PropTypes from "prop-types";
import Car from "./car";
import Swipeable from "./swipeable";

import "./car-list.css";

const cars = [
  { name: "Mazda MX-5 RF", filename: "mazda_mx-5_rf.jpg" },
  { name: "Austin-Healey 100 BN2", filename: "austin-healey_100_BN2.jpg" },
  { name: "Aston Martin DB4 GT Zagato", filename: "Aston-Martin-DB4-GT-Zagato.jpg" }
];

function CarList(props) {
  return (
    <ul className="carList">
      {cars.map(car => (
        <li key={car.name}>
          <Swipeable id={car.name} accept={props.accept} reject={props.reject}>
            <Car carName={car.name} imgFilename={car.filename} />
          </Swipeable>
        </li>
      ))}
    </ul>
  );
}

CarList.propTypes = {
  accept: PropTypes.func.isRequired,
  reject: PropTypes.func.isRequired
}
export default CarList;
