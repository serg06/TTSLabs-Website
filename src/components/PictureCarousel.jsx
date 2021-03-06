import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

class PictureCarousel extends Component {
    render ()
    {
        const items = [];
        this.props.pictures.forEach(element => items.push(<img src={ element } width="500" height="600" className="unselectable"/>));
        return(
            <div className="image-carousel-container">
                <AliceCarousel 
                    mouseTracking="true" 
                    items={ items }
                    animationType="slide"
                    animationDuration="600"
                    infinite="true"
                    autoPlay="true"
                    autoPlayStrategy="default"
                    autoPlayInterval="5000"
                    disableButtonsControls="true"
                />
            </div>
        )
    }
}

export default PictureCarousel;