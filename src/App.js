import Site from './containers/Site/Site';
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';

class App extends Component {
    render(){
        return(
          <div>
            <BrowserRouter>
              <Site />
            </BrowserRouter>
          </div>
      );
    }
}

export default App
