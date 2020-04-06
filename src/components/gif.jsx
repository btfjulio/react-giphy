import React, { Component } from "react";

class Gif extends Component {
  handleClick = (event) => {
    this.props.onClick(event.target.src);
  } 
  render() {
    return <img key={this.props.id} src={this.props.url} onClick={this.handleClick} alt="" className="gif" />;
  }
}

export default Gif;
