/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi-cli\.wizzi\cmds\templify.js.ittf
*/
'use strict';
const path = require('path');
const wizziUtils = require('wizzi-utils');
const vfile = wizziUtils.vfile;
const verify = wizziUtils.verify;
var file = vfile();
module.exports = (sourceFolder, outputPath) => {

    console.log('sourceFolder', sourceFolder, __filename);
    console.log('outputPath', outputPath, __filename);
    file.getFiles(sourceFolder, {
        deep: true, 
        documentContent: true
     }, function(err, files) {
        if (err) {
            console.log("[31m%s[0m", 'Test error >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
            console.log("[31m%s[0m", 'err', err);
            throw new Error(err.message);
        }
        // log 'files', files
        var sb = [
            'template ' + path.basename(sourceFolder)
        ];
        var i, i_items=files, i_len=files.length, item;
        for (i=0; i<i_len; i++) {
            item = files[i];
            sb.push('    $file ' + item.relPath)
            var lines = item.content.split('\n');
            var j, j_items=lines, j_len=lines.length, line;
            for (j=0; j<j_len; j++) {
                line = lines[j];
                sb.push('        ' + verify.replaceAll(line, '$', '$'))
            }
        }
        file.write(outputPath, sb.join('\n'))
    })
}
;
