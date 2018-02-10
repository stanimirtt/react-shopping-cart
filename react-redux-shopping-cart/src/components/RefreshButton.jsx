import React from 'react';
import PropTypes from 'prop-types';

const RefreshButton = ({ updateQuantity }) => {
  const handleClick = e => {
    e.preventDefault();
    updateQuantity();
  };

  return (
    <button className="btn btn-info btn-sm" onClick={handleClick}>
      <i className="fa fa-refresh" />
    </button>
  );
};

RefreshButton.propTypes = {
  updateQuantity: PropTypes.func.isRequired
};

export default RefreshButton;
