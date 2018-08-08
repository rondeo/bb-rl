let gulp = require('gulp');
let ftpHelper = require('./utils/ftpHelper');

gulp.task('upload', function () {
    let conn = ftpHelper.getConn({
        path: 'clients/client0/web2/web'
    });
    gulp.src('build/**')
        .pipe(conn);
});

gulp.task('uploadDev', function () {
    let conn = ftpHelper.getConn({
        path: 'clients/client0/web4/web'
    });
    gulp.src('build/**')
        .pipe(conn);
});