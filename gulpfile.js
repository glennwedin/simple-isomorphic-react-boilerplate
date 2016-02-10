var browserify = require('browserify'),
	babelify = require('babelify'),
	gulp = require('gulp'),
	source = require('vinyl-source-stream');


gulp.task('default', function () {
    return browserify({
    		entries: './src/client.js',
    		debug: true
    	})
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('./app.js'))
        .pipe(gulp.dest('./public/js'));
});