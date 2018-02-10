import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ url, type, direction, text }) => {
  let typeClassName = `btn btn-${type}`;
  const directionClassName = `fa fa-angle-${direction}`;

  if (direction === 'right') {
    typeClassName += ' btn-block';

    return (
      <a href={url} className={typeClassName}>
        {text} <i className={directionClassName} />
      </a>
    );
  }

  return (
    <a href={url} className={typeClassName}>
      <i className={directionClassName} /> {text}
    </a>
  );
};

Button.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
