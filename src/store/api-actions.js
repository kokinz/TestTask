import {loadProducts, addCreatedProduct, updateCreatedProduct, redirectToRoute} from './actions.js';
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

const updateProduct = (form, fakeForm) => (dispatch, _getState, api) => (
  api.put(`${APIRoute.PRODUCTS}/7`, fakeForm)
    .then(() => dispatch(updateCreatedProduct({id: form.index, ...form})))
    .then(() => dispatch(redirectToRoute(AppRoute.PRODUCTS)))
);

export {fetchProductsList, postProduct, updateProduct};
