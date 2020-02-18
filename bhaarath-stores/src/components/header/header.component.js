import React from 'react';
import { Link } from 'react-router-dom';
// import Image from '../../images/unnamed.jpg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <div className = 'header'>
        <Link className = 'logo-container' to = '/' > 
            Bhaarath Stores
        </Link>
        <div  className = 'options'>
            <Link className = 'option' to = '/shop'>SHOP</Link>
            <Link className = 'option' to = '/shop'>CONTACT</Link>
            {
                // TERNARY OPERATOR
                currentUser ? (
                    <div className = 'option' onClick = {() => auth.signOut()}>{currentUser.displayName}</div> 
                )
                :
                (<Link className = 'option' to = '/signin'>SIGN IN</Link> )
            }
        </div>
    </div>
)

export default Header;