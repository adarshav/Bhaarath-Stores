import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import Image from '../../images/unnamed.jpg';

import { selectCurrentUser } from '../../redux/user/user-selector';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import  CartIcon  from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
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
            <CartIcon />
            {
                hidden ? null : <CartDropdown />
            }
        </div>
            
    </div>
)
//it is a function where it takes rootReducer as a state (argument for a function) then assign it to the currentUser
//here state is rootReducer
// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// })

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser, 
    hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header);

// now we have set up the configuration of redux, userReduceer and userAction has been created and that's mainly used in header component where we use currentUser passed as prop from App.js and that should be configured now for that we are using connect a higher order component from react-redux
// What does connect Do? 
// connect is a higher order component where it allows the component to have the access to the things related to redux, connect takes two arguments one is component other is a mapStateToProps 