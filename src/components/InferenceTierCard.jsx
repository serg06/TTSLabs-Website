import React, { Component } from 'react';

class InferenceTier extends Component {
    render ()
    {
        return(
            <div className="tier-card">
                <header className="tier-card-header" style={{"border-top": "3px solid " + this.props.color}}>
                    <h1 className="tier-card-header-name" style={{"color": this.props.color}}>{ this.props.tier_name }</h1>
                    <hr className="tier-card-header-horizontal-line" style={{"border-top": "2px solid" + this.props.color}} />
                </header>
                <div className="tier-card-body" style={{"border-bottom": "3px solid " + this.props.color}}>
                    { this.props.inferences.map((inference, id) => 
                        <div>
                            <div className="InferenceTierCardInferenceName" key={ id }>{ inference.name }</div> 
                            <div className="InferenceTierCardInferenceText"> "{ inference.text }" </div> 
                            <div className="InferenceTierCardPlayer">
                                <audio controls>
                                    <source src={ inference.audio_url } />
                                </audio>
                            </div>
                            <hr className="tier-card-header-horizontal-line" style={{"border-top": "1px solid" + this.props.color}} />
                        </div> 
                    )}
                </div>
            </div>
        )
    }
}

export default InferenceTier;