const path = require('path');
module.exports = {
    wfjobName: "wizzi-cli-job",
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    plugins: [
        'C:/My/wizzi/stfnbssl/wizzi/packages/wizzi-core/index.js', 
        'C:/My/wizzi/stfnbssl/wizzi/packages/wizzi-js/index.js', 
        'C:/My/wizzi/stfnbssl/wizzi/packages/wizzi-web/index.js', 
    ], 
    pluginsBaseFolder: path.join(__dirname, '..'),
    globalContext: {
        isPackageDeploy: false,
        wzConfigIsDevelopment: true,
    },
};