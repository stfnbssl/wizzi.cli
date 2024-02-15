/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.scripts\.wizzi-override\src\commands\pandoc.js.ittf
    utc time: Sun, 28 Jan 2024 19:38:08 GMT
*/
'use strict';

const path = require('path');
const pandoc = require('../lib/pandoc');
const {
    executePandoc, 
    toNativeJsonFolder, 
    toNativeJson
 } = pandoc;

module.exports = (args) => {

    return new Promise((resolve, reject) => {
        
            if (args.s || args.scan) {
                if (args.f || args.folder) {
                    resolve(toNativeJsonFolder(args._[1], args.o || args.output))
                }
                else {
                    resolve(toNativeJson(args._[1]))
                }
            }
            else {
                resolve({
                    success: false, 
                    error: "No valid pandoc command"
                 })
            }
        }
        );
}
;
