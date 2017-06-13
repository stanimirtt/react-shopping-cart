var React = require('react');
var ShoppingCartHelper = require('../helpers/ShoppingCartHelper');

var Total = React.createClass({

    calculateTotal: function () {
        var i, currentProduct,
            total = 0, 
            products = this.props.products,
            columns = this.props.columnKeys;

        for (i = 0; i < products.length; i++) {
            currentProduct = products[i];

            total += ShoppingCartHelper.findValueByKey(currentProduct, columns, 'quantity') * ShoppingCartHelper.findValueByKey(currentProduct, columns, 'price');
        }

        return ShoppingCartHelper.formatNumber(total);
    },

    render: function() {
        return (
            <strong>Total ${this.calculateTotal()}</strong>
        );
    }
    
});

module.exports = Total;