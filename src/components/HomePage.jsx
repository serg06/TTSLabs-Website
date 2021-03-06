
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import InferenceTierList from "./InferenceTierList";
import PictureCarousel from "./PictureCarousel";

import inference_data from "../data/inference_tiers.json";

import transition from "../images/transition.png";
import transition_flipped from "../images/transition-flipped.png";

import desktop_app_1 from "../images/desktop-app-1.png";
import desktop_app_2 from "../images/desktop-app-2.png";

import logo from "../images/logo.png";
import tiers from "../images/tiers.png";

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
        <section className="homepage-logo-section">
          <img className="homepage-logo" src={ logo } alt=""/>
        </section>
        <section className="homepage-inferences-section">
          <header className="homepage-inferences-header">Our work</header>
          <InferenceTierList data={ inference_data }/>
        </section>
        <img src={ transition } alt="" className="transition"/>
        <section className="homepage-app-section">
          <PictureCarousel
            className="homepage-app-carousel"
            pictures={ this.state.dekstop_app_pictures }
          />
          <div className="homepage-description">
            <header className="homepage-description-header">Our desktop app</header>
            <ul className="homepage-description-list">
              <li className="homepage-description-list-item">Simple easy to use program</li>
              <li className="homepage-description-list-item">Supports donations, cheers and subscriptions</li>
              <li className="homepage-description-list-item">Easy integration with streamlabs and streamelements</li>
            </ul>
          </div>
        </section>
        <img src={ transition_flipped } alt="" className="transition"/>
        <section className="homepage-pricing-section">
            <div className="homepage-pricing-description">
              <header className="homepage-description-header">Our plans</header>
              <ul className="homepage-description-list">
                <li className="homepage-description-list-item">Info1</li>
                <li className="homepage-description-list-item">Info2</li>
                <li className="homepage-description-list-item">Info3</li>
              </ul>
            </div>
            <Link to="/pricing">
              <img className="homepage-pricing-tiers" src={ tiers } alt=""/>
            </Link>
        </section>
        <img src={ transition } alt="" className="transition"/> 
      </div>
    );
  }
}

export default HomePage;