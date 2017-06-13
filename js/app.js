var React = require('react');
var ReactDOM = require('react-dom');
var ShoppingCart = require('./components/ShoppingCart.react');

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
	
ReactDOM.render(
  <ShoppingCart 
  	products={products}
  	columnKeys={columns}
  	currency="USD" />,
  document.getElementById('container')
);
