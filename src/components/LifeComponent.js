import React from 'react';
import './LifeComponentStyle.css'
import lifeImage from '../visual-material/LifeBackround.jpg';
import Logo from "../visual-material/logo-white.png";

const LifeComponent = () => {
    return (
        <div className="life-container">

            <img src={lifeImage} id="life-image" alt="life-background"/>

            <div className="life-content">
                <div className="life-title">
                    <div className="life-logo">
                        <img src={Logo} className="life-img" alt=""/>
                    </div>

                    <div className="life-msg">
                        <h1>Organize your needs easy. Live easier.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifeComponent;