import React from 'react';
import PropTypes from 'prop-types';
import HeaderRow from './HeaderRow';
import Button from './Button';
import Total from './Total';
import AllItemRows from './AllItemRows';

const ShoppingCart = ({ items, changeQuantity, updateQuantity, removeItem }) => {
  const buildTable = () => {
    const columns = [
      {
        title: 'ID',
        key: 'id',
        display: false
      },
      {
        title: 'Name',
        key: 'name'
      },
      {
        title: 'Details',
        key: 'details',
        display: false
      },
      {
        title: 'Image',
        key: 'image',
        display: false
      },
      {
        title: 'Price',
        key: 'price'
      },
      {
        title: 'Quantity',
        key: 'quantity'
      }
    ];

    const headerRow = <HeaderRow columns={columns} />;
    const itemRows = (
      <AllItemRows
        columns={columns}
        items={items}
        changeQuantity={changeQuantity}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
    );
    const total = <Total items={items} columns={columns} />;
    const buttonCheckout = <Button url="#" type="success" direction="right" text="Checkout" />;
    const buttonContinueShopping = <Button url="#" type="warning" direction="left" text="Continue Shopping" />;

    const table = (
      <table id="cart" className="table table-hover table-condensed">
        <thead>{headerRow}</thead>
        {itemRows}
        <tfoot>
          <tr className="visible-xs">
            <td className="text-center">{total}</td>
          </tr>
          <tr>
            <td>{buttonContinueShopping}</td>
            <td colSpan="2" className="hidden-xs" />
            <td className="hidden-xs text-center">{total}</td>
            <td>{buttonCheckout}</td>
          </tr>
        </tfoot>
      </table>
    );

    return table;
  };

  const containerHTML =
    items.length > 0 ? (
      buildTable()
    ) : (
      <div className="text-center">
        No Items. <Button url="#" type="success" direction="right" text="Go Shopping" />
      </div>
    );

  return (
    <div id="shopping-cart">
      <div className="container">{containerHTML}</div>
    </div>
  );
};

ShoppingCart.propTypes = {
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
  changeQuantity: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
};

export default ShoppingCart;
