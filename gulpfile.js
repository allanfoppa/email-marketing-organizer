var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

var paths = {
  views: {
    src: './*.html',
  },
  styles: {
    src: 'assets/styles/*.css'
  },
  scripts: {
    src: 'assets/scripts/*.js'
  },
  json: {
    src: 'template-list.json'
  }
};

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(browserSync.stream());
}

function views() {
  return gulp.src(paths.views.src)
    .pipe(browserSync.stream());
}

function json() {
  return gulp.src(paths.json.src)
    .pipe(browserSync.stream());
}

function watch() {

  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.views.src, views);
  gulp.watch(paths.json.src, json);
}


var build = gulp.series(gulp.parallel(styles, scripts, views, json));

exports.styles = styles;
exports.scripts = scripts;
exports.views = views;
exports.json = json;
exports.watch = watch;
exports.build = build;

exports.default = build;