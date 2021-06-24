import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login= () => {
    return (
        <div className="loginGreeting">
            <h1>WELCOME TO<br></br>BLOCKBREAKER</h1>
            <Link to="/home">
                <button className="enterButton">ENTER</button>
            </Link>
        </div>
    )
}

export default Login;