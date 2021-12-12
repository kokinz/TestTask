import {ActionType} from '../actions.js';

const initialState = {
  products: [],
  createdProducts: localStorage.getItem('createdProducts') ? JSON.parse(localStorage.getItem('createdProducts')) : [],
  isDataLoaded: false,
};

const productsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isDataLoaded: true,
      };
    default:
      return state;
  }
};

export {productsData};
