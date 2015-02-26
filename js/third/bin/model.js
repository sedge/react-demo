// This file is a simple temporary data store that
// initializes a few models and provides a bare
// minimum of methods to manipulate them. It does
// no validation.

var students = [];
var id = 0;

function UUID() {
	return ++id;
}

function addStudent(data) {
	data.id = UUID();

	students.push(data);
}

function getStudentById(id) {
	var student;

	students.forEach(function(s) {
		if (s.id == id) {
			student = s;
		}
	});

	return student;
}

function getAllStudents() {
	return students;
}

// We add some sample data
addStudent({
	firstName: "Kieran",
	lastName: "Sedgwick",
	rank: "Black-belt",
	emails: [
		'ksedgwick@myseneca.ca',
		'kieran.sedgwick@gmail.com'
	]
});
addStudent({
	firstName: "Alina",
	lastName: "Shtramwasser",
	rank: "Kitty-belt",
	emails: [
		'ashtramwasser@myseneca.ca'
	]
});
addStudent({
	firstName: "Yoav",
	lastName: "Gurevich",
	rank: "Smoke-belt",
	emails: [
		'ygureivich@myseneca.ca',
		'verandunus@gmail.com'
	]
});
addStudent({
	firstName: "Chris",
	lastName: "Choi",
	rank: "?????",
	emails: [
		'ssduk2121@gmail.com',
		'chris@myseneca.ca'
	]
});

// We expose all of the methods
module.exports = {
	UUID: UUID,
	addStudent: addStudent,
	getStudentById: getStudentById,
	getAllStudents: getAllStudents
};