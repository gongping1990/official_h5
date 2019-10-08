var gulp = require('gulp')
var series = gulp.series
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var reload = browserSync.reload
var px2rem = require('gulp-px2rem-plugin')

sass.compiler = require('node-sass')

// scss编译后的css将注入到浏览器里实现更新
function scss() {
  var plugins = [autoprefixer()]
  return gulp
    .src('assets/scss/*.scss')
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(px2rem({ width_design: 750, pieces: 7.5, ignore_px: [1, 2] }))
    .pipe(gulp.dest('assets/css'))
    .pipe(reload({ stream: true }))
}

function serve() {
  browserSync.init({
    server: './'
  })

  gulp.watch('assets/scss/*.scss', scss)
  gulp.watch('assets/js/*.js').on('change', reload)
  gulp.watch('**/*.html').on('change', reload)
}

exports.default = series(scss, serve)
