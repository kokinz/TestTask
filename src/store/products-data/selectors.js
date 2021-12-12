import {NameSpace} from '../root-reducer';

const getProducts = (state) => state[NameSpace.PRODUCTS_DATA].products;
const getCreatedProducts = (state) => state[NameSpace.PRODUCTS_DATA].createdProducts;

export {getProducts, getCreatedProducts};
