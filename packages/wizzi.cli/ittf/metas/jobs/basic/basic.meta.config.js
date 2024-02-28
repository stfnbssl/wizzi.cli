const path = require('path');

module.exports = {
    meta: "basic-meta", 
    metaCtxPath: path.join(__dirname, 'ittf', 'basic.json.ittf'), 
    destPath: path.join(__dirname, 'output'), 
    plugins: [
        /*"./wizzi.plugin.html/index", 
        "./wizzi.plugin.js/index", 
        "./wizzi.plugin.css/index",*/
        "./wizzi.plugin.ittf/index", 
        "./wizzi.plugin.json/index"
    ], 
    pluginsBaseFolder: "C:/My/wizzi/stfnbssl/wizzi.plugins/packages", 
    metaPlugins: [
        "./wizzi.meta.wizzi/index"
    ], 
    metaPluginsBaseFolder: "C:/My/wizzi/stfnbssl/wizzi.metas/packages", 
    globalContext: {
    }
 };
