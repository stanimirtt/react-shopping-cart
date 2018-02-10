import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = ({ removeItem, item }) => {
  const handleClick = e => {
    e.preventDefault();
    removeItem(item);
  };

  return (
    <button className="btn btn-danger btn-sm" onClick={handleClick}>
      <i className="fa fa-trash-o" />
    </button>
  );
};

DeleteButton.propTypes = {
  removeItem: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    details: PropTypes.string,
    image: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number
  }).isRequired
};

export default DeleteButton;
