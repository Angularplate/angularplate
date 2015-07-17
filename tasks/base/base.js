'use strict';

var gulp = require('gulp');

var runSequence = require('run-sequence').use(gulp);

gulp.task('base', function () {
  runSequence(['base-scripts', 'base-styles', 'base-views']);
});
