import React, {Component} from 'react'; //import Components from React
import { Navbar, NavbarBrand} from 'reactstrap'; //import navbar from Boostrap
import Directory from './components/DirectoryComponents'; // import Directory component
import './App.css';

class App extends Component{
  render (){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory></Directory>
      </div>
    );
  }


}

export default App;
