const sftp = require('gulp-sftp');

let ftpHelper = {
    ftpDeploy: null,
    plugins: null,
    getConn: function (config) {
        return sftp({
            host: "85.10.207.134",
            user: "web",
            port: "22",
            remotePath: config.path,
            key: "C:/Users/MORITZ-DESKTOP/.ssh/id_rsa_openssh",
            passphrase: "fifa00:11momo"
        });
    }
};
module.exports = ftpHelper;