const gulp = require('gulp'); // Include library
const autoprefixer = require('gulp-autoprefixer'); // Include Plugins

gulp.task('styles', function () {
  return gulp.src('style.css').pipe(autoprefixer()).pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
  return gulp.watch('style.css'), ['styles'];
});
