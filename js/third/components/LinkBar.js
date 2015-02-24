var React = require("react");

var LinkBar = module.exports = React.createClass({
	render: function() {
		return (
			<ul className="linkbar">
				{this.props.children}
			</ul>
		);
	}
})

LinkBar.Link = React.createClass({
	render: function() {
		return (
			<li>
				<a href={"#" + this.props.url}>
					{this.props.children}
				</a>
			</li>
		);
	}
});