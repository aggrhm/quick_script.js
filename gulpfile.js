var gulp = require('gulp');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var filter = require('gulp-filter');

gulp.task('js', function() {

	coffee_filter = filter(['**/*.js.coffee'], {restore: true});

	return gulp.src([
			'src/js/lib/history.min.js',
			'src/js/lib/knockout.js',
			'src/js/lib/knockout.punches.js',
			'src/js/lib/date.js',
			'src/js/lib/store.js',
			'src/js/init.js.coffee',
			'src/js/utils.js.coffee',
			'src/js/helpers.js.coffee',
			'src/js/extensions/init.js.coffee',
			'src/js/extensions/utils.js.coffee',
			'src/js/extensions/bindings.js.coffee',
			'src/js/extensions/extenders.js.coffee',
			'src/js/classes/model.js.coffee',
			'src/js/classes/file_model.js.coffee',
			'src/js/classes/collection.js.coffee',
			'src/js/classes/view_collection.js.coffee',
			'src/js/classes/view.js.coffee',
			'src/js/classes/service.js.coffee',
			'src/js/classes/host.js.coffee',
			'src/js/classes/model_adapter.js.coffee',
			'src/js/classes/local_store.js.coffee',
			'src/js/classes/application.js.coffee'
		])
		.pipe(coffee_filter)
		.pipe(coffee())
		.pipe(coffee_filter.restore)
		.pipe(concat('quick_script.js'))
		.pipe(gulp.dest('dist/js/'))
});

gulp.task('build', gulp.series('js'));

gulp.task('default', gulp.series('build'));

gulp.task('watch', function() {
	gulp.watch('src/js/**/*', gulp.series('js'));
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
