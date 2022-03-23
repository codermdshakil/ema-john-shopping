import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';


const Header = () => {
    return (
         <nav>
            <img src={logo} alt="" />
            <div className='nav-links'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/orderreviw">Order Review</a>
                <a href="/manageinventory"> Manege Inventory</a>
            </div>
          </nav>
    );
};

export default Header;