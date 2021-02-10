import React, { Component } from 'react';

class Tier extends Component {
    render ()
    {
        return(
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        )
    }
}

export default Tier;