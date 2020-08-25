import React, { Component } from "react"; //import Components from React
import Directory from ".//DirectoryComponents"; // import Directory component
import CampsiteInfo from "./CampsiteInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux"; // Import shared elements with redux
// import { CAMPSITES } from '../shared/campsites'; // we don't need it anymore
// import { COMMENTS } from '../shared/comments';
// import { PARTNERS } from '../shared/partners';
// import { PROMOTIONS } from '../shared/promotions';
import {
  postComment,
  fetchCampsites,
  fetchComments,
  fetchPromotions,
} from "../redux/ActionCreator";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = (state) => {
  return {
    campsites: state.campsites,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions,
  };
};

const mapDispatchtoProps = {
  postComment: (campsiteId, rating, author, text) =>
    postComment(campsiteId, rating, author, text),
  fetchCampsites: () => fetchCampsites(),
  resetFeedbackForm: () => actions.reset("feedbackForm"),
  fetchComments: () => fetchComments(),
  fetchPromotions: () => fetchPromotions(),
};

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

  componentDidMount() {
    this.props.fetchCampsites();
    this.props.fetchComments();
    this.props.fetchPromotions();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          campsite={
            this.props.campsites.campsites.filter(
              (campsite) => campsite.featured
            )[0]
          } // Doble campsites pq estamos llamando al array de campsites.js que contiene isLoading, errMess y campsites []
          campsitesLoading={this.props.campsites.isLoading}
          campsiteErrMess={this.props.campsites.errMess}
          promotion={
            this.props.promotions.promotions.filter(
              (promotion) => promotion.featured
            )[0]
          }
          promotionLoading={this.props.promotions.isLoading}
          promotionErrMess={this.props.promotions.errMess}
          partner={this.props.partners.filter((partner) => partner.featured)[0]}
        />
      );
    };

    const CampsiteWithId = ({ match }) => {
      return (
        <CampsiteInfo
          campsite={
            this.props.campsites.campsites.filter(
              (campsite) => campsite.id === +match.params.campsiteId
            )[0]
          }
          isLoading={this.props.campsites.isLoading} // Idem que en Home anadimos llamamos array campsite.js
          errMess={this.props.campsites.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.campsiteId === +match.params.campsiteId
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page" //ATT! classNameS
            timeout={300}
          > 
            <Switch>
              <Route path="/home" component={HomePage} />

              <Route
                exact
                path="/directory"
                render={() => <Directory campsites={this.props.campsites} />}
              />
              {/* we use the attribute render and give it a function which contains the component jsx */}
              <Route path="/directory/:campsiteId" component={CampsiteWithId} />

              <Route
                exact
                path="/contactus"
                render={() => (
                  <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
                )}
              />
              {/* We use the attribute component and give it the component name. We are not passing any state date. */}

              {/* Task 1 */}
              <Route
                exact
                path="/aboutus"
                render={() => <About partners={this.props.partners} />}
              />

              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Main));
