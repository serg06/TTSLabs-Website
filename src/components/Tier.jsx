import React, { Component } from 'react';

class Tier extends Component {
    render ()
    {
        return(
            <div className="TierCard">
                <header className="TierCardHeader">
                    <h1>{ this.props.tier_name }</h1>
                    <p>{ this.props.price }$</p>
                </header>
                <div className="TierCardBody">
                    { this.props.descriptions.map((text, id) => <div key={ id } className="TierCardBodyLine">{ text }</div>) }
                </div>
            </div>
        )
    }
}

export default Tier;