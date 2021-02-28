import React, { Component } from 'react';

import checkmark from "../images/checkmark.svg"

class Tier extends Component {
    render ()
    {
        return(
            <div className={"tier-card " + (this.props.highlighted ? "highlighted" : "")}>
                <header className="tier-card-header" style={{"border-top": "3px solid " + this.props.color}}>
                    <h1 className="tier-card-header-name" style={{"color": this.props.color}}>{ this.props.tier_name }</h1>
                    <p className="TierCardShortDescription">Short description</p>
                    <p className="TierCardPriceTag">${ this.props.price }</p>
                    <hr className="tier-card-header-horizontal-line" style={{"border-top": "2px solid" + this.props.color}} />
                </header>
                <div className="tier-card-body" style={{"border-bottom": "3px solid " + this.props.color}}>
                    { this.props.id > 0 ? <div className="TierCardPreviousTierInfo">All features of previous tier +</div> : <div className="TierCardPreviousTierInfo">Includes</div>}
                    <ul className="TierCardItemContainer">
                        { this.props.descriptions.map((text, id) => <li key={ id } className="TierCardListItem">{ text }</li>) }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Tier;