const path = require('path');
module.exports = {
    wfjobName: "wizzi-cli-meta/meta-templates/tfolder-ts-react",
    wfjobPath: path.join(__dirname, '.wizzi-override', 'meta-templates', 'tfolder-ts-react', 'generate.wfjob.ittf'), 
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