var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    livereload = require('gulp-livereload'),
    shell = require('gulp-shell');

gulp.task('less', function() {
    gulp.src('./less/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./static/css'));
});

gulp.task("php", function() {
    gulp.src('')
        .pipe(shell(
            [
                "php -S localhost:5000"
            ])); 
});


gulp.task("reload", function () {
    var server = livereload();

    gulp.watch(['static/**']).on('change', function(file) {
        server.changed(file.path);
    });
});


gulp.task("watch", function() {
    var watcher = gulp.watch('./less/*.less', ['less']);
    watcher.on('change', function (event) {
        console.log('File '+event.path+' was '+event.type+', running tasks...');
    });
});

gulp.task('default',["php", "reload", "watch"]);
