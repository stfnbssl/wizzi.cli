const path = require('path');
module.exports = {
    wfjobName: "wizzi-cli-job",
    wfjobPath: path.join(__dirname, 'basic', 'index.wfjob.ittf'), 
    plugins: [
        "./wizzi.plugin.js/index.js", 
        "./wizzi.plugin.wzjob/index.js", 
    ], 
    pluginsBaseFolder: "C:/My/wizzi/stfnbssl/wizzi.plugins/packages", 
    globalContext: {
    },
};