import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = ({ arrayIndex, onRemoveProduct }) => {
  const onClick = () => onRemoveProduct(arrayIndex);

  return (
    <button className="btn btn-danger btn-sm" onClick={onClick}>
      <i className="fa fa-trash-o" />
    </button>
  );
};

DeleteButton.propTypes = {
  arrayIndex: PropTypes.number.isRequired,
  onRemoveProduct: PropTypes.func.isRequired
};

export default DeleteButton;
