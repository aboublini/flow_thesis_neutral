import './LoginComponentStyle.css';
import './VideoStyle.css'
import colourVideo from "../visual-material/LoginBackround.mp4";
import Logo from '../visual-material/logo.png';
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react';
import Swal from "sweetalert2";
import loginImage from "../visual-material/LoginBackround.jpg";
// import React from "@types/react";

const LoginComponent = () => {

    // User can't press browser's back button for security reasons
    useEffect(() => {
        window.history.pushState(null, null, window.location.pathname);
        window.addEventListener("popstate", onPopState);
        return () => {
            window.removeEventListener("popstate", onPopState);
        };
    }, []);

    function onPopState(event) {
        event.preventDefault();
        window.history.pushState(null, null, window.location.pathname);
    }

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Handle login with credentials
    const handleLogin = e => {
        e.preventDefault();
        if (username === "aboublini" && password === "123") {
            setUsername('');
            setPassword('');
            navigate("/home");
        } else {
            Swal.fire(
                {customClass:{
                        popup: 'reset-container-ok',
                        title: 'reset-title-ok',
                        confirmButton: 'reset-ok'
                    },
                    title: "The credentials you provided are invalid."
                });
            setUsername('');
            setPassword('');
        }
    }

    // Reset password function (doesn't actually reset password, but it seems that it does)
    const ResetPassword = () => {
        // Message for reset password
        Swal.fire({
            customClass: {
                popup: 'reset-container',
                title: 'reset-title',
                input: 'reset-input',
                confirmButton: 'reset-confirm',
                cancelButton: 'reset-cancel',
            },
            title: 'Please enter your registered mail:',
            input: 'text',
            inputPlaceholder: 'yourmail@example.gr',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Reset',
            showLoaderOnConfirm: true}
        ).then((result) => {
            // If user actually writes something in input
            if (result.value !== "" && result.value != null && result.value !== "yourmail@example.gr") {
                Swal.fire(
                    {customClass:{
                            popup: 'reset-container-ok',
                            title: 'reset-title-ok',
                            confirmButton: 'reset-ok'
                        },
                        title: "An email has been sent to " + result.value + " with instructions on how to recover your password."
                    });
            } else if (result.isDismissed){ // If user presses cancel
                // Do nothing
            } else { // In any other case
                Swal.fire(
                    {customClass:{
                            popup: 'reset-container-ok',
                            title: 'reset-title-ok',
                            confirmButton: 'reset-ok'
                        },
                        title: "Please insert a valid email address or press Cancel."
                    });
            }
        });
    }

    return (
        <div className="hero">
            <div className="left-image">
                <img src={loginImage} id="login-image" alt="life-background"/>
                <div className="blur">
                    <h1>Make your everyday life easier with flow.</h1>
                    <p>Login and start organizing.</p>
                </div>
            </div>

            <div className="content">
                <form onSubmit={handleLogin} className="login-form">
                    <img src={Logo} className="login-logo"/>
                    <h1 className="hi">Hi again!</h1>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} required/>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                    <button className="btn">Login</button>
                    <p className="forgot">Forgot your password? <br/><u onClick={ResetPassword}>Reset password</u></p>
                </form>
            </div>
        </div>
    );
}

export default LoginComponent;
