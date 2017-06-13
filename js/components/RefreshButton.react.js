var React = require('react');

var RefreshButton = React.createClass({

    _changeQuantity: function () {
        this.props.onChangeQuantity(this.props.arrayIndex);
    },

    render: function() {
        return (
            <button className="btn btn-info btn-sm" onClick={this._changeQuantity}><i className="fa fa-refresh"></i></button>
        );
    }
    
});

module.exports = RefreshButton;