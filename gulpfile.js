
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

gulp.task('minify', function() {
  //the default
  return gulp.src('src/views/js/main.js')
         .pipe(uglify())
         .pipe(gulp.dest('dist/views/js/'))

});

gulp.task('minify-css',function(){
  return gulp.src('src/views/css/*.css')
         .pipe(cleanCSS({compatibility: 'ie8'}))
         .pipe(gulp.dest('dist/views/css'))
})
