/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.scripts\.wizzi-override\src\commands\babel.js.ittf
    utc time: Sun, 11 Jun 2023 13:19:30 GMT
*/
'use strict';

const path = require('path');
var file = require('@wizzi/utils').file;
const babel = require('../lib/babel');
const {
    parseExec, 
    transformExec
 } = babel;

module.exports = (args) => {

    return new Promise((resolve, reject) => {
        
            if (args.parse) {
                if (args._[1]) {
                    var source = args._[1];
                    const sourcePath = path.isAbsolute(source) ? source : path.resolve(process.cwd(), source);
                    parseExec({
                        codePath: sourcePath
                     }, (err, result) => {
                    
                        if (result && args.o) {
                            const destPath = path.resolve(process.cwd(), args.o);
                            file.write(destPath, JSON.stringify(result, null, 2))
                        }
                        resolve({
                            success: true, 
                            message: "source parsed"
                         })
                    }
                    )
                }
                else {
                    resolve({
                        success: false, 
                        error: "Missing s (source) parameter"
                     })
                }
            }
            else {
                resolve({
                    success: false, 
                    error: "No valid babel command"
                 })
            }
        }
        );
}
;
