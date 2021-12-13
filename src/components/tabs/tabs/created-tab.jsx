import React, {useState} from 'react';
import { View, Switch } from 'react-native-web';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getCreatedProducts } from '../../../store/products-data/selectors';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';
import { AppRoute } from '../../../const';
import { deleteProduct } from '../../../store/api-actions';

function CreatedTab({products, onDeleteProduct}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const handleSwitchChange = () => setIsEnabled(previousState => !previousState);

  const handleProductDelete = (evt) => {
    onDeleteProduct(parseInt(evt.target.dataset.index, 10));
  }

  return (
    <>
    <div>
      <p className="filter">Отфильтровать опубликованные</p>

      <View className="switch">
        <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handleSwitchChange}
            value={isEnabled} />
      </View>
    </div>

    <table className='table container'>
      <thead>
        <tr>
          <th className="table__header">ID</th>
          <th className="table__header">Название</th>
          <th className="table__header">Цена</th>
          <th className="table__header">Описание</th>
          <th className="table__header">Опубликовано</th>
          <th className="table__header">Опубликовано</th>
          <th className="table__header">Редактировать</th>
          <th className="table__header">Удалить</th>
        </tr>
      </thead>
      <tbody>
        {isEnabled ? products.filter((product) => product.published).map((product, index) => (
          <tr key={product.title + product.id}>
            <td className="table__ceil">{index}</td>
            <td className="table__ceil">{product.title}</td>
            <td className="table__ceil">{product.price} $</td>
            <td className="table__ceil">{product.description}</td>
            <td className="table__ceil">{product.published ? 'Да' : 'Нет'}</td>
            <td className="table__ceil">{product.date}</td>
            <td className="table__ceil"><Link to={generatePath(AppRoute.EDIT, {id: index})}>Редактировать</Link></td>
            <td className="table__ceil"><button data-index={index} type="button" className="button" onClick={handleProductDelete}>Удалить</button></td>
          </tr>
        )) : products.map((product, index) => (
          <tr key={product.title + product.id}>
            <td className="table__ceil">{index}</td>
            <td className="table__ceil">{product.title}</td>
            <td className="table__ceil">{product.price} $</td>
            <td className="table__ceil">{product.description}</td>
            <td className="table__ceil">{product.published ? 'Да' : 'Нет'}</td>
            <td className="table__ceil">{product.date}</td>
            <td className="table__ceil"><Link to={generatePath(AppRoute.EDIT, {id: index})}>Редактировать</Link></td>
            <td className="table__ceil"><button data-index={index} type="button" className="button" onClick={handleProductDelete}>Удалить</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

CreatedTab.propTypes = {
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
  onDeleteProduct(index) {
    dispatch(deleteProduct(index));
  },
});

export {CreatedTab};
export default connect(mapStateToProps, mapDispatchToProps)(CreatedTab);
