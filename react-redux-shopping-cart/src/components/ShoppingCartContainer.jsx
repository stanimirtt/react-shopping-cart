import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import ShoppingCart from './ShoppingCart';
import * as shoppingCartActions from '../actions/shoppingCartActions';

class ShoppingCartContainer extends React.Component {
  constructor(props) {
    super(props);

    this.changeQuantity = this.changeQuantity.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this.state = {
      item: {}
    };
  }

  changeQuantity(item) {
    this.setState({ item });
  }

  updateQuantity() {
    this.props.actions
      .updateQuantity(this.state.item)
      .then(() => {
        toastr.success('Quantity updated');
        this.setState({ item: {} });
      })
      .catch(error => {
        toastr.error(error);
      });
  }

  removeItem(item) {
    this.props.actions
      .removeItem(item.id)
      .then(() => {
        toastr.success('Item removed');
        this.setState({ item: {} });
      })
      .catch(error => {
        toastr.error(error);
      });
  }

  render() {
    return (
      <ShoppingCart
        items={this.props.items}
        changeQuantity={this.changeQuantity}
        updateQuantity={this.updateQuantity}
        removeItem={this.removeItem}
      />
    );
  }
}

ShoppingCartContainer.propTypes = {
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
  actions: PropTypes.shape({
    removeItem: PropTypes.func,
    updateQuantity: PropTypes.func
  }).isRequired
};

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(shoppingCartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);
