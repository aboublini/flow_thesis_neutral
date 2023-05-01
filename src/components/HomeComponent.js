import React from 'react';
import './HomeComponentStyle.css'
import homeVideo from '../visual-material/HomeBackround.mp4';
import Logo from "../visual-material/logo.png";
import lifeImage from "../visual-material/LifeBackround.jpg";
import homeImage from "../visual-material/HomeBackround.jpg";

const HomeComponent = () => {
    return (
        <div className="container">
            {/*<video autoPlay loop muted id="video">*/}
            {/*    <source src={homeVideo} type="video/mp4"/>*/}
            {/*</video>*/}

            <img src={homeImage} id="home-image" alt="life-background"/>
            <div className="img-front"></div>
            <div className="content">
                <div className="welcome">
                    <img src={Logo} className="home-img" alt=""/>
                    <p>Your productivity app.</p>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;