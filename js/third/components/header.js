var React = require('React');
var LinkBar = require("./linkbar.js");

var Jumbotron = require("react-bootstrap").Jumbotron;

var Header = module.exports = React.createClass({
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
			<div className="header">
				<LinkBar fixedTop={true} title={"OpenDojo"}>
					{links}
				</LinkBar>
				<Jumbotron>
					<h1>Nariyuki Reactjs Demo</h1>
				</Jumbotron>
			</div>
		);
	}
});
