var React = require('react');
var ProductRow = require('./ProductRow.react');
var ShoppingCartHelper = require('../helpers/ShoppingCartHelper');

var AllProductRows = React.createClass({

    buildRows: function () {
        var i, currentProduct,
            productRows = [],
            products = this.props.products,
            columns = this.props.columnKeys;
            
        for (i = 0; i < products.length; i++) {
            currentProduct = products[i];
            productRows.push(
                <ProductRow 
                    key={ShoppingCartHelper.findValueByKey(currentProduct, columns, 'id')}
                    handleProductRemove={this.props.handleProductRemove} 
                    min={0}
                    arrayIndex={i}
                    productName={ShoppingCartHelper.findValueByKey(currentProduct, columns, 'product')}
                    productDetails={ShoppingCartHelper.findValueByKey(currentProduct, columns, 'details')} 
                    productImage={ShoppingCartHelper.findValueByKey(currentProduct, columns, 'image')} 
                    productPrice={ShoppingCartHelper.findValueByKey(currentProduct, columns, 'price')} 
                    productQuantity={ShoppingCartHelper.findValueByKey(currentProduct, columns, 'quantity')}
                />
            );
        }

        return productRows;
    },

    render: function() {
        var rows = this.buildRows();

        return (
            <tbody>{rows}</tbody>
        );
    }
    
});

module.exports = AllProductRows;