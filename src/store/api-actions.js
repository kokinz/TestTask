import {loadProducts} from './actions.js';
import {APIRoute} from '../const.js';


const fetchProductsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PRODUCTS)
    .then(({data}) => dispatch(loadProducts(data)))
);

export {fetchProductsList};
