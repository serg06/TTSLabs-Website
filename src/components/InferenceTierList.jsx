import React, { Component } from 'react';

import InferenceTierCard from "./InferenceTierCard"

class InferenceTierList extends Component
{
    render()
    {
        return (
            <div className="InferenceTierListContainer">
                { this.props.data.map(tier => <InferenceTierCard 
                                                key={ tier.id }
                                                tier_name={ tier.tier_name }
                                                inferences={ tier.inferences }
                                                />) }
            </div>
        )
    }
}

export default InferenceTierList;