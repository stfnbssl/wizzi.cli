/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: @wizzi/plugin.js@0.8.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\src\utils\filemod.js.ittf
    utc time: Fri, 24 May 2024 18:26:48 GMT
*/
'use strict';
const path = require('path');
const util = require('util');
const fs = require('fs');
const saveFile = fs.writeFileSync;
module.exports = {
    deleteTypeModuleFromPackageJson: function(pkgJsonPath) {
        try {
            const json = require(pkgJsonPath);
        } 
        catch (ex) {
            console.log("[31m%s[0m", 'filemod.deleteTypeModuleFromPackageJson', ex);
            return ;
        } 
        if (!json.hasOwnProperty('type')) {
            return ;
        }
        delete json.type
        saveFile(pkgJsonPath, JSON.stringify(json, null, 2))
    }
 };
