import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Navheader from '../navbar/navbar';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navheader />
        <div className="landing">
          <Image
            className="landingpic"
            src="https://i.pinimg.com/originals/bc/c2/85/bcc2856a837b3894332efece359278c7.jpg"
            alt="landing page"
            fluid
          />
        </div>
      </div>
    );
  }
}

export default LandingPage;
