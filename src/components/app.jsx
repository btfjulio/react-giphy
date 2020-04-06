import React, { Component } from "react";

import giphy from 'giphy-api';

import SearchBar from './search_bar';
import GifList from "./gif_list";
import Gif from "./gif";


class App extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            gifs: [],
            selectedGifId: ''
        }
        this.search('flamengo')
    }

    search = query => {
      const gifFetch = giphy("suFzBbQOzFX5LFFaL2tmz8Dm6o7dSrVN");
      const response = gifFetch.search({
        q: query,
        rating: 'g',
        limit: 10
      }).then(response => {
        console.log(response.data);
        const newGifs = response.data.map(gif => gif.id)
        this.setState({ gifs: newGifs})
      })
    }

    select = url => {
      console.log(url)
      this.setState({
        selectedGifId: url,
      });
    }

    render() {
        return (
          <div>
            <div className="left-scene">
              <SearchBar onSearch={this.search} />
              <div className="selected-gif">
                <Gif url={this.state.selectedGifId} />
              </div>
            </div>
            <div className="right-scene">
              <GifList onClick={this.select} gifs={this.state.gifs} />
            </div>
          </div>
        );
    }
}

export default App;