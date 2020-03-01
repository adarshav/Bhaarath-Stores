import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
//inverted has been done for adding the products to the cart
    <button className = {` ${inverted ? 'inverted' : ''} 
        ${isGoogleSignIn ? 'google-sign-in' : ''}  custom-button`} 
        {...otherProps}>
        {children}
    </button>
)

export default CustomButton;