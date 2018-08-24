import React from "react";

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
	}
	swipeLeft () {
		this.setState({ resolution: 'dislike' });
	}
}

export default Swipeable;
