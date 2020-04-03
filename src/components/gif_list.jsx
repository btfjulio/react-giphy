import React, { Component } from "react";
import Gif from "./gif";

class GifList extends Component {
  render() {
    const gifsList = this.props.gifs.map((gif) => (
      <Gif key={gif.id} id={gif.id} />
    ));
    return gifsList  
  }
}

export default GifList;
