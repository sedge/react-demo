var React = require('React');
var models = require('../bin/model');

var ReactBootstrap = require('react-bootstrap');
var Alert = ReactBootstrap.Alert;
var Table = ReactBootstrap.Table;

var StudentList = module.exports = React.createClass({
	render: function() {
		var content;
		var students = models.getAllStudents();

		if (!students) {
			view = (
				<Alert bsStyle="danger">
					There are no students in the database!
				</Alert>
			);
		} else {
			var studentRows;
			var key = 0;

			studentRows = students.map(function(student) { console.log("stu: ", student)
				var emails = "";
				student.emails.forEach(function(email) {
					emails += email + " ";
				});

				return (
					<tr key={key++}>
						<td>{student.id}</td>
						<td>{student.firstName + " " + student.lastName}</td>
						<td>{student.rank}</td>
						<td><a href={"#/students/" + student.id}>View</a></td>
					</tr>
				);
			});

			view = (
				<Table bordered={true} striped={true}>
					<thead>
						<th>#</th>
						<th>Student Name</th>
						<th>Student Rank</th>
						<th><a href="#/students/add">Add new student</a></th>
					</thead>
					<tbody>
						{studentRows}
					</tbody>
				</Table>
			);
		}

		return (
			<div className="studentView container">
				{view}
			</div>
		);
	}
});
