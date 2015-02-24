var React = require('React');
var Router = require('../lib/router');

var Welcome = require('./welcome.js');
var StudentForm = require('./studentForm.js');
var StudentList = require('./studentList.js');
var StudentView = require('./studentView.js');

var Content = module.exports = React.createClass({
	// Like a default constructor for
	// mutable properties
	getInitialState: function() {
		return {
			view: {
				path: "/",
				params: null
			},
			user: "admin",
			currentModel: null
		};
	},
	// Before rendering and attaching to
	// the dom, this executes
	componentWillMount: function() {
		this.router = new Router();
		router.on("default", this.goHome);
		router.on("route:addStudent", this.addStudent);
		router.on("route:viewAllStudents", this.viewAll);
		router.on("route:viewStudents", this.viewStudent);
	},
	goHome: function() {
		this.setState({
			view: {
				path: "/",
				params: null
			}
		});
	},
	viewAll: function() {
		this.setState({
			view: {
				path: "/students",
				params: null
			}
		});
	},
	addStudent: function() {
		this.setState({
			view: {
				path: "/students/add",
				params: null
			}
		});
	},
	viewStudent: function(params) {
		this.setState({
			view: {
				path: "/students/:id",
				params: params
			}
		});
	},
	render: function() {
		var view;

		// Process the state of the
		// Content to display the correct
		// view
		switch(this.state.view) {
			case '/students/add'
				view = (
					<StudentForm />
				);
				break;

			case '/students/:id'
				var id = this.state.view.params.id;
				view = (
					<StudentView id={id} />
				);
				break;

			case '/students'
				view = (
					<StudentList />
				);
				break;

			case '/':
			default:
				view = (
					<Welcome user={this.state.user} />
				);
				break;
		}

		return view;
	}
});
