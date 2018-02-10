import React from 'react';
import PropTypes from 'prop-types';
import RefreshButton from './RefreshButton';
import DeleteButton from './DeleteButton';
import ShoppingCartHelper from '../helpers/ShoppingCartHelper';

const ItemRow = ({ item, columns, min, changeQuantity, updateQuantity, removeItem }) => {
  const calculateSubtotal = (i, c) =>
    ShoppingCartHelper.formatNumber(
      ShoppingCartHelper.findValueByKey(i, c, 'price') * ShoppingCartHelper.findValueByKey(i, c, 'quantity')
    );

  const handleChange = e => {
    e.preventDefault();
    e.preventDefault();

    const newItem = Object.assign({}, item);

    newItem.quantity = Number(e.target.value);
    changeQuantity(newItem);
  };

  const refreshButton = <RefreshButton updateQuantity={updateQuantity} item={item} />;
  const deleteButton = <DeleteButton removeItem={removeItem} item={item} />;

  return (
    <tr>
      <td data-th="Item">
        <div className="row">
          <div className="col-sm-2 hidden-xs">
            <img src={ShoppingCartHelper.findValueByKey(item, columns, 'image')} className="img-responsive" alt="" />
          </div>
          <div className="col-sm-10">
            <h4 className="nomargin">{ShoppingCartHelper.findValueByKey(item, columns, 'name')}</h4>
            <p>{ShoppingCartHelper.findValueByKey(item, columns, 'details')}</p>
          </div>
        </div>
      </td>
      <td data-th="Price">
        ${ShoppingCartHelper.formatNumber(ShoppingCartHelper.findValueByKey(item, columns, 'price'))}
      </td>
      <td data-th="Quantity">
        <input
          type="number"
          className="form-control text-center"
          defaultValue={ShoppingCartHelper.findValueByKey(item, columns, 'quantity')}
          min={min}
          onChange={handleChange}
        />
      </td>
      <td data-th="Subtotal" className="text-center">
        ${calculateSubtotal(item, columns)}
      </td>
      <td className="actions" data-th="">
        {refreshButton}
        &nbsp;
        {deleteButton}
      </td>
    </tr>
  );
};

ItemRow.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    details: PropTypes.string,
    image: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number
  }).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      key: PropTypes.string,
      display: PropTypes.bool
    })
  ).isRequired,
  min: PropTypes.number.isRequired,
  changeQuantity: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
};

export default ItemRow;
