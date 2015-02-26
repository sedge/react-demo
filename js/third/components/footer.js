var React = require('React');
var LinkBar = require("./linkbar.js");

var Footer = module.exports = React.createClass({
	render: function() {
		var id = 0;

		var urls = this.props.urls;
		var linkText = Object.keys(this.props.urls);

		var links = linkText.map(function(linkText) {
			return (
				<LinkBar.Link url={urls[linkText]} key={id++}>
					{linkText}
				</LinkBar.Link>
			);
		});

		return (
			<div className="footer">
				<LinkBar fixedBottom={true} title={"Copyright OpenDojo 2015"}>
					{links}
				</LinkBar>
			</div>
		);
	}
});
