var Router = require("backbone").Router;

var AppRouter = module.exports = Router.extend({
	routes: {
		"students": "viewAllStudents",
		"students/add": "addStudent",
		"students/:id": "viewStudent",
		"*splat": "default"
	}
});
