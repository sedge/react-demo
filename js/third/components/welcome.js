var React = require('React');

var Welcome = module.exports = React.createClass({
	render: function() {
		return (
			<div className="Welcome container">
				<h2>You are: {this.props.user}</h2>
				<p>
					Welcome {this.props.user}! Details go here!
				</p>
			</div>
		);
	}
});
