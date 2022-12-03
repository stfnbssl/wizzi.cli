/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:/My/wizzi/stfnbssl/wizzi/packages/wizzi-cli/resources/create/templates/__temp/ts-node/wizzi.cli.hub/wizzi.config.js.ittf
    utc time: Sat, 03 Dec 2022 08:27:13 GMT
*/
'use strict';
const path = require('path');
module.exports = {
    wfjobName: "wizzi.cli.hub/job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: __dirname, 
    plugins: [
        './wizzi-core/index.js', 
        './wizzi-js/index.js', 
        './wizzi-web/index.js'
    ], 
    pluginsBaseFolder: "C:/My/wizzi/stfnbssl/wizzi/packages", 
    schemas: [
        
    ], 
    globalContext: {
        wzConfigIsDevelopment: true
     }
 };
