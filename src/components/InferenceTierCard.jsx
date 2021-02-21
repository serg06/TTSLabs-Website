import React, { Component } from 'react';

class InferenceTier extends Component {
    render ()
    {
        return(
            <div className="InferenceTierCard">
                <header className="InferenceTierCardHeader" style={{"border-top": "3px solid " + this.props.color}}>
                    <h1 className="InferenceTierCardTierName">{ this.props.tier_name }</h1>
                    <hr className="InferenceTierCardHorizontalLine" style={{"border-top": "2px solid" + this.props.color}} />
                </header>
                <div className="InferenceTierCardBody" style={{"border-bottom": "3px solid " + this.props.color}}>
                    { this.props.inferences.map((inference, id) => <div><div className="InferenceTierCardInferenceName" key={ id }>{ inference.name }</div> <div className="InferenceTierCardInferenceText"> "{ inference.text }" </div> <div className="InferenceTierCardPlayer"><audio controls><source src={ inference.audio_url }></source></audio></div></div> )}
                </div>
            </div>
        )
    }
}

export default InferenceTier;