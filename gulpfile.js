var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

function autoprefix() {
  return gulp.src('css/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
}

gulp.task('styles', autoprefix);

gulp.task('watch', function() {
  gulp.watch('css/stylesheet.css', autoprefix);
})