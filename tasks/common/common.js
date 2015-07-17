'use strict';

var gulp = require('gulp');

var runSequence = require('run-sequence');

gulp.task('common', function () {
  runSequence(['common-scripts', 'common-styles', 'common-views']);
});
