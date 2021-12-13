import {loadProducts, addCreatedProduct, redirectToRoute} from './actions.js';
import {APIRoute, AppRoute} from '../const.js';


const fetchProductsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PRODUCTS)
    .then(({data}) => dispatch(loadProducts(data)))
);

const postProduct = (form, fakeForm) => (dispatch, _getState, api) => (
  api.post(APIRoute.PRODUCTS, fakeForm)
    .then(({data}) => dispatch(addCreatedProduct({id: data.id, ...form})))
    .then(() => dispatch(redirectToRoute(AppRoute.PRODUCTS)))
);

export {fetchProductsList, postProduct};
