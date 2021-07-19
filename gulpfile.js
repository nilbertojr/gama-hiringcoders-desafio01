/**
 * Gulpfile
 * @author Nil Junior <nil.junior@agencianidi.com.br>
 */
 'use strict';

 const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-clean-css');


const FOLDER = "./src/";
const CSSPATH = FOLDER + '/css/';
const SASSPATH = FOLDER + 'assets/sass/';
const JSPATH = FOLDER + '/js/';
const IMGPATH = FOLDER + 'assets/images/';

gulp.task('sass', function() {

    return gulp.src(SASSPATH + 'general_styles.scss')
         .pipe(sass({
             errLogToConsole: true
         }))
         .on('error', sass.logError)
         .pipe(concat('style.css'))
         .pipe(autoprefixer())
         .pipe(minifyCSS())
         .pipe(gulp.dest(CSSPATH));
 });

 gulp.task('watch', function()  {
    gulp.watch(SASSPATH + '**/*', gulp.parallel('sass'));

});