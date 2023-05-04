import React from 'react';
import './HelpComponentStyle.css'
import helpVideo from '../visual-material/HelpBackround.mp4';
import manual from '../visual-material/UserManual.pdf';
import Logo from "../visual-material/logo-white.png";


const HelpComponent = () => {

    return (
        <div className="help-container">
            <video autoPlay loop muted id="help-video">
                <source src={helpVideo} type="video/mp4"/>
            </video>
            <div className="help-content">

                <div className="help-title">
                    <div className="life-logo">
                        <img src={Logo} className="help-img" alt=""/>
                    </div>

                    <div className="help-msg">
                        <h1>Having trouble with flow?</h1>

                        <p>Don't worry. We've got you covered.</p>

                        <a href={manual} target="_blank"
                           rel="noreferrer">
                            <button className="btn-help">Download User Manual</button>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HelpComponent;