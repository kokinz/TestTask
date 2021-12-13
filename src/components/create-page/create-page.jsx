import React, {useState} from 'react';
import {connect} from 'react-redux';
import { postProduct } from '../../store/api-actions';

import Header from '../header/header';

function CreatePage({addProduct}) {
  const [form, setForm] = useState({
    title: '',
    price: 0,
    description: '',
    published: false,
    date: '',
  });

  const [fakeForm, setFakeForm] = useState({
    title: '',
    price: 0,
    description: '',
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

    addProduct(form, fakeForm);
  }

  return (
    <>
      <Header />
      <section className="create-product container">
        <form action="https://fakestoreapi.com/products" className="product-form" onSubmit={handleFormSubmit}>
          <div className="product-form__wrapper">
            <label className="product-form__label" htmlFor="name">Название:</label>
            <input type="text" id="name" required onChange={handleTitleChange}/>
          </div>

          <div className="product-form__wrapper">
            <label className="product-form__label" htmlFor="price">Цена:</label>
            <input type="number" id="price" required onChange={handlePriceChange} />
          </div>

          <div className="product-form__wrapper">
            <label className="product-form__label" htmlFor="description">Описание:</label>
            <textarea className="product-form__textarea" name="description" id="description" cols="30" rows="10" required onChange={handleDescriptionChange}></textarea>
          </div>

          <div className="product-form__wrapper">
            <label className="product-form__label" htmlFor="published">Опубликован :</label>
            <input type="checkbox" id="published" onChange={handlePublishedChange}/>
          </div>

          <button type="submit" className="button">Отправить</button>
        </form>
      </section>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addProduct(form, fake) {
    dispatch(postProduct(form , fake));
  },
});

export {CreatePage};
export default connect(null, mapDispatchToProps)(CreatePage);
