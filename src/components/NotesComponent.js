import React from 'react';
import './NotesComponentStyle.css'
import notesImage from '../visual-material/NotesBackround.jpg';
import Logo from "../visual-material/logo-white.png";


const NotesComponent = () => {

     return (
        <div className="notes-container">

            <img src={notesImage} id="notes-image" alt="notes-background"/>

            <div className="notes-content">
                <div className="notes-title">
                    <div className="notes-logo">
                        <img src={Logo} className="life-img" alt=""/>
                    </div>

                    <div className="notes-msg">
                        <h1>All your notes now organized in one place.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotesComponent;