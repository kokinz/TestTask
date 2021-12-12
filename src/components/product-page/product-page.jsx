import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import {getProducts} from '../../store/products-data/selectors.js';
import productProp from '../../store/product-prop.js';

import Header from '../header/header';
import {getIndexById} from '../../utils.js';

function ProductPage({products}) {
  const productId = parseInt(useParams().id, 10);
  const product = products[getIndexById(productId, products)]

  return (
    <>
      <Header />
      <section className="product container">
        <h2 className="product__title">{product.title}</h2>

        <p className="product__price">{product.price} $</p>

        <p className="product__category">{product.category}</p>

        <div className="product__rating">
          <span className="product__rate">RATING:  {product.rating.rate}</span>
          <span className="product__count">COUNT:  {product.rating.count}</span>
        </div>

        <img src={product.image} alt="Изображение продукта" />
      </section>
    </>
  );
}

ProductPage.propTypes = {
  products: PropTypes.arrayOf(productProp).isRequired,
};

const mapStateToProps = (state) => ({
  products: getProducts(state),
});

export {ProductPage};
export default connect(mapStateToProps, null)(ProductPage);
