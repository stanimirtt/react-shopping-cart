var React = require('react');

var DeleteButton = React.createClass({
    _onClick: function () {
        this.props.handleProductRemove(this.props.arrayIndex);
    },
    render: function() {
        return (
            <button className="btn btn-danger btn-sm" onClick={this._onClick}><i className="fa fa-trash-o"></i></button>
        );
    }
});

module.exports = DeleteButton;