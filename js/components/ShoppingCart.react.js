var React = require('react');
var HeaderRow = require('./HeaderRow.react');
var Button = require('./Button.react');
var Total = require('./Total.react');
var AllProductRows = require('./AllProductRows.react');

// var Forum = React.createClass({
    
//     getInitialState: function() {
        
//         return {
//             allAnswers: ForumStore.getAnswers()
//         }
        
//     },
    
//     componentDidMount: function() {
//         ForumStore.addChangeListener(this._onChange);  
//     },
    
//     componentWillUnmount: function() {
//         ForumStore.removeListener(this._onChange);
//     },
   
//     render: function() {
        
//         return (
//             <div>
//                 <ForumHeader />

//                 <div className="container">
//                     <ForumQuestion />
//                     <hr />
//                     <ForumAnswers allAnswers={ this.state.allAnswers } />
//                     <hr />
//                     <h4>Add an answer</h4>
//                     <ForumAddAnswerBox onAddAnswer={ this._onAddAnswer } />
//                 </div>
//             </div>
//         );
        
//     },
    
//     _onChange: function() {
//         this.setState({ allAnswers: ForumStore.getAnswers() });
//     },
    
//     _onAddAnswer: function(answerText) {
//         ForumActions.addNewAnswer(answerText);
//     }
    
// });

// https://bootsnipp.com/snippets/featured/responsive-shopping-cart
// https://codereview.stackexchange.com/questions/106839/my-first-shopping-cart-with-react-js

var ShoppingCart = React.createClass({
    getInitialState: function () {
        return { products };
    },
    handleInputChange: function (index, quantity) {
        // TODO: Return reference and resolve using mapping.
        
        products[index]['quantity'] = Number(quantity);
        this.setState({ products })
    },
    handleProductRemove: function (index) {
        products.splice(index, 1);
        this.setState({ products });
    },
    render: function() {
        return (
          <div id="shopping-cart">
            <div className="container">
                <table id="cart" className="table table-hover table-condensed">
                    <thead>
                        <HeaderRow columnKeys={this.props.columnKeys} />
                    </thead>
                    <AllProductRows 
                        columnKeys={this.props.columnKeys} 
                        products={this.state.products}
                        handleInputChange={this.handleInputChange}
                        handleProductRemove={this.handleProductRemove} />
                    <tfoot>
                        <tr className="visible-xs">
                            <td className="text-center"><Total products={this.state.products} columnKeys={this.props.columnKeys} /></td>
                        </tr>
                        <tr>
                            <td><Button url="#" type="warning" direction="left" text="Continue Shopping" /></td>
                            <td colSpan="2" className="hidden-xs"></td>
                            <td className="hidden-xs text-center"><Total products={this.state.products} columnKeys={this.props.columnKeys} /></td>
                            <td><Button url="#" type="success" direction="right" text="Checkout" /></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
          </div>
        );
    }
});

var products = [{
        id: 0,
        product: "Product 1",
        details: "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.",
        image: "http://placehold.it/100x100",
        quantity: 1,
        price: 5
    }, {
        id: 1,
        product: "Product 2",
        details: "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.",
        image: "http://placehold.it/100x100",
        quantity: 1,
        price: 10
    }, {
        id: 2,
        product: "Product 3",
        details: "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.",
        image: "http://placehold.it/100x100",
        quantity: 1,
        price: 3
    }], 
    columns = [{
        title: 'ID',
        key: 'id',
        display: false
    }, { 
        title: 'Product',
        key: 'product' 
    }, {
        title: 'Details',
        key: 'details',
        display: false
    }, {
        title: 'Image',
        key: 'image',
        display: false
    }, {
        title: 'Price',
        key: 'price'
    }, {
        title: 'Quantity',
        key: 'quantity'
    }];

module.exports = ShoppingCart;