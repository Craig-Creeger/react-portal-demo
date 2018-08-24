import React from "react";
import Car from "./car";
import Swipeable from "./swipeable";

import "./car-list.css";

function CarList() {
  return (
    <ul className="carList">
      <li>
        <Swipeable>
          <Car carName="Mazda MX-5 RF" imgFilename="mazda_mx-5_rf.jpg" />
        </Swipeable>
      </li>
      <li>
        <Swipeable>
          <Car carName="Austin-Healey 100 BN2" imgFilename="austin-healey_100_BN2.jpg" />
        </Swipeable>
      </li>
      <li>
        <Swipeable>
          <Car carName="Aston Martin DB4 GT Zagato" imgFilename="Aston-Martin-DB4-GT-Zagato.jpg" />
        </Swipeable>
      </li>
    </ul>
  );
}

export default CarList;
