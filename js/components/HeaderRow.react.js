var React = require('react');

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

module.exports = HeaderRow;