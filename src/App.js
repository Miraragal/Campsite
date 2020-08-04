import React, {Component} from 'react'; //import Components from React
import { Navbar, NavbarBrand} from 'reactstrap'; //import navbar from Boostrap
import Directory from './components/DirectoryComponents'; // import Directory component
import {CAMPSITES} from './shared/campsites';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      campsites: CAMPSITES
    };
  }
ç
  render (){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory campsites={this.state.campsites}></Directory>
      </div>
    );
  }
}

export default App;
