var React = require('React');
var Models = require('../bin/model');

var StudentView = module.exports = React.createClass({
	render: function() {
		var content;
		var students = models.getAllStudents();

		if (!students) {
			view = (
				<p>
					There are no students in the database!
				</p>
			);
		} else {
			var studentRows;
			var key = 0;

			students.map(function(student) {
				var emails = "";
				student.emails.forEach(function(email) {
					emails += email + " ";
				});

				return (
					<tr key={key++}>
						<td>{student.firstName + "" + student.lastName}</td>
						<td>{student.id}</td>
						<td>{student.rank}</td>
						<td>{emails}</td>
						<td><a href={"#/students/" + student.id}>View</a></td>
					</tr>
				);
			});

			view = (
				<table>
					<tr>
						<th>Students</th>
						<th><a href="#/students/add">Add new student</a></th>
					</tr>
					<tr>
						<th>Student Name</th>
						<th>Student Id</th>
						<th>Student Rank</th>
						<th>Student Emails</th>
						<th></th>
					</tr>
					{studentRows}
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
