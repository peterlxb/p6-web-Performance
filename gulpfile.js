
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('minify', function() {
  //the default
  return gulp.src('src/views/js/main.js')
         .pipe(uglify())
         .pipe(gulp.dest('Test-folder'))

});
