/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\src\cmds\help.js.ittf
    utc time: Fri, 19 May 2023 18:19:06 GMT
*/
'use strict';
const menus = {
    main: [
        "", 
        "", 
        "wizzi [noarguments] | configname | [command] <options>", 
        "", 
        "noarguments ......... execute generation using wizzi.config.js", 
        "configname .......... execute generation using wizzi.config.<configname>.js", 
        "create .............. setup wizzi for the current project", 
        "fy .................. wizzify a file or folder", 
        "version ............. show package version", 
        "help ................ show help menu for a command"
    ].join('\n'), 
    create: [
        "", 
        "", 
        "wizzi create <options>", 
        "", 
        "--kind | -k <kindname> ... the project kind <kindname>", 
        "", 
        "valid kindnames:", 
        "  webpack", 
        "  express", 
        "  plugin"
    ].join('\n'), 
    fy: [
        "", 
        "", 
        "wizzi fy <options>", 
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
