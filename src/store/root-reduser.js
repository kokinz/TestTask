import {combineReducers} from 'redux';
import {productsData} from './products-data/products-data.js';

const NameSpace = {
  PRODUCTS_DATA: 'PRODUCTS_DATA',
};

const combine = combineReducers({
  [NameSpace.PRODUCTS_DATA]: productsData,
});

export {NameSpace, combine as default};
