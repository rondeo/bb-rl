let gulp = require('gulp');
let ftpHelper = require('./utils/ftpHelper');
let plugins = require('gulp-load-plugins')();

gulp.task('upload', function (done) {
    ftpHelper.setup(plugins);
    ftpHelper.upload({
        username: "moritz",
        password: "Ar76pm&4",
        host: '46.228.205.175',
        port: 21,
        localRoot: 'build',
        remoteRoot: '/rl',
        exclude: ['.git', '.idea', 'tmp/*']
    }, done);
});

gulp.task('uploadDev', function (done) {
    ftpHelper.setup(plugins);
    ftpHelper.upload({
        username: "moritz",
        password: "Ar76pm&4",
        host: '46.228.205.175',
        port: 21,
        localRoot: 'build',
        remoteRoot: '/dev',
        exclude: ['.git', '.idea', 'tmp/*']
    }, done);
});