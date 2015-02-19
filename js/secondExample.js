var React = require('React');

var Header = require('./header.js');
// var Content = require('./header.js');
// var Footer = require('./footer.js');

var urls = {
	"Welcome Page": "/",
	"Add a Student": "/student/add",
	"View all Students": "/students"
};

App = React.createClass({
	render: function() {
		return (
			<div id="main">
				<Header urls={this.props.urls} />
			</div>
		);
	}
});

React.render(
	<App urls={urls} />,
	document.getElementById("main")
);
