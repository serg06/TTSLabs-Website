import React, { Component } from 'react';

import TierList from "./TierList";
import tier_data from "../data/tiers.json";

class PricingPage extends Component 
{
  render()
  {
    return (
      <section className="tier-list TierList">
        <header className="tier-list-header">
          Our Plans
          <h1 className="tier-list-header-text">
            Cock and ball torture (CBT) is a sexual activity involving application of pain or constriction to the male genitals. This may involve directly painful activities, such as wax play, genital spanking, squeezing, ball-busting, genital flogging, urethral play, tickle torture, erotic electrostimulation or even kicking.[1] The recipient of such activities may receive direct physical pleasure via masochism, or emotional pleasure through erotic humiliation, or knowledge that the play is pleasing to a sadistic dominant. Many of these practices carry significant health risks.
          </h1>
        </header>
        <TierList data={ tier_data }/>
      </section>
    );
  }
}

export default PricingPage;