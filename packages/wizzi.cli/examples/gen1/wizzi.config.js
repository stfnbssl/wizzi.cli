const path = require('path');
module.exports = {
    wfjobName: "example-gen1-job", 
    wfjobPath: path.join(__dirname, '_wizzi', 'generate.wfjob.ittf'), 
    destPath: path.join(__dirname, 'dist'),
    plugins: [
        "./wizzi.plugin.html/index.js", 
        "./wizzi.plugin.wzjob/index.js", 
        "./wizzi.plugin.wzschema/index.js", 
    ], 
    pluginsBaseFolder: "C:/My/wizzi/stfnbssl/wizzi.plugins/packages", 
    schemas: [
    ],
    globalContext: {
        isPackageDeploy: true,
        isDevelopment: false,
    },
};
