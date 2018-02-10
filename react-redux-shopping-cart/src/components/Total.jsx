import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartHelper from '../helpers/ShoppingCartHelper';

const Total = ({ items, columns }) => {
  const total = items
    .map(
      item =>
        ShoppingCartHelper.findValueByKey(item, columns, 'quantity') *
        ShoppingCartHelper.findValueByKey(item, columns, 'price')
    )
    .reduce((acc, val) => acc + val);

  return <strong>Total ${ShoppingCartHelper.formatNumber(total)}</strong>;
};

Total.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      details: PropTypes.string,
      image: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number
    })
  ).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      key: PropTypes.string,
      display: PropTypes.bool
    })
  ).isRequired
};

export default Total;
