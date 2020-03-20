import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_6Sx3JMmbFXdeYu9GnPkQLfVP006Q23SDnc';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful ');
    }
    return (
        // github.com/azmenak/react-stripe-checkout
        <StripeCheckout 
            label = 'Pay Now'
            name = 'Bhaarath Stores Ltd.'
            billingAddress
            shippingAddress
            description = {`Your Total Price is Rs ${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = { publishablekey }

        />
    )
}

export default StripeCheckoutButton;