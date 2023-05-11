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
                <p>
                    Flow is an online application developed in React JS as part
                    of my bachelor thesis titled "Gendered UI/UX: A Comparative
                    Study of Gender-Specific and Gender-Neutral Web Design".
                    As a productivity tool, flow is designed to help users
                    streamline their daily routines and accomplish more in
                    less time. The application includes features such as task
                    and budget management, calendar integration, and note-taking,
                    all of which are accessible through a user-friendly interface.
                    For its implementation, I employed technologies such as React
                    Hooks and FP Paradigm (Functional Programming), and utilized
                    libraries like Material UI and SweetAlert2.
                </p>
            </div>

            <div className="right-about">
                <div className="about-logo">
                    <img src={Logo} className="question-logo" alt=""/>
                </div>
                <h1>Bachelor Thesis</h1>
                <p>
                    My bachelor thesis, entitled as "Gendered UI/UX: A Comparative
                    Study of Gender-Specific and Gender-Neutral Web Design" is a
                    research project that explores the impact of gender on UI/UX
                    design. In particular, the study aims to compare gender-specific
                    and gender-neutral web design and determine whether there are
                    significant differences in how users interact with these
                    different types of design. By conducting this comparative
                    analysis, the research seeks to gain insights into how gender
                    affects the user experience of web design and identify
                    strategies for creating more inclusive and effective UI/UX design.
                </p>
            </div>
        </div>
    );
};

export default AboutInfoComponent;