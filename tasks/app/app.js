'use strict';

var gulp = require('gulp');

var runSequence = require('run-sequence').use(gulp);

gulp.task('app', function () {
  runSequence(['app-scripts', 'app-styles', 'app-views']);
});
