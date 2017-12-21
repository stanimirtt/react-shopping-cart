import React, { Component } from 'react';
import HeaderRow from './HeaderRow';
import Button from './Button';
import Total from './Total';
import AllProductRows from './AllProductRows';
import ShoppingCartStore from '../stores/ShoppingCartStore';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: ShoppingCartStore.getProducts(),
      columns: ShoppingCartStore.getColumns()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ShoppingCartStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    ShoppingCartStore.removeListener(this.onChange);
  }

  onChange() {
    this.setState({
      products: ShoppingCartStore.getProducts()
    });
  }

  get buildTable() {
    const { columns, products } = this.state;

    return (
      <table id="cart" className="table table-hover table-condensed">
        <thead>
          <HeaderRow columns={columns} />
        </thead>
        <AllProductRows columns={columns} products={products} />
        <tfoot>
          <tr className="visible-xs">
            <td className="text-center">
              <Total products={products} />
            </td>
          </tr>
          <tr>
            <td>
              <Button url="#" type="warning" direction="left" text="Continue Shopping" />
            </td>
            <td colSpan="2" className="hidden-xs" />
            <td className="hidden-xs text-center">
              <Total products={products} />
            </td>
            <td>
              <Button url="#" type="success" direction="right" text="Checkout" />
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }

  render() {
    const noProducts = (
      <div className="text-center">
        No Products. <Button url="#" type="success" direction="right" text="Go Shopping" />
      </div>
    );

    const { products } = this.state;

    return (
      <div id="shopping-cart">
        <div className="container">{products.length > 0 ? this.buildTable : noProducts}</div>
      </div>
    );
  }
}

export default ShoppingCart;
