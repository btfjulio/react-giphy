import React, { Component } from "react";
import Gif from "./gif";

class GifList extends Component {
  handleClick = url => {
    this.props.onClick(url);
  }

  render() {
    const gifs = this.props.gifs.map((gif, key) => ({ id: key, url: `https://media2.giphy.com/media/${gif}/200w.gif` }));
    const gifsList = gifs.map((gif) => (
      <Gif key={gif.id} url={gif.url} onClick={this.handleClick} />
    ));
    return <div className="gif-list">{gifsList}</div>;  
  }
}

export default GifList;
