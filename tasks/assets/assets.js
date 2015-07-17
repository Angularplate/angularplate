'use strict';

var gulp = require('gulp');

var runSequence = require('run-sequence');

gulp.task('assets', function () {
  runSequence(['assets-images']);
});
