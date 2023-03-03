/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.meta\.wizzi-override\src\cmds\createEx.js.ittf
*/
'use strict';
const path = require('path');
const wizzi = require('wizzi');
const wizziUtils = require('wizzi-utils');
const verify = wizziUtils.verify;
const vfile = wizziUtils.vfile;
const templator = require('./templator');
var file = vfile();
var generators = [
    'ts-node', 
    'ts-express', 
    'ts-client', 
    'js-wizzi-plugin'
];
module.exports = (options) => {

    options = options || {};
    if (generators.indexOf(options.templator) < 0) {
        throw new Error('createEx. Unknown templator: ' + options.templator);
    }
    console.log('createEx.options', options, __filename);
    var templatorFolderPath = path.join(__dirname, '..', '..', 'generators', options.templator);
    var templatorContextPath = path.join(templatorFolderPath, 'contexts', options.context + '.json.ittf');
    console.log('templatorContextPath', templatorContextPath, __filename);
    var templatorIndex = path.join(templatorFolderPath, 'index.ittf.ittf');
    console.log('templatorIndex', templatorIndex, __filename);
    var tempTemplate = path.join(__dirname, '..', '..', 'resources', 'create', 'templates', '__temp', options.templator, options.context);
    console.log('tempTemplate', tempTemplate, __filename);
    wizzi.model(path.join(templatorContextPath), {
        cliCtx: {
            pkgName: options.pkgName, 
            description: options.pkgName
         }
     }, (err, cliCtx) => {
    
        if (err) {
            console.log("[31m%s[0m", 'createEx.load context.error:', err);
            return ;
        }
        console.log('createEx.cliCtx', cliCtx, __filename);
        templator(templatorIndex, tempTemplate, cliCtx)
        
        console.log('createEx.before genFolder.cliCtx', cliCtx, __filename);
        
        return wizzi.genFolder(tempTemplate, {
                cliCtx: cliCtx
             }, {
                destFolder: options.destPath ? options.destPath : path.join('C:/My/wizzi/stfnbssl/wizzi.meta.demos/packages', options.pkgName), 
                copyInclude: ['*'], 
                copyExclude: []
             }, (err, genFolderResult) => {
            
                if (err) {
                    console.log("[31m%s[0m", 'err', err);
                    throw new Error(err.message);
                }
                console.log('genFolderResult', genFolderResult, __filename);
                return ;
            }
            );
    }
    )
}
;
