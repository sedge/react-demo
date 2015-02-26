var React = require('React');
var models = require('../bin/model');
var router = require('../bin/router');

var newId = models.UUID();

var ReactBootstrap = require('react-bootstrap');
var Input = ReactBootstrap.Input;

var StudentForm = module.exports = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();

		var emails = this.refs.emails.getValue().trim().split(',').map(function(email){
			return email.trim();
		});

		models.addStudent({
			firstName: this.refs.firstName.getValue().trim(),
			lastName: this.refs.lastName.getValue().trim(),
			rank: this.refs.rank.getValue().trim(),
			emails: emails
		});

		router.navigate('students');
	},
	render: function() {
		return (
			<form>
				<h2> Enter new student information:</h2>
				<input label="First Name" type="text" ref="firstName" placeholder="e.g. Bob" />
				<input label="Last Name" type="text" ref="lastName" placeholder="e.g. Smith" />
				<input label="Rank" type="text" ref="rank" placeholder="(colour)" />
				<input label="Emails" type="text" ref="emails" placeholder="(comma delimited)" />
				<input type="submit" value="Save" onclick={this.handleSubmit} />
			</form>
		);
	}
});
