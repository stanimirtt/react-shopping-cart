// https://bootsnipp.com/snippets/featured/responsive-shopping-cart
// https://codereview.stackexchange.com/questions/106839/my-first-shopping-cart-with-react-js

var React = require('react');
var HeaderRow = require('./HeaderRow.react');
var Button = require('./Button.react');
var Total = require('./Total.react');
var AllProductRows = require('./AllProductRows.react');
var ShoppingCartStore = require('../stores/ShoppingCartStore');

var ShoppingCart = React.createClass({

    getInitialState: function () {
        return { 
            products: ShoppingCartStore.getProducts(),
            columns: ShoppingCartStore.getColumns()
        };
    },

    componentDidMount: function() {
        ShoppingCartStore.addChangeListener(this._onChange);  
    },

    componentWillUnmount: function() {
        ShoppingCartStore.removeListener(this._onChange);
    },

    buildTable: function () {
        var table = <table id="cart" className="table table-hover table-condensed">
                        <thead>
                            <HeaderRow columnKeys={this.state.columns} />
                        </thead>
                        <AllProductRows 
                            columnKeys={this.state.columns} 
                            products={this.state.products} />
                        <tfoot>
                            <tr className="visible-xs">
                                <td className="text-center"><Total products={this.state.products} columnKeys={this.state.columns} /></td>
                            </tr>
                            <tr>
                                <td><Button url="#" type="warning" direction="left" text="Continue Shopping" /></td>
                                <td colSpan="2" className="hidden-xs"></td>
                                <td className="hidden-xs text-center"><Total products={this.state.products} columnKeys={this.state.columns} /></td>
                                <td><Button url="#" type="success" direction="right" text="Checkout" /></td>
                            </tr>
                        </tfoot>
                    </table>;

        return table;
    },

    render: function() {
        var containerHTML;

        if (this.state.products.length > 0) {
            containerHTML = this.buildTable();
        } else {
            containerHTML = <div className="text-center">No Products. <Button url="#" type="success" direction="right" text="Go Shopping" /></div>;
        }

        return (
          <div id="shopping-cart">
            <div className="container">
                {containerHTML}
            </div>
          </div>
        );
    },

    _onChange: function() {
        this.setState({ 
            products: ShoppingCartStore.getProducts() 
        });
    }
    
});

module.exports = ShoppingCart;