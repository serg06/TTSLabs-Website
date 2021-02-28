import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

class InferenceTier extends Component {
    render ()
    {
        return(
            <div className="tier-card InferenceTierCard">
                <header className="tier-card-header" style={{"border-top": "3px solid " + this.props.color}}>
                    <h1 className="tier-card-header-name" style={{"color": this.props.color}}>{ this.props.tier_name }</h1>
                    <hr className="tier-card-header-horizontal-line" style={{"border-top": "2px solid" + this.props.color}} />
                </header>
                <div className="tier-card-body" style={{"border-bottom": "3px solid " + this.props.color}}>
                    <AliceCarousel mouseTracking>
                        { this.props.inferences.map((inference, id) => 
                            <div>
                                <div className="InferenceTierCardInferenceName not-selectable" key={ id }>{ inference.name }</div> 
                                <div className="InferenceTierCardInferenceText not-selectable"> "{ inference.text }" </div> 
                                <div className="InferenceTierCardPlayer not-selectable">
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