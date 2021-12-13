import {ActionType} from '../actions.js';

const initialState = {
  products: [],
  createdProducts: localStorage.getItem('createdProducts') ? JSON.parse(localStorage.getItem('createdProducts')) : [],
  isDataLoaded: false,
};

const updateProduct = (product, array) => {
  return [...array.slice(0, product.index), product, ...array.slice(product.index + 1)];
};

const productsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isDataLoaded: true,
      };
    case ActionType.ADD_CREATED_PRODUCT:
      localStorage.setItem('createdProducts', JSON.stringify([...state.createdProducts, action.payload]));

      return {
        ...state,
        createdProducts: [...state.createdProducts, action.payload],
      };
    case ActionType.UPDATE_CREATED_PRODUCT:
      localStorage.setItem('createdProducts', JSON.stringify(updateProduct(action.payload, state.createdProducts)));

      return {
        ...state,
        createdProducts: updateProduct(action.payload, state.createdProducts),
      };
    default:
      return state;
  }
};

export {productsData};
