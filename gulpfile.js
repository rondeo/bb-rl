let gulp = require('gulp');
let ftpHelper = require('./utils/ftpHelper');

gulp.task('upload', function () {
    let conn = ftpHelper.getConn({
        path: 'web/battleground-bulls.de'
    });
    gulp.src('build/**')
        .pipe(conn);
});

gulp.task('uploadDev', function () {
    let conn = ftpHelper.getConn({
        path: 'web/dev.battleground-bulls.de'
    });
    gulp.src('build/**')
        .pipe(conn);
});
