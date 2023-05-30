import React from 'react';
import './HomeComponentStyle.css'
import homeVideo from '../visual-material/HomeBackround.mp4';
import Logo from "../visual-material/logo-white.png";

const HomeComponent = () => {
    return (
        <div className="container">
            <video autoPlay loop muted id="video">
                <source src={homeVideo} type="video/mp4"/>
            </video>

            <div className="content">
                <div className="welcome">
                    <div className="welcome-logo">
                        <img src={Logo} className="home-img" alt=""/>
                    </div>

                    <div className="welcome-msg">
                        <h1>Focus on being productive instead of busy with Flow.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;