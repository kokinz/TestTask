const ActionType = {
  LOAD_PRODUCTS: 'products/loadProducts',
  ADD_CREATED_PRODUCT: 'products/addProduct',
  UPDATE_CREATED_PRODUCT: 'products/updateProduct',
  DELETE_CREATED_PRODUCT: 'products/deleteProduct',
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

const deleteCreatedProduct = (index) => ({
  type: ActionType.DELETE_CREATED_PRODUCT,
  payload: index,
});

export {ActionType, loadProducts, addCreatedProduct, redirectToRoute, updateCreatedProduct, deleteCreatedProduct};
