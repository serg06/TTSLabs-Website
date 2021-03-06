import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

import homepage_button from "../images/home-button-image.png"

class NavigationBar extends Component
{
    render()
    {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Link to={"/home"}>
                            <img src={ homepage_button } alt="" width="175" height="40"/>
                        </Link>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to={"/home"}>
                                <a className="nav-link">Home</a>
                            </Link>
                            <Link to={"/pricing"} className="link">
                                <a className="nav-link">Pricing</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(NavigationBar);