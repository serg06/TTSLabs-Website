import React, { Component } from 'react';

import TierCard from "./TierCard"

class TierList extends Component
{
    render()
    {
        return (
            <div className="TierListContainer">
                { this.props.data.map(tier => <TierCard 
                                                key={ tier.id }
                                                tier_name={ tier.tier_name }
                                                descriptions={ tier.descriptions }
                                                price={ tier.price }
                                                color={ tier.color }
                                                id={ tier.id }
                                                />) }
            </div>
        )
    }
}

export default TierList;