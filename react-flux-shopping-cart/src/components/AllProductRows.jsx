import React from 'react';
import { PRODUCTS } from '../constants/PropTypes';
import ProductRow from './ProductRow';

const AllProductRows = ({ products }) => (
  <tbody>
    {products.map((product, i) => (
      <ProductRow
        key={product.id}
        min={0}
        arrayIndex={i}
        productName={product.product}
        productDetails={product.details}
        productImage={product.image}
        productPrice={product.price}
        productQuantity={product.quantity}
      />
    ))}
  </tbody>
);

AllProductRows.propTypes = {
  products: PRODUCTS
};

AllProductRows.defaultProps = {
  products: []
};

export default AllProductRows;
