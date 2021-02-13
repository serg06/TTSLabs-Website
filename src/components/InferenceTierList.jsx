import React, { Component } from 'react';

import InferenceTierCard from "./InferenceTierCard"

class InferenceTierList extends Component
{
    state = {
        tiers: [
            {"id": 0, "tier_name": "Tier 1", "inferences": [
                                                            {"name": "Cyr", "audio_url": "https://www.dropbox.com/s/wtvq23d9dhtjmqa/cyr_inference.wav?dl=1"},
                                                            {"name": "Hasan", "audio_url": "https://www.dropbox.com/s/pqo7pjd6dbj16a9/hasan_inference.wav?dl=1"}]},

            {"id": 1, "tier_name": "Tier 2", "inferences": [{"name": "Cyr", "audio_url": "https://www.dropbox.com/s/wtvq23d9dhtjmqa/cyr_inference.wav?dl=1"},
                                                            {"name": "Hasan", "audio_url": "https://www.dropbox.com/s/pqo7pjd6dbj16a9/hasan_inference.wav?dl=1"}]},,

            {"id": 2, "tier_name": "Tier 3", "inferences": [{"name": "Cyr", "audio_url": "https://www.dropbox.com/s/wtvq23d9dhtjmqa/cyr_inference.wav?dl=1"},
                                                            {"name": "Hasan", "audio_url": "https://www.dropbox.com/s/pqo7pjd6dbj16a9/hasan_inference.wav?dl=1"}]},,
        ]
    }

    render()
    {
        return (
            <div className="InferenceTierListContainer">
                { this.state.tiers.map(tier => <InferenceTierCard 
                                                key={ tier.id }
                                                tier_name={ tier.tier_name }
                                                inferences={ tier.inferences }
                                                />) }
            </div>
        )
    }
}

export default InferenceTierList;