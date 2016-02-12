var browserify = require('browserify'),
	babelify = require('babelify'),
	gulp = require('gulp'),
    uglify = require('gulp-uglify'),
	source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');


gulp.task('default', function () {
    return browserify({
    		entries: './src/client.js',
    		debug: true
    	})
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('./app.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
});