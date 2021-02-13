import React, { Component } from 'react';

class InferenceTier extends Component {
    render ()
    {
        return(
            <div className="InferenceTierCard">
                <header className="InferenceTierCardHeader">
                    <h1>{ this.props.tier_name }</h1>
                </header>
                <div className="InferenceTierCardBody">
                    { this.props.inferences.map((inference, id) => <div className="InferenceTierCardText" key={ id }>{inference.name}<div className="InferenceTierCardPlayer"> <audio controls><source src={ inference.audio_url }></source></audio></div></div> )}
                </div>
            </div>
        )
    }
}

export default InferenceTier;