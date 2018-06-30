let gulp = require('gulp');
let ftpHelper = require('./utils/ftpHelper');

gulp.task('upload', function () {
    let conn = ftpHelper.getConn({
        path: 'web2/web'
    });
    gulp.src('build/**', { base: '.', buffer: false } )
        .pipe(conn);
});

gulp.task('uploadDev', function (done) {
    let conn = ftpHelper.getConn({
        path: 'web4/web'
    });
    gulp.src('build/**', { base: '.', buffer: false } )
        .pipe(conn);
});