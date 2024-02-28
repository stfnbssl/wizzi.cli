/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\src\cmds\help.js.ittf
    utc time: Wed, 28 Feb 2024 06:50:00 GMT
*/
'use strict';
const menus = {
    main: [
        "wz [noarguments | configname] | [command <options>]", 
        " |- Executes the wizzi job defined in a configuration file", 
        "noarguments ......... executes generation using wizzi.config.js", 
        "configname .......... executes generation using wizzi.config.<configname>.js", 
        " |- The wizzi.config.<configname>.js file is searched in the current and up folders", 
        "", 
        "commands:", 
        " job ................. executes a wizzi job", 
        " fy .................. wizzify a file or folder", 
        " meta ................ executes a meta generation", 
        " metify .............. executes the 'metafication' of a wizzi production", 
        " version ............. show package version", 
        " help ................ show help menu for a command", 
        " |- Try: wz help [command]", 
        "", 
        ""
    ].join('\n'), 
    job: [
        "wz job <jobname> <options>", 
        " |- Executes the wizzi job defined in a configuration file", 
        "jobname .... the name of the job definition file: <jobname>.wfjob.ittf", 
        " |- Is simply the display name for the job, has no effect", 
        "options:", 
        " [--config | -c] <configname> ...... the name of the job configuration file: <configname>.config.js", 
        " |- The <configname>.config.js file is searched in the current and up folders", 
        "", 
        ""
    ].join('\n'), 
    fy: [
        "wz fy <options>", 
        " |- Executes the 'wizzifycation' of a file or folder", 
        "options:", 
        " [--source | -s] <file | folder> .... the source file or folder", 
        " [--dest | -d] <file | folder> ...... the destination file or folder", 
        " [--config | -c] <file> ............. a config file for extra plugins", 
        " |- A wizzi plugin can optionaly contain a wizzifier for its language schema.", 
        " |- Basic wizzifiers are included in the Wizzi CLI.", 
        " |- You can add extra plugins with a config file of the same format as for the 'wz' command.", 
        "", 
        ""
    ].join('\n'), 
    meta: [
        "wz meta <metaname>", 
        " |- Executes a wizzi meta production", 
        "options:", 
        " metaname .... the name of the meta definition file: wizzi.meta.config.<metaname>.js", 
        " |- The wizzi.meta.config.<metaname>.js file is searched in the current and up folders", 
        "", 
        ""
    ].join('\n'), 
    metify: [
        "wz metify <options>", 
        " |- Executes the 'metification' of a wizzi folder", 
        "options:", 
        "[--source | -s] <folder> ............................ the source file or folder", 
        "[--dest | -d] <folder> .............................. the destination file or folder", 
        "[--compact | -c] <subfolder[,subfolder[,...]]> ...... folders 'metamanaged' by their parents", 
        "", 
        ""
    ].join('\n')
 };
module.exports = (args) => {

    console.log('help.args', args, __filename);
    console.log('args._[0]', args._[0], __filename);
    console.log('args._[1]', args._[1], __filename);
    console.log("args['help']", args['help'], __filename);
    const subCmd = args._[0] === 'help' ? args._[1] : args._[0];
    console.log('help.subCmd', subCmd, __filename);
    console.log("[33m%s[0m", '');
    console.log("[33m%s[0m", '---------------------------');
    console.log("[33m%s[0m", 'Command:', subCmd);
    console.log("[33m%s[0m", '---------------------------');
    console.log("[32m%s[0m", menus[subCmd] || menus.main);
}
;
