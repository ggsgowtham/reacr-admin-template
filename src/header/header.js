import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';
import logo from '../images/logo.png';
export const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <img src={logo} alt="Logo" style={{ height: 50 }}/>
                <Link to="/" className="nav_bar_css" style = {{ textDecoration: 'none', marginLeft: '85%', color: 'white', fontSize: 16 }}>Home</Link>&nbsp;&nbsp;
            </nav>
        </div>

    )
}

export default Header;