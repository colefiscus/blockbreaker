import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="loginGreeting">
                <h1>WELCOME TO<br></br>BLOCKBREAKER</h1>
                <Link to="/home">
                    <button className="enterButton">ENTER</button>
                </Link>
            </div>
        )
    }
}

export default Login;