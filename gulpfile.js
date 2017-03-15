'use strict'

let gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps')

gulp.task('build:sass', () => {

    return gulp.src('src/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('docs/css'))
})

gulp.task('build:scripts', () => {

    return gulp.src('src/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('docs/js'))
})

gulp.task('build', ['build:sass', 'build:scripts'])

gulp.task('connect', () => {

    connect.server({ root: 'docs' })
})

gulp.task('default', ['build', 'connect'])