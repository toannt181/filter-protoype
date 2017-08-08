var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () => {
    console.log('Compiling CSS');

    gulp.src('src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/css/'));
});


gulp.task('default',() => {
    gulp.watch('src/*.scss',['styles']);
});

