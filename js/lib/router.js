var Router = require("backbone").Router;

var AppRouter = module.exports = Router.extend({
	routes: {
		"students": "students",
		"students/add": "addStudent",
		"*splat": "default"
	}
});
