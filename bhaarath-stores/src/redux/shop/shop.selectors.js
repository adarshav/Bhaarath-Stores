import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

const selectShopData = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopData],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectShopData],
        collections => collections[collectionUrlParam]
    )


// export default selectShopData;

// labour cess newHome
// UTR - karbn20076097996