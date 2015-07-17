'use strict';

var gulp = require('gulp');

var runSequence = require('run-sequence');

gulp.task('default', ['clean'], function () {
  runSequence('assets', 'base', 'app', 'common', 'vendor');
});
