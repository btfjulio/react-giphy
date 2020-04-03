import React, { Component } from "react";

import SearchBar from './search_bar';
import GifList from "./gif_list";
import Gif from "./gif";


class App extends Component  {
    render() {
        const gifs = Array(10).fill().map((v, i) => { 
            return { id: i + 1 }
        });
        console.log(gifs)  
        return (
          <div>
            <div className="left-scene">
              <SearchBar />
              <div className="selected-gif">
                <Gif id={10} />
              </div>
            </div>
            <div className="right-scene">
              <GifList gifs={gifs} />
            </div>
          </div>
        );
    }
}

export default App;