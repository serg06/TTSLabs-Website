import React, { Component } from 'react';

import InferenceTierCard from "./InferenceTierCard"

class InferenceTierList extends Component
{
    render()
    {
        return (
            <div className="tier-list-container">
                { this.props.data.map(tier => <InferenceTierCard 
                                                key={ tier.id }
                                                tier_name={ tier.tier_name }
                                                inferences={ tier.inferences }
                                                color={ tier.color }
                                                />) }
            </div>
        )
    }
}

export default InferenceTierList;