var React = require('React');
var Router = require('../lib/router');
var Welcome = require('./welcome.js');

var Content = module.exports = React.createClass({
	getInitialState: function() {
		return {
			view: "/",
			user: "admin"
		};
	},
	componentWillMount: function() {
		this.router = new Router();
		router.on("default", this.goHome);
		router.on("route:students", this.viewAll);
		router.on("route:addStudent", this.addStudent);
	},
	goHome: function() {
		this.setState({
			view: "/"
		});
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
