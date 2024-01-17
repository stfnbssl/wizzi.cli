/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\src\cmds\help.js.ittf
    utc time: Wed, 17 Jan 2024 05:09:03 GMT
*/
'use strict';
const menus = {
    main: [
        "", 
        "", 
        "wz [noarguments] | configname | [command] <options>", 
        "", 
        "noarguments ......... execute generation using wizzi.config.js", 
        "configname .......... execute generation using wizzi.config.<configname>.js", 
        "commands:", 
        "  create .............. setup wizzi for the current project", 
        "  job ................. execute a wizzi job", 
        "  fy .................. wizzify a file or folder", 
        "  meta ................ execute meta generation", 
        "  version ............. show package version", 
        "  help ................ show help menu for a command"
    ].join('\n'), 
    create: [
        "", 
        "", 
        "wz create <options>", 
        "", 
        "[--kind | -k] <kindname> ... the project kind <kindname>", 
        "", 
        "valid kindnames:", 
        "  webpack", 
        "  express", 
        "  plugin"
    ].join('\n'), 
    job: [
        "", 
        "", 
        "wz job <jobname> <options>", 
        "", 
        "jobname .... the name of the job definition file: <jobname>.wfjob.ittf", 
        "[--config | -c] <configname> ...... the name of the job configuration file: <configname>.config.js"
    ].join('\n'), 
    fy: [
        "", 
        "", 
        "wz fy <options>", 
        "", 
        "[--source | -s] <file | folder> .... the source file or folder", 
        "[--dest | -d] <file | folder> ...... the destination file or folder"
    ].join('\n'), 
    meta: [
        "", 
        "", 
        "wz meta <metaname>", 
        "", 
        "metaname .... the name of the meta definition file: wizzi.meta.config.<metaname>.js"
    ].join('\n'), 
    metify: [
        "", 
        "", 
        "wz metify <options>", 
        "", 
        "[--source | -s] <file | folder> .... the source file or folder", 
        "[--dest | -d] <file | folder> ...... the destination file or folder", 
        "[--complex | -c] ...... ", 
        "[--production | -p] ...... "
    ].join('\n')
 };
module.exports = (args) => {

    const subCmd = args._[0] === 'help' ? args._[1] : args._[0];
    console.log(menus[subCmd] || menus.main, __filename);
}
;
