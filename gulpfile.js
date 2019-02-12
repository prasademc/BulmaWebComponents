const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

gulp.task('default', () =>
	gulp.src('src/**/*.scss')
		.pipe(sass())
		.pipe(rename({ extname: '.css' }))
		.pipe(gulp.dest('src/'))
)