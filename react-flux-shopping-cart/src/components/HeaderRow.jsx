import React from 'react';
import { COLUMNS } from '../constants/PropTypes';

const HeaderRow = ({ columns }) => {
  const columnsHtml = columns.filter(item => item.display !== false).map(item => <th key={item.key}>{item.title}</th>);

  return (
    <tr>
      {columnsHtml}
      <th className="text-center">Subtotal</th>
      <th />
    </tr>
  );
};

HeaderRow.propTypes = {
  columns: COLUMNS.isRequired
};

export default HeaderRow;
