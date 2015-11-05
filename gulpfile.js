var gulp = require('gulp');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var filter = require('gulp-filter');

gulp.task('default', ['build']);

gulp.task('build', ['js']);

gulp.task('js', function() {

	coffee_filter = filter(['**/*.js.coffee'], {restore: true});

	return gulp.src([
			'src/js/lib/history.min.js',
			'src/js/lib/knockout.js',
			'src/js/lib/knockout.punches.js',
			'src/js/lib/date.js',
			'src/js/lib/store.js',
			'src/js/core.js.coffee',
			'src/js/classes.js.coffee',
			'src/js/framework.js.coffee',
			'src/js/ko_bindings.js.coffee'
		])
		.pipe(coffee_filter)
		.pipe(coffee())
		.pipe(coffee_filter.restore)
		.pipe(concat('quick_script.js'))
		.pipe(gulp.dest('dist/js/'))
});

gulp.task('watch', function() {
	gulp.watch('src/js/**/*', ['js']);
});

//= require ./history.min
//= require ./knockout
//= require ./knockout.punches
//= require ./date
//= require ./store.min
//= require ./quick_script/core
//= require ./quick_script/classes
//= require ./quick_script/framework
//= require ./quick_script/ko_bindings
