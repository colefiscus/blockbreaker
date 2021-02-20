import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link className="header" to="/home">
                BLOCKBREAKER
            </Link>
        </header>
    )
}

export default Header;