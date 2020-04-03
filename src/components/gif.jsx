import React, { Component } from "react";

class Gif extends Component {
  render() {
    const src = `https://plugcitarios.com/blog/wp-content/uploads/2015/03/Dragon-Ball-Z-Animated-GIF-${this.props.id}.gif`;
    return <img src={src} alt="" className="gif" />;
  }
}

export default Gif;
