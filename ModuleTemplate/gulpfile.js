var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var glob = require('glob');

gulp.task('browserify', ['clean'], function () {
    var modules = glob.sync('./Modules/*.js');

    //ToDo: Hook in logic for debug/productions
    //Options:
    //1. Have logic in the scripts "partial"
    //2. Idenfity here and tailor output
    gulp.src(['Modules/*.js'])
        .pipe(
            browserify({
                entries: modules,
                basedir: './',
                debug: false,
                paths: ['./Modules']
            }))
        .pipe(rename('bundle.js'))
        //.pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function () {
    return del(['build/*.js']);
});

gulp.task('scripts', function () {

    return gulp.src(config.src)
      .pipe(uglify())
      .pipe(concat('all.min.js'))
      .pipe(gulp.dest('/Modules/'));
});

gulp.task('default', ['scripts'], function () { });