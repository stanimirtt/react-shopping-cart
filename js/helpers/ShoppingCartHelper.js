var ShoppingCartHelper = {
	findValueByKey: function (product, columns, key) {
	    var i, currentKey;

	    for (i = 0; i < columns.length; i++) {
	        currentKey = columns[i].key;
	        if (currentKey === key) {
	            return product[currentKey];
	        }
	    }
	},
	formatNumber: function (value) {
	    return Number(value).toFixed(2);
	}
}

module.exports = ShoppingCartHelper;