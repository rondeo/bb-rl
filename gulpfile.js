let gulp = require('gulp');
let ftpHelper = require('./utils/ftpHelper');

gulp.task('upload', function () {
    let conn = ftpHelper.getConn({
        path: 'web2/web'
    });
    gulp.src('build/**')
        .pipe(conn);
});

gulp.task('uploadDev', function () {
    let conn = ftpHelper.getConn({
        path: 'web4/web'
    });
    gulp.src('build/**')
        .pipe(conn);
});