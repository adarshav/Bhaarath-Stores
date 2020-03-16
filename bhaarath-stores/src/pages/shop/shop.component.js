import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview  from '../../components/collections-overview/collections-overview.components';
import CollectionPage from '../collection/collection.component';

// class component
const ShopPage = ({ match }) => {
    console.log(match);
    return (
        <div className = 'shopPage'>
            <Route exact path = {`${ match.path }`} component = { CollectionsOverview }/>
            <Route exact path = {`${ match.path }/:collectionId`} component = { CollectionPage } />
        </div>
    )
}


export default ShopPage;