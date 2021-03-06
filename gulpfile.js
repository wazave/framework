const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const cleanCSS    = require('gulp-clean-css');

gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: './'
    });
    gulp.watch(['./components/*.scss', './base/*.scss', './*.scss'], ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src(['./components/*.scss', './base/*.scss', './*.scss'])
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);