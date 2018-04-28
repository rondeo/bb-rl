let FtpDeploy = require('ftp-deploy');
let plugins = require('gulp-load-plugins')();
let pad = require('./pad');

let ftpHelper = {
    ftpDeploy: null,
    plugins: null,
    setup: function (plugins) {
        ftpDeploy = new FtpDeploy();
        ftpHelper.plugins = plugins;
        let errorCallback = function (data) {
            plugins.util.log('> ' + data.err);
        };
        let updateCallback = function (data) {
            plugins.util.log('> ' + pad(data.percentComplete, 2) + '%', data.filename);
        };
        ftpDeploy.on('uploading', updateCallback);
        ftpDeploy.on('uploaded', updateCallback);
        ftpDeploy.on('upload-error', errorCallback);
        return ftpDeploy;
    },
    upload: function (config, done) {
        try {
            ftpDeploy.deploy(config, function (err) {
                if (err) {
                    plugins.util.log(err);
                }
                done();
            });
        } catch (ex) {
            plugins.util.log(ex);
            done();
        }
    }
};
module.exports = ftpHelper;