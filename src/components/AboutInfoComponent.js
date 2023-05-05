import React from 'react';
import './AboutInfoComponentStyle.css'
import {Link} from "react-router-dom";
import unipi from '../visual-material/unipi-logo.png';
import tools from '../visual-material/tools-image.png';
import Logo from "../visual-material/logo.png";

const AboutInfoComponent = () => {
    return (
        <div className="about">
            <div className="left-about">
                <div className="about-logo">
                    <img src={Logo} className="question-logo" alt=""/>
                </div>

                <h1>What is flow?</h1>
                <p>I am currently studying Computer Science at the department of
                    Informatics of University of Piraeus.
                    I have taken classes relative to Web Development, AI,
                    Design Patterns, UI/UX, Data Structures, Algorithms, Cryptography etc.
                    My academic interests include web and desktop frontend technologies,
                    cryptographic algorithms, cloud design patterns and Information Systems.
                </p>
            </div>

            <div className="right-about">
                <div className="about-logo">
                    <img src={Logo} className="question-logo" alt=""/>
                </div>
                <h1>Bachelor Thesis</h1>
                <p>I am currently studying Computer Science at the department of
                    Informatics of University of Piraeus.
                    I have taken classes relative to Web Development, AI,
                    Design Patterns, UI/UX, Data Structures, Algorithms, Cryptography etc.
                    My academic interests include web and desktop frontend technologies,
                    cryptographic algorithms, cloud design patterns and Information Systems.
                </p>
            </div>
        </div>
    );
};

export default AboutInfoComponent;