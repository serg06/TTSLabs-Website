import React, { Component } from 'react';

class Tier extends Component {
    render ()
    {
        return(
            <div>{ this.props.value }</div>
        )
    }
}

export default Tier;