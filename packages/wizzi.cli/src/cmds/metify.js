/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\src\cmds\metify.js.ittf
    utc time: Wed, 28 Feb 2024 06:50:00 GMT
*/
'use strict';
const path = require('path');
const wizziUtils = require('@wizzi/utils');
const vfile = wizziUtils.vfile;
const verify = wizziUtils.verify;
var file = vfile();
module.exports = (args) => {

    const sourceFolder = args.s || args.source;
    const destFolder = args.d || args.dest || args.o || args.output;
    const complex = args.c || args.complex;
    const production = args.p || args.production || "<production>";
    if (complex) {
        metifyComplex(sourceFolder, destFolder, production)
    }
    else {
        metifySimple(sourceFolder, destFolder)
    }
}
;
function metifySimple(sourceFolder, destFolder) {
    console.log('metify.simple.sourceFolder', sourceFolder, __filename);
    console.log('metify.simple.destFolder', destFolder, __filename);
    
    file.getFiles(sourceFolder, {
        deep: true, 
        documentContent: true
     }, (err, files) => {
    
        if (err) {
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
        file.write(destFolder, sb.join('\n'))
    }
    )
}
function metifyComplex(sourceFolder, destFolder, production) {
    console.log('metify.complex.sourceFolder', sourceFolder, __filename);
    console.log('metify.complex.destFolder', destFolder, __filename);
    console.log('metify.complex.production', production, __filename);
    
    var sb1 = [
        "$group"
    ];
    var sb2 = [
        "$group", 
        "\t$if metaCtx.use" + verify.capitalize(production)
    ];
    file.getFiles(sourceFolder, {
        deep: true, 
        documentContent: true
     }, (err, files) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw new Error(err.message);
        }
        var afs = analizeFiles(files);
        for (var k in afs.folders) {
            var folder = afs.folders[k];
            for (var ke in folder) {
                sb1.push('\t$' + '$' + ' folder ' + k + ' ext ' + ke)
                sb1.push('\t$');
                sb1.push('\t\tvar items = [');
                var i, i_items=folder[ke], i_len=folder[ke].length, af;
                for (i=0; i<i_len; i++) {
                    af = folder[ke][i];
                    sb1.push('\t\t\t\'' + af.basenameNoExt + '\',');
                    file.write(path.join(destFolder, 'ittfDocumentTemplates', tfolder(k), af.basenameNoExt + '.' + ke + '.ittf.ittf'), af.content)
                }
                sb1.push('\t\t];');
                sb1.push('');
                sb1.push('\t$foreach item in items');
                sb1.push('\t\t$file __dot__wizzi/' + k + '/$' + '{item}' + '.' + ke + '.ittf.ittf');
                if (af.firstWord) {
                    sb1.push('\t\t\t' + af.firstWord);
                }
                else {
                    sb1.push('\t\t\t$' + "{'$'}{'$'}group");
                }
                sb1.push('\t\t\t\t$' + "{'$'}" + 'include ' + production + '/' + tfolder(k) + '/$' + '{item}' + '.' + ke);
            }
            file.write(path.join(destFolder, 'folderTemplates', 't', k + ".ittf.ittf"), sb1.join('\n'))
            sb1 = [
                "$group"
            ];
            sb2.push('\t\t$include ' + k)
        }
        file.write(path.join(destFolder, 'folderTemplates', 'index.ittf.ittf'), sb2.join('\n'))
    }
    )
}
function tfolder(name) {
    if (name == 't') {
        return 'tfolder';
    }
    if (name.endsWith('/t')) {
        return name.substring(0, name.length-1) + 'tfolder';
    }
    return name;
}
function analizeFiles(files) {
    var ret = {
        folders: {
            
         }
     };
    var i, i_items=files, i_len=files.length, file;
    for (i=0; i<i_len; i++) {
        file = files[i];
        var af = analizeFile(file);
        if (af) {
            var folderName = af.relFolder.length == 0 ? '__root' : af.relFolder;
            var folder = ret.folders[folderName];
            if (!folder) {
                ret.folders[folderName] = folder = {};
            }
            var folderExt = folder[af.ext];
            if (!folderExt) {
                folder[af.ext] = folderExt = [];
            }
            folderExt.push(af);
        }
    }
    return ret;
}
function analizeFile(file) {
    var ss = normalize(file.relPath).split('/');
    var basename = ss[ss.length-1];
    ss.pop();
    var relFolder = ss.join('/');
    var ssname = basename.split('.');
    if (ssname[ssname.length-1] == 'ittf') {
        var ext = ssname[ssname.length-2];
        ssname.pop();
        ssname.pop();
        var ac = analizeContent(file.content);
        return {
                basename, 
                relFolder, 
                basenameNoExt: ssname.join('.'), 
                ext, 
                content: ac.newContent, 
                firstWord: ac.firstWord
             };
    }
}
function analizeContent(content) {
    var ch, chNext, chPrev, i, len = content.length;
    var seenAnyChar = false;
    var seenLineChar = false;
    var seenLineWord = false;
    var seenFirstWord = false;
    var firstWord = null;
    var waitCloseInterpolate = false;
    var multiLineCommentOn = false;
    var sb = [];
    var temp = [];
    for (i=0; i<len; i++) {
        ch = content[i];
        chNext = content[i+1];
        chPrev = content[i-1];
        if (ch == '\n') {
            if (!seenFirstWord) {
                firstWord = sb.join('');
                sb = ['$group'];
                seenFirstWord = true;
            }
            if (waitCloseInterpolate) {
                sb.push('$' + temp.join(''));
                temp.length = 0;
                waitCloseInterpolate = false;
            }
            seenLineChar = false;
            seenLineWord = false;
            sb.push(ch);
        }
        else if (ch == '}' && waitCloseInterpolate) {
            sb.push('$' + "{'$'}");
            sb.push(temp.join(''));
            sb.push(ch);
            temp.length = 0;
            waitCloseInterpolate = false;
        }
        else if (ch == '$' && chNext == '{' && !waitCloseInterpolate) {
            waitCloseInterpolate = true;
        }
        else if (ch == '$' && !seenLineChar) {
            if (seenAnyChar) {
                sb.push(ch);
                sb.push("{'$'}");
                if (chNext == '*') {
                    multiLineCommentOn = true;
                }
            }
            else {
                sb.push(ch);
                seenFirstWord = true;
            }
            seenLineChar = true;
        }
        else if (ch == '$' && chNext == '*') {
            sb.push(ch);
            sb.push("{'$'}");
            seenLineChar = true;
            multiLineCommentOn = true;
        }
        else if (ch == '$' && chPrev == '*') {
            console.log('*$', 'multiLineCommentOn', multiLineCommentOn, __filename);
            if (multiLineCommentOn) {
                sb.push(ch);
                sb.push("{'$'}");
                multiLineCommentOn = false;
            }
            else {
                sb.push(ch);
            }
            seenLineChar = true;
        }
        else if (ch == '(' && !seenLineWord) {
            sb.push('$');
            sb.push("{'('}");
            seenLineWord = true;
        }
        else {
            if (waitCloseInterpolate) {
                temp.push(ch);
            }
            else {
                sb.push(ch);
            }
            if (ch == ' ' || ch == '\t') {
                if (seenLineChar) {
                    seenLineWord = true;
                    if (!seenFirstWord) {
                        firstWord = sb.join('');
                        sb = ['$group'];
                        seenFirstWord = true;
                    }
                }
            }
            else {
                seenLineChar = true;
            }
            seenAnyChar = true;
        }
    }
    if (waitCloseInterpolate) {
        sb.push('$' + temp.join(''));
    }
    return {
            newContent: sb.join(''), 
            firstWord
         };
}
function normalize(filePath) {
    return verify.replaceAll(filePath, '\\', '/');
}
