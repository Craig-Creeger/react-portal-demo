import React from "react";
import PropTypes from "prop-types";

import "./swiper.css";

class Swipeable extends React.Component {
	constructor (props) {
		super(props);
		this.swipeRight = this.swipeRight.bind(this);
		this.swipeLeft = this.swipeLeft.bind(this);

		this.state = {
			resolution: ''
		}
	}
  render() {
    return (
      <div className={`swiper ${this.state.resolution}`}>
        {this.props.children}
        <button className="swipeBtn swipeLeft" onClick={this.swipeLeft} />
        <button className="swipeBtn swipeRight" onClick={this.swipeRight}/>
      </div>
    );
	}
	swipeRight () {
		this.setState({ resolution: 'like' });
		this.props.accept(this.props.id);
	}
	swipeLeft () {
		this.setState({ resolution: 'dislike' });
		this.props.reject(this.props.id);
	}
}

Swipeable.propTypes = {
	id: PropTypes.string.isRequired,
	accept: PropTypes.func.isRequired,
  reject: PropTypes.func.isRequired
}
export default Swipeable;
