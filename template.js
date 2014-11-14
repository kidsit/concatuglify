/*
 * grunt-init-concatuglify
 * https://gruntjs.com/
 *
 * Copyright (c) 2014 kidsit
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a concat/uglify/jshint build env.';

// Template-specific notes to be displayed before question prompts.
// Template-specific notes to be displayed after question prompts.

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'concatuglify'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('title'),
    init.prompt('description', 'kidsit projects.'),
    init.prompt('version'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url')
  ], function(err, props) {
    // A few additional properties.
    // Files to copy (and process).
    var files = init.filesToCopy(props);
    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);
    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      
      name: props.name,
      // version: props.version,
      description: props.description,
      author: props.author_name,
      devDependencies: {
        "grunt": "^0.4.5",
        "grunt-contrib-clean": "^0.6.0",
        "grunt-contrib-concat": "^0.5.0",
        "grunt-contrib-jshint": "^0.10.0",
        "grunt-contrib-uglify": "^0.6.0",
        "grunt-contrib-watch": "^0.6.1"
      },
    });

    // All done!
    done();
  });

};
