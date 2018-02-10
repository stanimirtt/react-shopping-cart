import React from 'react';
import PropTypes from 'prop-types';
import ItemRow from './ItemRow';

const AllItemRows = ({ items, columns, changeQuantity, updateQuantity, removeItem }) => {
  const rows = items.map(item => (
    <ItemRow
      key={item.id}
      changeQuantity={changeQuantity}
      updateQuantity={updateQuantity}
      removeItem={removeItem}
      min={0}
      item={item}
      columns={columns}
    />
  ));

  return <tbody>{rows}</tbody>;
};

AllItemRows.propTypes = {
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
  ).isRequired,
  changeQuantity: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
};

export default AllItemRows;
