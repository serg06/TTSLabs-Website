import React, { Component } from 'react';

class InferenceTier extends Component {
    render ()
    {
        return(
            <div className="InferenceTierCard">
                <header className="InferenceTierCardHeader">
                    <h1 className="InferenceTierCardTierName">{ this.props.tier_name }</h1>
                </header>
                <div className="InferenceTierCardBody">
                    { this.props.inferences.map((inference, id) => <div><div className="InferenceTierCardInferenceName" key={ id }>{ inference.name }</div> <div className="InferenceTierCardInferenceText"> "{ inference.text }" </div> <div className="InferenceTierCardPlayer"><audio controls><source src={ inference.audio_url }></source></audio></div></div> )}
                </div>
            </div>
        )
    }
}

export default InferenceTier;