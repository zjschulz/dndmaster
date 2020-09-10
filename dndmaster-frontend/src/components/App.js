import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';

function App() {
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
