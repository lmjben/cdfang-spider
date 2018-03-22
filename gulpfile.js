var gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
	gulp.src('./*.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest('./dist'))
);

var watcher = gulp.watch('*.js', ['default']);