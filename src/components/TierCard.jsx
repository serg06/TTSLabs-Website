import React, { Component } from 'react';

import checkmark from "../images/checkmark.svg"

class Tier extends Component {
    render ()
    {
        return(
            <div className={"tier-card " + (this.props.highlighted ? "highlighted" : "")}>
                <header className="tier-card-header" style={{"borderTop": "3px solid " + this.props.color}}>
                    <h1 className="tier-card-header-name" style={{"color": this.props.color}}>{ this.props.tier_name }</h1>
                    <p className="TierCardShortDescription">Short description</p>
                    <p className="TierCardPriceTag"><span style={{"font-size": "20px"}}>$</span>{ this.props.price }</p>
                    <hr className="tier-card-header-horizontal-line" style={{"borderTop": "2px solid" + this.props.color}} />
                </header>
                <div className="tier-card-body" style={{"borderBottom": "3px solid " + this.props.color}}>
                    <div className="TierCardPreviousTierInfo">Includes</div>
                    <ul className="TierCardItemContainer">
                        { this.props.descriptions.map((text, id) => <li key={ id } className="TierCardListItem">{ text }</li>) }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Tier;