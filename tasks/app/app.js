'use strict';

var gulp = require('gulp');

var runSequence = require('run-sequence');

gulp.task('app', function () {
  runSequence(['app-scripts', 'app-styles', 'app-views']);
});
