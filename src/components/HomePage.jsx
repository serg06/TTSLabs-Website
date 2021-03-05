
import React, { Component } from 'react';
import InferenceTierList from "./InferenceTierList";
import PictureCarousel from "./PictureCarousel";

import inference_data from "../data/inference_tiers.json";

import transition from "../images/transition.png";
import transition_flipped from "../images/transition-flipped.png";

import desktop_app_1 from "../images/desktop-app-1.png";
import desktop_app_2 from "../images/desktop-app-2.png";

import logo from "../images/logo.png"

class HomePage extends Component 
{
  state = { 
    dekstop_app_pictures: [
      desktop_app_1,
      desktop_app_2 ]
  }
  render()
  {
    return(
      <div>
        <img className="home-page-logo" src={ logo } alt="" width="700" height="120"/>
        <section className="home-page-inferences-section">
          <InferenceTierList data={ inference_data }/>
        </section>
        <img src={ transition } alt="" className="transition"/>
        <section className="home-page-app-section">
          <PictureCarousel
            className="home-page-app-carousel"
            pictures={ this.state.dekstop_app_pictures }
          />
          <div className="home-page-app-description">
            <header className="home-page-app-description-header">Our desktop App</header>
            <ul className="home-page-app-description-list">
              <li className="home-page-app-description-list-item">Simple easy to use program</li>
              <li className="home-page-app-description-list-item">Supports donations, cheers and subscriptions</li>
              <li className="home-page-app-description-list-item">Easy integration with streamlabs and streamelements</li>
            </ul>
          </div>
        </section>
        <img src={ transition_flipped } alt="" className="transition"/>
      </div>
    );
  }
}

export default HomePage;