import React from 'react';
import { Link } from 'react-router-dom';
// import Image from '../../images/unnamed.jpg';
import './header.styles.scss';

const Header = () => (
    <div className = 'header'>
        <Link className = 'logo-container' to = '/' > 
            Bhaarath Stores
        </Link>
        <div  className = 'options'>
            <Link className = 'option' to = '/shop'>SHOP</Link>
            <Link className = 'option' to = '/shop'>CONTACT</Link>

        </div>
    </div>
)

export default Header;