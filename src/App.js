import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import PricingPage from "./components/PricingPage";

class App extends Component 
{
  render()
  {
    return (
      <div className="App">
        <BrowserRouter>
          <NavigationBar/>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home"/>
            </Route>
            <Route path="/home" component={HomePage}/>
            <Route path="/pricing" component={PricingPage}/>
          </Switch>
        </BrowserRouter>  
      </div>
    );
  }
}

export default App;
