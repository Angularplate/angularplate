'use strict';

var config = require('../configs/build.conf.js');

var gulp = require('gulp');

var connect = require('gulp-connect');
var modRewrite = require('connect-modrewrite'); // Rewrite middle for express servers

gulp.task('connect', function () {
  connect.server({
    root: config.distDir,
    port: 9000,
    livereload: true,
    middleware: function (connect, opt) {
      return [
        modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png$ /index.html [L]']) // Rewrite rule
      ];
    }
  });
});
