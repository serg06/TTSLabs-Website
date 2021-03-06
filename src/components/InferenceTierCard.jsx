import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

class InferenceTier extends Component {
    render ()
    {
        return(
            <div className="tier-card InferenceTierCard">
                <header className="tier-card-header" style={{"borderTop": "3px solid " + this.props.color}}>
                    <h1 className="tier-card-header-name" style={{"color": this.props.color}}>{ this.props.tier_name }</h1>
                    <hr className="tier-card-header-horizontal-line" style={{"borderTop": "2px solid" + this.props.color}} />
                </header>
                <div className="tier-card-body" style={{"borderBottom": "3px solid " + this.props.color}}>
                    <AliceCarousel mouseTracking>
                        { this.props.inferences.map((inference, id) => 
                            <div key={ id }>
                                <div className="InferenceTierCardInferenceName unselectable" key={ id }>{ inference.name }</div> 
                                <div className="InferenceTierCardInferenceText unselectable"> "{ inference.text }" </div> 
                                <div className="InferenceTierCardPlayer">
                                    <audio controls>
                                        <source src={ inference.audio_url } />
                                    </audio>
                                </div>
                            </div> 
                        ) }
                    </AliceCarousel>
                </div>
            </div>
        )
    }
}

export default InferenceTier;