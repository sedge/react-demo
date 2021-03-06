var React = require('React');
var models = require('../bin/model');

var newId = models.UUID();

var Input = require('./input');

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

		this.props.router.navigate('students', {trigger: true});
	},
	render: function() {
		return (
			<div className="addStudent container">
				<form>
					<h2> Enter new student information:</h2>
					<Input label="First Name" type="text" ref="firstName" name="firstName" placeholder="e.g. Bob" />
					<Input label="Last Name" type="text" ref="lastName" name="lastName" placeholder="e.g. Smith" />
					<Input label="Rank" type="text" ref="rank" name="rank" placeholder="(colour)" />
					<Input label="Emails" type="text" ref="emails" name="emails" placeholder="(comma delimited)" />
					<input type="submit" value="Save" onClick={this.handleSubmit} />
				</form>
			</div>
		);
	}
});
