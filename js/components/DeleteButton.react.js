var React = require('react');

var DeleteButton = React.createClass({

    _removeProduct: function () {
        this.props.onRemoveProduct(this.props.arrayIndex);
    },

    render: function() {
        return (
            <button className="btn btn-danger btn-sm" onClick={this._removeProduct}><i className="fa fa-trash-o"></i></button>
        );
    }
    
});

module.exports = DeleteButton;