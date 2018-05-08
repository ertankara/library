const gulp = require('gulp');
const browsersync = require('browser-sync').create();



gulp.task('serve', function() {
  browsersync.init({
    server: {
      baseDir: './'
    }
  });
});




gulp.task('print-name', function() {
  console.log('Hello worldss');
});



gulp.task('default', ['serve']);




gulp.watch(['js/**/*.js', 'index.html', 'css/**/*.css'], ['print-name']);

