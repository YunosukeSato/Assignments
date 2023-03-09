import React, { Component } from 'react';
//import images
import lookLeft from "../assets/look-left.jpeg";
import lookRight from "../assets/look-right.jpeg";

class ChallengeOne extends Component {
  //declare the state here
  state = {
    check: true
  };

  //click left/right button handler goes here
  imgHandler = () => {
    if(this.state.check === true) {
      return lookLeft;
    } else if(this.state.check === false) {
      return lookRight;
    }
  }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.imgHandler()}
            alt=""
          />
        </div>
        <button className="btn" onClick={() => this.setState({check: true})}>⭠</button>
        <button className="btn" onClick={() => this.setState({check: false})}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;