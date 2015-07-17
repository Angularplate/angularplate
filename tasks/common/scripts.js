'use strict';

var JS_DIRECTORY = "/js/";

var config = require('../../configs/build.conf.js');

var args = require('yargs').argv;
var gulp = require('gulp');

var angularFilesort = require('gulp-angular-filesort');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var gulpIf = require('gulp-if');
var iife = require('gulp-iife');
var ngAnnotate = require('gulp-ng-annotate');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('common-scripts', function () {
  var src = config.common.scripts;
  var dest = config.distDir + JS_DIRECTORY;
  var concatFile = 'common.js';

  var productionEnv = (args.production) ? true : false; // ENV VARIABLE

  return gulp.src(src)
    .pipe(plumber())
    .pipe(angularFilesort())
    .pipe(gulpIf(!productionEnv, sourcemaps.init()))
    .pipe(concat(concatFile))
    .pipe(ngAnnotate())
    .pipe(gulpIf(productionEnv, uglify()))
    .pipe(gulpIf(!productionEnv, sourcemaps.write()))
    .pipe(iife({
            useStrict: false,
            trimCode: false,
            prependSemicolon: false
          }))
    .pipe(gulp.dest(dest))
    .pipe(connect.reload());
});
