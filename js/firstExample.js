var React = require('React');
var HelloWorld = require('./HelloWorld.js');

var names = [
	'sedge',
	'dude',
	'dayum'
];

App = React.createClass({
	render: function() {
		return (
			<HelloWorld names={this.props.names} />
		);
	}
});

React.render(
	<App names={names} />,
	document.getElementById("main")
);
