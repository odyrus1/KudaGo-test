// Import
import React, {Component} from 'react';
import { Route } from 'react-router-dom';

// Local import
import './app.css';
import Events from './Events';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Route path="/" exact component={Events} />
      </div>
    );
  }
}

export default App;
