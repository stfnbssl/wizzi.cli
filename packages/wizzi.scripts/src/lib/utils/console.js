/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.scripts\.wizzi-override\src\lib\utils\console.js.ittf
    utc time: Sun, 11 Jun 2023 13:19:30 GMT
*/
'use strict';
var path = require('path');
var cp = require('child_process');
var NOTEPAD_EXE = "C:\\Program Files\\Notepad++\\notepad++.exe";
var VSCODE_EXE = "C:\\Program Files\\Microsoft VS Code\\Code.exe";
var md = module.exports = {};
md.openWindowConsole = function(options) {
    cp.execSync('START "" /D ' + options.cwd + ' cmd.exe ', [], options)
}
;
md.openWindowPowershell = function(options) {
    // loog 'wizzi-script.console.openWindowPowershell.options', options
    cp.execSync('START "" /D ' + options.cwd + ' PowerShell_ISE.exe ' + options.document, [], options)
}
;
md.openWindowPowershell_prev2 = function(options) {
    // loog 'wizzi-script.console.openWindowPowershell.options', options
    cp.execSync('START', [
        '"my title"', 
        '/D ' + options.cwd, 
        '/K', 
        'PowerShell_ISE.exe'
    ], options)
}
;
md.openWindowPowershell_prev = function(options) {
    // loog 'wizzi-script.console.openWindowPowershell.options', options
    cp.execSync('PowerShell_ISE.exe', [
        '-WD ' + options.cwd
    ], options)
}
;
md.openNodeInWindowConsole = function(options) {
    cp.execSync("start cmd.exe /K node my-new-script.js parm1 parm2")
}
;
md.openDocument = function(documentFullPath, options) {
    // loog 'wizzi-scripts.console.openDocument', documentFullPath
    cp.execSync(path.basename(documentFullPath), {
        cwd: path.dirname(documentFullPath)
     })
    process.exit(0);
}
;
md.openNotePad = function(documentFullPath, options) {
    var cwd = path.dirname(documentFullPath);
    var prm1 = path.basename(documentFullPath);
    cp.execSync('START "" /D ' + cwd + ' "' + NOTEPAD_EXE + '"  ' + prm1, [], options)
    process.exit(0);
}
;
md.openVsCode = function(documentFullPath, options) {
    var cwd = path.dirname(documentFullPath);
    var prm1 = path.basename(documentFullPath);
    cp.execSync('START "" /D ' + cwd + ' "' + VSCODE_EXE + '"  ' + prm1, [], options)
    process.exit(0);
}
;
