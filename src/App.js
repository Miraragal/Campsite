import React, { Component } from 'react'; //import Components from React
import Main from './components/MainComponents'; // import Directory component
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
