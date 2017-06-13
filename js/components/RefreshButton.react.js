var React = require('react');

var RefreshButton = React.createClass({
    _onClick: function () {
        this.props.handleInputChange(this.props.arrayIndex, this.props.quantity);
    },
    render: function() {
        return (
            <button className="btn btn-info btn-sm" onClick={this._onClick}><i className="fa fa-refresh"></i></button>
        );
    }
});

module.exports = RefreshButton;