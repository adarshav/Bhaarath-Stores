import React from 'react';
import { connect } from 'react-redux';

import addItem from '../../redux/cart/cart-actions';
import CustomButton from './../custom-button/custom-button.component';
import './collectionItem.styles.scss';

const CollectionItem = ({item, newAddItem}) => {
    const {id, name, price, imageUrl } = item;
    return (
    <div  key = {id} className = 'collection-item'>
        <div
        className = 'image'
        style = {{
            backgroundImage: `url(${imageUrl})`
        }} />

        <div className = 'collection-footer'>
            <span className = 'name'>{name}</span>
            <span className = 'price'>{price}</span>
        </div>
        <CustomButton onClick = {() => newAddItem(item)}inverted>Add to Cart</CustomButton>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    newAddItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);