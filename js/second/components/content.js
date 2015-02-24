var React = require('React');
var Welcome = require('./components/welcome.js');

var Content = module.exports = React.createClass({
	getInitialState: function() {
		return {
			view: "/",
			user: "admin"
		};
	},
	render: function() {
		var view;

		// Process the state of the
		// Content to display the correct
		// view
		switch(this.state.view) {
			case '/':
			default:
				view = (
					<Welcome user={this.state.user} />
				);
				break;
		}

		return view;
	}
});
