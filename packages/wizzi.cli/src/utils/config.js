/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\src\utils\config.js.ittf
    utc time: Fri, 19 May 2023 18:19:06 GMT
*/
'use strict';
const path = require('path');
const util = require('util');
const fs = require('fs');
module.exports = {
    getPath: (name, isMeta) => {
    
        var configFilename;
        if (isMeta) {
            configFilename = name ? 'wizzi.meta.config.' + name + '.js' : 'wizzi.meta.config.js';
        }
        else {
            configFilename = name ? 'wizzi.config.' + name + '.js' : 'wizzi.config.js';
        }
        let currentDir = process.cwd();
        let currentPath = null;
        let configPath = null;
        // loog 'searching ', configFilename
        while (configPath == null && currentDir.length > 3) {
            currentPath = path.join(currentDir, configFilename);
            try {
                // loog 'wizzi-cli.generate.searching', currentPath
                const stat = fs.lstatSync(currentPath);
                if (stat.isFile()) {
                    configPath = currentPath;
                }
            } 
            catch (ex) {
            } 
            currentDir = path.dirname(currentDir);
        }
        console.log('Found config path', configPath);
        return configPath;
    }
    
 };
