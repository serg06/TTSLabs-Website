import React, { Component } from 'react';

import checkmark from "../images/checkmark.svg"

class Tier extends Component {
    render ()
    {
        return(
            <div className="TierCard">
                <header className="TierCardHeader" style={{"border-top": "3px solid " + this.props.color}}>
                    <h1 className="TierCardTierName">{ this.props.tier_name }</h1>
                    <p className="TierCardShortDescription">Short description</p>
                    <p className="TierCardPriceTag" style={{color: this.props.color}}>${ this.props.price }</p>
                    <hr className="TierCardHorizontalLine" style={{"border-top": "2px solid" + this.props.color}} />
                </header>
                <div className="TierCardBody" style={{"border-bottom": "3px solid " + this.props.color}}>
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