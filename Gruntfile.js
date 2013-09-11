module.exports = function (grunt) {
	"use strict";

	var path = require("path");

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-clean");

	// Project configuration.
	grunt.initConfig({
		nodeunit: {
			files: [
				path.join("test", "**", "*.js")
			]
		},
		clean: ["build"],
		watch: {
			files: "<%= jshint.files %>",
			tasks: "default"
		},
		jshint: {
			options: grunt.file.readJSON(".jshintrc"),
			files: [
				path.join("Gruntfile.js"),
				path.join("tasks", "**", "*.js"),
				path.join("test", "**", "*.js")
			]
		},
		modernizr: {
			dist: {}
		}
	});

	// Load local tasks.
	grunt.loadTasks("tasks");

	// Default task.
	grunt.registerTask("default", [
		"jshint"
	]);

};
