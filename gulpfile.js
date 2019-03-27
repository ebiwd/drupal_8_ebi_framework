var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/ebi_framework.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

// Run drush to clear the theme registry
gulp.task('drush', function() {
  return gulp.src('', {
      read: false
    })
    .pipe($.shell([
      'drush cr -y',
    ]))
    .pipe($.notify({
      title: "Caches cleared",
      message: "Drupal caches cleared.",
      onLast: true
    }));
});

gulp.task('default', ['sass', 'drush'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass', 'drush']);
  gulp.watch("templates/*.twig", ['drush']);
  gulp.watch("**/*.yml", ['drush']);
  gulp.watch("**/*.theme", ['drush']);
  gulp.watch("src/*.php", ['drush']);
});
