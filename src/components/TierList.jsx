import React, { Component } from 'react';

import Tier from "./Tier"

class TierList extends Component 
{
    state = {
        value: "50"
    }
    render()
    {
        return (
            <div>
                <Tier value={ this.state.value }></Tier>
            </div>
        )
    }
}

export default TierList;