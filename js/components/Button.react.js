var React = require('react');

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

module.exports = Button;