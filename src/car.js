import React from 'react';
import './car.css';

function Car (props) {
	return (
		<figure>
			<img src={`img/${props.imgFilename}`} alt={props.carName} />
			<figcaption>{props.carName}</figcaption>
		</figure>
	);
}

export default Car;
