import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import RefreshButton from './RefreshButton';
import { formatNumber } from '../helpers/ShoppingCartHelper';
import ShoppingCartActions from '../actions/ShoppingCartActions';

class ProductRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: this.props.productQuantity
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
  }

  get calculateSubtotal() {
    const { productPrice, productQuantity } = this.props;

    return formatNumber(productPrice * productQuantity);
  }

  handleChange(e) {
    this.setState({
      quantity: e.target.value
    });
  }

  handleChangeQuantity(index) {
    ShoppingCartActions.quantityChange(index, this.state.quantity);
  }

  handleRemoveProduct(index) {
    ShoppingCartActions.productRemove(index);
  }

  render() {
    const { productImage, productName, productDetails, productPrice, productQuantity, min, arrayIndex } = this.props;

    return (
      <tr>
        <td data-th="Product">
          <div className="row">
            <div className="col-sm-2 hidden-xs">
              <img src={productImage} className="img-responsive" alt={productName} />
            </div>
            <div className="col-sm-10">
              <h4>{productName}</h4>
              <p>{productDetails}</p>
            </div>
          </div>
        </td>
        <td data-th="Price">${formatNumber(productPrice)}</td>
        <td data-th="Quantity">
          <input
            type="number"
            className="form-control text-center"
            defaultValue={productQuantity}
            min={min}
            onChange={this.handleChange}
          />
        </td>
        <td data-th="Subtotal" className="text-center">
          ${this.calculateSubtotal}
        </td>
        <td className="actions" data-th="">
          <RefreshButton onChangeQuantity={this.handleChangeQuantity} arrayIndex={arrayIndex} />
          <DeleteButton onRemoveProduct={this.handleRemoveProduct} arrayIndex={arrayIndex} />
        </td>
      </tr>
    );
  }
}

ProductRow.propTypes = {
  productName: PropTypes.string.isRequired,
  productDetails: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productQuantity: PropTypes.number.isRequired,
  productPrice: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  arrayIndex: PropTypes.number.isRequired
};

export default ProductRow;
