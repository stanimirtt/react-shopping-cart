var React = require('react');
var DeleteButton = require('./DeleteButton.react');
var RefreshButton = require('./RefreshButton.react');
var ShoppingCartHelper = require('../helpers/ShoppingCartHelper');

var ProductRow = React.createClass({
    getInitialState: function () {
        return {
            quantity: this.props.productQuantity
        };
    },
    _onChange: function (e) {
        this.setState({
            quantity: e.target.value
        });
    },
    calculateSubtotal: function() {
        return ShoppingCartHelper.formatNumber(this.props.productPrice * this.props.productQuantity);
    },
    render: function() {            
        return (
            <tr>
                <td data-th="Product">
                    <div className="row">
                        <div className="col-sm-2 hidden-xs"><img src={this.props.productImage} className="img-responsive"/></div>
                        <div className="col-sm-10">
                            <h4 className="nomargin">{this.props.productName}</h4>
                            <p>{this.props.productDetails}</p>
                        </div>
                    </div>
                </td>
                <td data-th="Price">${ShoppingCartHelper.formatNumber(this.props.productPrice)}</td>
                <td data-th="Quantity">
                    <input type="number" 
                        className="form-control text-center"
                        defaultValue={this.props.productQuantity}
                        min={this.props.min} 
                        onChange={this._onChange} 
                        />
                </td>
                <td data-th="Subtotal" className="text-center">${this.calculateSubtotal()}</td>
                <td className="actions" data-th="">
                    <RefreshButton handleInputChange={this.props.handleInputChange} arrayIndex={this.props.arrayIndex} quantity={this.state.quantity} />
                    <DeleteButton handleProductRemove={this.props.handleProductRemove} arrayIndex={this.props.arrayIndex} />                            
                </td>
            </tr>
        );
    }
});

module.exports = ProductRow;