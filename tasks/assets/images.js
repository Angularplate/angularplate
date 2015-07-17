'use strict';

var IMAGE_DIRECTORY = "/assets/img";

var config = require('../../configs/build.conf.js');

var gulp = require('gulp');

var changed = require('gulp-changed');
var connect = require('gulp-connect');
var imagemin = require('gulp-imagemin');

gulp.task('assets-images', function () {
  var src = config.assets.images;
  var dest = config.distDir + IMAGE_DIRECTORY;

  return gulp.src(src)
    .pipe(changed(dest))
    .pipe(imagemin(src))
    .pipe(gulp.dest(dest))
    .pipe(connect.reload());
});
