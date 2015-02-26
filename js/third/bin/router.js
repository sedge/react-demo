var Backbone = require("backbone");
var $ = require("jquery");

// Backbone's Router needs jquery, but
// the Backbone npm package doesn't include it
var Router = Backbone.Router;
Backbone.$ = $;

var AppRouter = Router.extend({
	routes: {
		"students": "viewAllStudents",
		"students/add": "addStudent",
		"students/:id": "viewStudent",
		"*splat": "default"
	}
});

module.exports = AppRouter;