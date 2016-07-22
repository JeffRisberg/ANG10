var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gulpDocs = require('gulp-ngdocs');
var karma = require('karma').server;

gulp.task('lint', function () {
    var errorsOnly = true;

    return gulp.src(['app/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default', errorsOnly));
});

gulp.task('ngdocs', [], function () {
    return gulp.src(['app/js/**/*.js'])
        .pipe(gulpDocs.process())
        .pipe(gulp.dest('./docs'));
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js'
    }, done);
});

gulp.task('default', ['test']);
