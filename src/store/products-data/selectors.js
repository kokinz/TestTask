import {NameSpace} from "../root-reduser";

const getProducts = (state) => state[NameSpace.PRODUCTS_DATA].products;
const getCreatedProducts = (state) => state[NameSpace.PRODUCTS_DATA].createdProducts;
const getLoadedDataStatus = (state) => state[NameSpace.PRODUCTS_DATA].isDataLoaded;

export {getProducts, getCreatedProducts, getLoadedDataStatus};
