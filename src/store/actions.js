const ActionType = {
  LOAD_PRODUCTS: 'products/loadProducts',
};

const loadProducts = (products) => ({
  type: ActionType.LOAD_PRODUCTS,
  payload: products,
});

export {ActionType, loadProducts};
