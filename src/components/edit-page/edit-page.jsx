import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import { getCreatedProducts } from '../../store/products-data/selectors';

import Header from '../header/header';
import { deleteProduct, updateProduct } from '../../store/api-actions';

function EditPage({products, onUpdateProduct, onDeleteProduct}) {
  const productId = parseInt(useParams().id, 10);
  const product = products[productId];

  const [form, setForm] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
    published: product.published,
    date: product.date,
    index: productId,
  });

  const [fakeForm, setFakeForm] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
    image: 'https://i.pravatar.cc',
    category: 'electronic'
  });

  const handleTitleChange = (evt) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today  = new Date();
    setForm({
      ...form,
      title: evt.target.value,
      date: today.toLocaleDateString("ru-RU", options)
    });

    setFakeForm({
      ...fakeForm,
      title: evt.target.value,
    });
  }

  const handlePriceChange = (evt) => {
    setForm({
      ...form,
      price: evt.target.value,
    });

    setFakeForm({
      ...fakeForm,
      price: evt.target.value,
    });
  }

  const handleDescriptionChange = (evt) => {
    setForm({
      ...form,
      description: evt.target.value,
    });

    setFakeForm({
      ...fakeForm,
      description: evt.target.value,
    });
  }

  const handlePublishedChange = (evt) => {
    setForm({
      ...form,
      published: evt.target.checked,
    });
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    onUpdateProduct(form, fakeForm);
  }

  const handleProductDelete = () => {
    onDeleteProduct(productId);
  }

  return (
    <>
      <Header />
      <section className="create-product container">
        <h2>Редактирование</h2>
        <form action="https://fakestoreapi.com/products" className="product-form" onSubmit={handleFormSubmit}>
          <div className="product-form__wrapper">
            <label className="product-form__label" htmlFor="name">Название:</label>
            <input value={form.title} type="text" id="name" required onChange={handleTitleChange}/>
          </div>

          <div className="product-form__wrapper">
            <label className="product-form__label" htmlFor="price">Цена:</label>
            <input value={Number(form.price)} type="number" id="price" required onChange={handlePriceChange} />
          </div>

          <div className="product-form__wrapper">
            <label className="product-form__label" htmlFor="description">Описание:</label>
            <textarea value={form.description} className="product-form__textarea" name="description" id="description" cols="30" rows="10" required onChange={handleDescriptionChange}></textarea>
          </div>

          <div className="product-form__wrapper">
            <label className="product-form__label" htmlFor="published">Опубликован :</label>
            <input checked={form.published} type="checkbox" id="published" onChange={handlePublishedChange}/>
          </div>

          <button type="submit" className="button">Отправить</button>
        </form>

        <button type="button" className="button" onClick={handleProductDelete}>Удалить</button>
      </section>
    </>
  );
}

EditPage.propTypes = {
  onUpdateProduct: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    published: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  products: getCreatedProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateProduct(form, fake) {
    dispatch(updateProduct(form , fake));
  },
  onDeleteProduct(index) {
    dispatch(deleteProduct(index));
  },
});

export {EditPage};
export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
