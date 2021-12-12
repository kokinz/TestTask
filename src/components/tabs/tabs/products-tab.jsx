import React, {useState} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getProducts} from '../../../store/products-data/selectors.js';
import productProp from '../../../store/product-prop.js';
import {generatePath} from 'react-router';
import {Link} from 'react-router-dom';

import {AppRoute} from "../../../const.js";

const Count = {
  EIGHT: 8,
  SIXTEEN: 16,
  ALL: 0,
};

function ProductsTab({products}) {
  const [count, setCount] = useState(Count.EIGHT);

  const handleSetCount = (evt) => {
    console.log(parseInt(evt.target.dataset.number, 10));

    switch(parseInt(evt.target.dataset.number, 10)) {
      case (Count.EIGHT): {
        setCount(Count.EIGHT);
        return;
      }

      case (Count.SIXTEEN): {
        setCount(Count.SIXTEEN);
        return;
      }

      case (Count.ALL): {
        setCount(products.length);
        return;
      }

      default: {
        return;
      }
    }
  }

  return (
    <>
      <ul className="products list">
        {products.slice(0, count).map((product) => (
          <li className="products__item" key={product.title}>
            <p className="products__name">{product.title}</p>

            <img src={product.image} alt="Product" className="products__img" />

            <p className="products__price">{product.price} $</p>

            <Link to={generatePath(AppRoute.PRODUCT, {id: product.id})}>На страницу продукта</Link>
          </li>
        ))}
      </ul>

      <ul className="buttons">
        {Object.values(Count).map((button) =>
          <button key={button} data-number={button} onClick={handleSetCount} className="button">{button === Count.ALL ? 'Все продукты' : `${button} продуктов`} </button>
          )}
      </ul>
    </>
  );
}

ProductsTab.propTypes = {
  products: PropTypes.arrayOf(productProp).isRequired,
};

const mapStateToProps = (state) => ({
  products: getProducts(state),
});

export {ProductsTab};
export default connect(mapStateToProps, null)(ProductsTab);
