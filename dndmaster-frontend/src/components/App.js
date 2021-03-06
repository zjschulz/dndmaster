import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Registration from './Registration';
import Login from './Login';
import CampaignForm from './CampaignForm';
import CampaignList from './CampaignList';
import CharacterForm from './CharacterForm';
import { connect } from 'react-redux';
import { checkLoginStatus } from '../actions/actions';

class App extends React.Component {

  componentDidMount() {
    this.props.checkLoginStatus()
  }
  
  render () {
    return (
      <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route
            exact
            path={"/"}
            render={props => (<Home {...props}/>)} 
          />
          <Route
            exact
            path={"/login"}
            render={props => (<Login {...props}/>)} 
          />
          <Route
            exact
            path={"/signup"}
            render={props => (<Registration {...props}/>)} 
          />
          <Route
            exact
            path={"/newcampaign"}
            render={props => (<CampaignForm {...props}/>)} 
          />
          <Route
            exact
            path={"/campaignlist"}
            render={props => (<CampaignList {...props}/>)} 
          />
          <Route
            exact
            path={"/newcharacter"}
            render={props => (<CharacterForm {...props}/>)} 
          />
        </Switch>
      </BrowserRouter>
    </div>
    )
  }

}

const mapStateToProps = state => {
  return {loggedInStatus: state.loggedInStatus, user: state.user}
}

export default connect(mapStateToProps, { checkLoginStatus })(App)
