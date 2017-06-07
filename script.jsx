// https://bootsnipp.com/snippets/featured/responsive-shopping-cart
// https://codereview.stackexchange.com/questions/106839/my-first-shopping-cart-with-react-js

var formatNumber = function (value) {
	return Number(value).toFixed(2);
};

var findValueByKey = function (product, columns, key) {
	var i, currentKey;

	for (i = 0; i < columns.length; i++) {
		currentKey = columns[i].key;
		if (currentKey === key) {
			return product[currentKey];
		}
	}
}

var HeaderRow = React.createClass({
	render: function() {
		var columnsHtml = [];

		for (var i = 0; i < this.props.columnKeys.length; i++) {
		  if (this.props.columnKeys[i].display !== false) {
			columnsHtml.push(
				<th key={i}>{this.props.columnKeys[i].title}</th>
			);
		  }
	    }

		return (
			<tr>
				{columnsHtml}
				<th className="text-center">Subtotal</th>
				<th></th>
			</tr>
		);
	}
});

var ProductRow = React.createClass({
	calculateSubtotal: function() {
		return formatNumber(this.props.productPrice * this.props.productQuantity);
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
				<td data-th="Price">${formatNumber(this.props.productPrice)}</td>
				<td data-th="Quantity">
					<input type="number" 
						className="form-control text-center"
						defaultValue={this.props.productQuantity}
						min={this.props.min} 
						onChange={this.props.handleInputChange.bind(null, this.props.arrayIndex)} />
				</td>
				<td data-th="Subtotal" className="text-center">${this.calculateSubtotal()}</td>
				<td className="actions" data-th="">
					<button className="btn btn-danger btn-sm" onClick={this.props.handleProductRemove.bind(null, this.props.arrayIndex)}><i className="fa fa-trash-o"></i></button>								
				</td>
			</tr>
		);
	}
});

var Button = React.createClass({
	render: function() {
		var typeClassName = "btn btn-" + this.props.type, 
		directionClassName = "fa fa-angle-" + this.props.direction;

		if (this.props.direction === "right") {
			typeClassName  += " btn-block";

			return (
				<a href={this.props.url} className={typeClassName}>{this.props.text} <i className={directionClassName}></i></a>
			);
		} else {
			return (
				<a href={this.props.url} className={typeClassName}><i className={directionClassName}></i> {this.props.text}</a>
			);
		}
	}
});

var Total = React.createClass({
	calculateTotal: function () {
		var i, currentProduct,
			total = 0, 
			products = this.props.products,
			columns = this.props.columnKeys;

		for (i = 0; i < products.length; i++) {
			currentProduct = products[i];

			total += findValueByKey(currentProduct, columns, 'quantity') * findValueByKey(currentProduct, columns, 'price');
		}

		return formatNumber(total);
	},
	render: function() {
		return (
			<strong>Total ${this.calculateTotal()}</strong>
		);
	}
});

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
					key={findValueByKey(currentProduct, columns, 'id')}
				    handleInputChange={this.props.handleInputChange} 
				    handleProductRemove={this.props.handleProductRemove} 
				    min={0}
				    arrayIndex={i}
				    productName={findValueByKey(currentProduct, columns, 'product')}
				    productDetails={findValueByKey(currentProduct, columns, 'details')} 
				    productImage={findValueByKey(currentProduct, columns, 'image')} 
				    productPrice={findValueByKey(currentProduct, columns, 'price')} 
				    productQuantity={findValueByKey(currentProduct, columns, 'quantity')}
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

var ShoppingCart = React.createClass({
	getInitialState: function () {
		return { products };
	},
	handleInputChange: function (index, e) {
		products[index]['quantity'] = Number(e.target.value);
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

React.render(
  <ShoppingCart 
  	products={products}
  	columnKeys={columns}
  	currency="USD" />,
  document.getElementById('container')
);