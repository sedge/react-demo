var React = require('React');

var Header = require('./components/header');
var Content = require('./components/content');
var Footer = require('./components/footer');

var urls = {
	nav: {
		"Welcome Page": "",
		"Add a Student": "students/add",
		"View all Students": "students"
	},
	footer: {
		"Privacy Policy": "privacy",
		"About us": "about"
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
