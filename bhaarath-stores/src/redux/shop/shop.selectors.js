import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

const selectShopData = createSelector(
    [selectShop],
    shop => shop.collections
)
export default selectShopData;

// labour cess newHome
// UTR - karbn20076097996