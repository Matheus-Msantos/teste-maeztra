const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
var ghPages = require('gulp-gh-pages');

sass.compiler = require('node-sass');

gulp.task('compilar-scss', function () {
  return gulp.src(['src/scss/index.scss'])
    .pipe(sass().on('Erro', function (err) {
      console.log(err);
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('monitorar', function () {
  gulp.watch(['src/scss/*.scss'], gulp.series('compilar-scss'));
});

gulp.task('default', gulp.series(['compilar-scss', 'monitorar']));

