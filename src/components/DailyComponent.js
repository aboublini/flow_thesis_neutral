import React from 'react';
import './DailyComponentStyle.css'
import dailyImage from '../visual-material/DailyBackround.jpg';
import Logo from "../visual-material/logo-white.png";

const DailyComponent = () => {
    
    return (
        <div className="daily-container">
            <img src={dailyImage} id="daily-image" alt="daily-background"/>

            <div className="daily-content">
                <div className="daily-title">
                    <div className="daily-logo">
                        <img src={Logo} className="daily-img" alt=""/>
                    </div>

                    <div className="daily-msg">
                        <h1>Make the most of everyday with Flow.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyComponent;