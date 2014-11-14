module.exports = function (grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		uglify: {
			options: {
				mangle: true,
				compress: true,
				sourceMap: "dist/app.map",
				banner: "/* copyright <%= pkg.author %> | <%= pkg.license %> " + 
				        " @<%= grunt.template.today('yyyy-mm-dd') %> */"
			},
			production: {
				src: "dest/appall.concat.js",
				dest: "dist/appall.min.js"
			},
			dev: {
				src: "dest/appall.dev.concat.js",
				dest: "dist/appall.dev.min.js"
			}
		},
		jshint: {
			options: {
				eqeqeq: true,
				curly: true,
				undef: true,
				unused: true
			},
			target: {
				src: "src/*.js"
			}
		},
		concat: {
			options: {
				seperator: ";",
				banner: "/*kidsit concat*/\n"
			},
			production: {
				src: ["src/app.js","src/util.js"],
				dest: "dest/appall.concat.js"
			},
			dev: {
				src: ["src/app.js","src/util.js"],
				dest: "dest/appall.dev.concat.js"
			},
		},
		watch: {
			scripts: {
				files: ['src/*.js'],
				tasks: ['jshint']
			}
		},
		clean: {
			target: ['dist','dest']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask("default",['jshint','concat','uglify']);
	grunt.registerTask("rebuild",['clean','default']);
};