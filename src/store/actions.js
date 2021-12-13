const ActionType = {
  LOAD_PRODUCTS: 'products/loadProducts',
  ADD_CREATED_PRODUCT: 'products/addProduct',
  UPDATE_CREATED_PRODUCT: 'products/updateProduct',
  REDIRECT_TO_ROUTE: 'common/redirectToRoute',
};

const loadProducts = (products) => ({
  type: ActionType.LOAD_PRODUCTS,
  payload: products,
});

const addCreatedProduct = (product) => ({
  type: ActionType.ADD_CREATED_PRODUCT,
  payload: product,
});

const updateCreatedProduct = (product) => ({
  type: ActionType.UPDATE_CREATED_PRODUCT,
  payload: product,
});

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export {ActionType, loadProducts, addCreatedProduct, redirectToRoute, updateCreatedProduct};
