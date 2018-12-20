var gulp = require('gulp')
var bulkSass = require('gulp-sass-bulk-import')
var sass = require('gulp-sass')
var notify  = require('gulp-notify')

gulp.task('sass', function () {
    return gulp.src('src/scss/styles.scss')
        .pipe(bulkSass())
        .pipe(sass({
            outputStyle: 'compressed',
            errLogToConsole: false,
            includePaths: [ 'src/', 'mod/' ],
        }))
        .on('error', function(err) {
            notify().write(err)
            this.emit('end')
        })
        .pipe(gulp.dest('build/css'))
})

gulp.task('watch', function () {
    gulp.watch("src/scss/**/*.scss",["sass"])
})
gulp.task('default', [ 'watch'])
