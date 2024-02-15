/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.scripts\.wizzi-override\src\commands\help.js.ittf
    utc time: Sun, 28 Jan 2024 19:38:08 GMT
*/
'use strict';
const menus = {
    main: [
        "", 
        "index help pandoc", 
        "index help babel", 
        ""
    ].join('\n'), 
    pandoc: [
        "", 
        "", 
        "index pandoc <file-path | folder-path> <options>", 
        "", 
        "file-path ............ source file path relative to cwd folder", 
        "folder-path .......... source folder path relative to cwd folder", 
        "options:", 
        "  --scan [--folder] ................. scan the folder <folder-path>", 
        "  [--output | -o] <folder-path> ..... output folder", 
        ""
    ].join('\n'), 
    babel: [
        "", 
        "", 
        "index babel <options>", 
        "", 
        "[--source | -s] <file | folder> .... the source file or folder", 
        "[--dest | -d] <file | folder> ...... the destination file or folder"
    ].join('\n')
 };
module.exports = (args) => {

    const subCmd = args._[0] === 'help' ? args._[1] : args._[0];
    console.log(menus[subCmd] || menus.main, __filename);
}
;
