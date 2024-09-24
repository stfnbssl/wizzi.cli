const path = require('path');
module.exports = {
    wzjobName: "wizzi-cli-job",
    wzjobPath: path.join(__dirname, 'basic', 'index.wzjob.ittf'), 
    plugins: [
        "./wizzi.plugin.js/index.js", 
        "./wizzi.plugin.wzjob/index.js", 
    ], 
    pluginsBaseFolder: "C:/My/wizzi/stfnbssl/wizzi.plugins/packages", 
    globalContext: {
    },
};