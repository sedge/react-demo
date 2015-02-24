var React = require('React');
var Models = require('../bin/model');

var StudentView = module.exports = React.createClass({
	render: function() {
		var content;
		var student = models.getStudentById(this.props.id);

		if (!student) {
			view = (
				<p>
					The student associated with {this.props.id} does not exist.
				</p>
			);
		} else {
			var emails = "";

			student.emails.forEach(function(email) {
				emails += email + " ";
			});

			view = (
				<table>
					<tr>
						<th>Student Name</th>
						<th>Student Id</th>
						<th>Student Rank</th>
						<th>Student Emails</th>
					</tr>
					<tr>
						<td>{student.firstName + "" + student.lastName}</td>
						<td>{student.id}</td>
						<td>{student.rank}</td>
						<td>{emails}</td>
					</tr>
				</table>
			);
		}

		return (
			<div className="studentView">
				{view}
			</div>
		);
	}
});
