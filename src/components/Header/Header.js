import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='mean-header'>
            <nav className='header'>
            <img src={logo} alt="logo" />
            <div className='header-item'>
            <a href="/shop">shop</a>
            <a href="/order">order</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">Login</a>
            </div>
            </nav>
        </div>
    );
};

export default Header;