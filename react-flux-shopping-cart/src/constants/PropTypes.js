import PropTypes from 'prop-types';

export const PRODUCTS = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
    product: PropTypes.string,
    details: PropTypes.string,
    image: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number
  })
);

export const COLUMNS = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string,
    key: PropTypes.string,
    display: PropTypes.bool
  })
);
