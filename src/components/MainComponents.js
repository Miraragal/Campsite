import React, {Component} from 'react'; //import Components from React
import { Navbar, NavbarBrand} from 'reactstrap'; //import navbar from Boostrap
import Directory from './/DirectoryComponents'; // import Directory component
import CampsiteInfo from './CampsiteInfoComponent';
import {CAMPSITES} from '../shared/campsites';


class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      campsites: CAMPSITES,
      selectedCampsites: null
    };
  }

  onCampsiteSelect(campsiteId){
    console.log('clicked')
    this.setState({selectedCampsites:campsiteId})
}

  render (){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory campsites={this.state.campsites} onClick={campsiteId=> this.onCampsiteSelect(campsiteId)}/>
        <CampsiteInfo campsite={this.state.campsites.filter(campsite=> campsite.id === this.state.selectedCampsites)[0]}/> {/* Call Campsite component */}
      </div>
    );
  }
}

export default Main;
