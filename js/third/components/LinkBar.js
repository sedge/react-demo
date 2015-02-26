var React = require("react");
var ReactBootstrap = require("react-bootstrap");

var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;

var LinkBar = module.exports = React.createClass({
	render: function() {
		var classes = {
			brand: this.props.title,
			fixedTop: this.props.fixedTop,
			fixedBottom: this.props.fixedBottom,
			fluid: true
		};

		return (
			<div className="container">
				<Navbar {...classes}>
					<Nav>
						{this.props.children}
					</Nav>
				</Navbar>
			</div>
		);
	}
})

LinkBar.Link = React.createClass({
	render: function() {
		return (
			<NavItem href={"#" + this.props.url}>
				{this.props.children}
			</NavItem>
		);
	}
});