import React, {Component} from 'react'; //import Components from React
import Main from './components/MainComponents'; // import Directory component
import './App.css';

class App extends Component{

  render (){
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
