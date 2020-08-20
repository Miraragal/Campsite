import React, { Component } from 'react'; //import Components from React
import Directory from './/DirectoryComponents'; // import Directory component
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect , withRouter} from 'react-router-dom';
import { connect } from 'react-redux'; // Import shared elements with redux
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
// import { CAMPSITES } from '../shared/campsites'; // we don't need it anymore
// import { COMMENTS } from '../shared/comments';
// import { PARTNERS } from '../shared/partners';
// import { PROMOTIONS } from '../shared/promotions';


const mapStateToProps= state =>{
    return{
      campsites: state.CAMPSITES,
      comments: state.COMMENTS,
      partners: state.PARTNERS,
      promotions: state.PROMOTIONS
    }
}

class Main extends Component {

  // constructor(props) { // we don't need it. Redux 
  //   super(props);

  //   this.state = {
  //     campsites: CAMPSITES,
  //     comments: COMMENTS,
  //     partners: PARTNERS,
  //     promotions: PROMOTIONS
  //   };
  // }

  render() {

    const HomePage = () => {
      return (
        <Home
          campsite={this.props.campsites.filter(campsite => campsite.featured)[0]}
          promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
          partner={this.props.partners.filter(partner => partner.featured)[0]}
        />
      );
    }

    const CampsiteWithId = ({ match }) => {
      return (
        <CampsiteInfo campsite={this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
          comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)} />
      );
    }


    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          
          <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} />
          {/* we use the attribute render and give it a function which contains the component jsx */}
          <Route path='/directory/:campsiteId' component={CampsiteWithId} />
          
          <Route exact path='/contactus' component={Contact} />
          {/* We use the attribute component and give it the component name. We are not passing any state date. */}

          {/* Task 1 */}
          <Route exact path='/aboutus' render={()=><About partners={this.props.partners} />} />
        
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(Main));
