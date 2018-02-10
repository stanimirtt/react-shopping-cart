import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const HeaderRow = ({ columns }) => {
  const columnsToHtml = columns
    .filter(column => {
      if (column.display !== false) {
        return column;
      }

      return false;
    })
    .map(column => <th key={uuid()}>{column.title}</th>);

  return (
    <tr>
      {columnsToHtml}
      <th className="text-center">Subtotal</th>
      <th />
    </tr>
  );
};

HeaderRow.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      key: PropTypes.string,
      display: PropTypes.bool
    })
  ).isRequired
};

export default HeaderRow;
