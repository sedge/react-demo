var React = require('React');

var HelloWorld = module.exports = React.createClass({
	render: function() {
		var names = this.props.names.map(function(name) {
			return (
				<h1 key={name}>Hello {name}!</h1>
			);
		});
		return (
			<div id="hello">
				{names}
			</div>
		);
	}
});
