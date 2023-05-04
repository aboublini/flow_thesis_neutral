import React from 'react';
import './AboutComponentStyle.css'
import aboutVideo from '../visual-material/AboutBackround.mp4';
import Logo from "../visual-material/logo-white.png";

const AboutComponent = () => {
    return (
        <div className="about-container">
            <video autoPlay loop muted id="about-video">
                <source src={aboutVideo} type="video/mp4"/>
            </video>
            <div className="about-content">
                <div className="about-title">
                    <div className="about-logo">
                        <img src={Logo} className="about-img" alt=""/>
                    </div>

                    <div className="about-msg">
                        <h1>Flow. The idea behind productivity.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutComponent;