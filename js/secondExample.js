var React = require('React');

var Header = require('./header.js');
var Content = require('./content.js');
var Footer = require('./footer.js');

var urls = {
	nav: {
		"Welcome Page": "/",
		"Add a Student": "/student/add",
		"View all Students": "/students"
	},
	footer: {
		"Privacy Policy": "/privacy",
		"About us": "/about"
	}
};

App = React.createClass({
	render: function() {
		var nav = this.props.urls.nav;
		var footerUrls = this.props.urls.footer;

		return (
			<div id="main">
				<Header urls={nav} />
				<Content />
				<Footer urls={footerUrls} />
			</div>
		);
	}
});

React.render(
	<App urls={urls} />,
	document.getElementById("main")
);
