import React from 'react';
import PropTypes from 'prop-types';

const RefreshButton = ({ arrayIndex, onChangeQuantity }) => {
  const onClick = () => onChangeQuantity(arrayIndex);

  return (
    <button className="btn btn-info btn-sm" onClick={onClick}>
      <i className="fa fa-refresh" />
    </button>
  );
};

RefreshButton.propTypes = {
  arrayIndex: PropTypes.number.isRequired,
  onChangeQuantity: PropTypes.func.isRequired
};

export default RefreshButton;
