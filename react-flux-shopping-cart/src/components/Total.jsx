import React from 'react';
import * as DefaultPropTypes from '../constants/PropTypes';
import { formatNumber } from '../helpers/ShoppingCartHelper';

const Total = ({ products }) => {
  const calculateTotal = () => {
    const reducer = (accumulator, current) => {
      const a = current.quantity * current.price + accumulator;

      return a;
    };

    const total = products.reduce(reducer, 0);

    return formatNumber(total);
  };

  return <strong>Total ${calculateTotal()}</strong>;
};

Total.propTypes = {
  products: DefaultPropTypes.PRODUCTS.isRequired
};

export default Total;
