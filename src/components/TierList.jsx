import React, { Component } from 'react';

import TierCard from "./TierCard"

class TierList extends Component
{
    state = {
        tiers: [
            {"id": 0, "tier_name": "basic", "price": 500, "descriptions": ["You record yourself reading our script and we train your voice based on that. You also get the GUI and any publicly shared voices."]},
            {"id": 1, "tier_name": "normal", "price": 1000, "descriptions": [
                                                                     "We manually gather training data from up to 100 hours of past VODs, for training the model."]},
            {"id": 2, "tier_name": "advanced", "price": 2000, "descriptions": [
                                                                     "We manually gather training data from up to 100 hours of past VODs, for training the model.",
                                                                     "We try to make the model as good as possible, gathering more data from past and future VODs, plus fine tuning parts of the model."]}
        ]
    }

    render()
    {
        return (
            <div className="TierListContainer">
                { this.state.tiers.map(tier => <TierCard 
                                                key={ tier.id }
                                                tier_name={ tier.tier_name }
                                                descriptions={ tier.descriptions }
                                                price={ tier.price }
                                                />) }
            </div>
        )
    }
}

export default TierList;