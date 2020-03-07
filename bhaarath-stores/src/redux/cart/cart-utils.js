// utility functions allows us to keep our files clean and organize functions that we may need in multiple files in one location
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?  {...cartItem, quantity:cartItem.quantity + 1} : 
            cartItem
        )
    }
    // this triggers when new item is added for the first time
    return [...cartItems, {...cartItemToAdd, quantity:1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove)  => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id );
    } else {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
    }
}
// export default addItemToCart;
// {...cartItem, quantity:cartItem.quantity + 1}