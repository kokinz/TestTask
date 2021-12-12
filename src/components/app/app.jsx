import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect, Switch, Route} from 'react-router-dom';

import {getProducts, getLoadedDataStatus} from '../../store/products-data/selectors.js';
import productProp from '../../store/product-prop.js';

import './app.scss';

import {AppRoute} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import ProductsPage from '../products-page/products-page';
import CreatePage from '../create-page/create-page';
import ProductPage from '../product-page/product-page';

function App({films, isDataLoaded}) {
  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Switch>
      <Route exact path={'/'}>
        <Redirect to={AppRoute.PRODUCTS}></Redirect>
      </Route>

      <Route exact path={AppRoute.PRODUCTS}>
        <ProductsPage />
      </Route>

      <Route exact path={AppRoute.CREATE}>
        <CreatePage />
      </Route>

      <Route exact path={AppRoute.PRODUCT}>
        <ProductPage />
      </Route>
    </Switch>
  );
}

App.propTypes = {
  products: PropTypes.arrayOf(productProp).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  products: getProducts(state),
  isDataLoaded: getLoadedDataStatus(state),
});

export {App};
export default connect(mapStateToProps, null)(App);
