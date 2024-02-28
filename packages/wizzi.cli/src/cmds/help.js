/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\src\cmds\help.js.ittf
    utc time: Wed, 28 Feb 2024 08:12:51 GMT
*/
'use strict';
const menus = {
    main: [
        "Execute a wizzi package production (default) or a specified command", 
        "", 
        "wz [noarguments | configname] | [command {options}]", 
        "", 
        "options:", 
        " noarguments : execute a wizzi production using the 'wizzi.config.js' config file", 
        " configname : execute a wizzi production using 'wizzi.config.{configname}.js' config file", 
        "  |- The config file is searched in the current and up folders", 
        "", 
        "commands:", 
        " job ................. execute a wizzi job", 
        " fy .................. wizzify a file or folder", 
        " meta ................ execute a wizzi meta production", 
        " metify .............. execute the 'metafication' of a wizzi production", 
        " version ............. show package version", 
        " help ................ show help menu for a command", 
        " |- Try: wz help [command]", 
        "", 
        ""
    ].join('\n'), 
    job: [
        "Execute the wizzi job defined in a configuration file", 
        "", 
        "wz job {jobname} {options}", 
        "", 
        "options:", 
        " jobname : the name of the job", 
        "  |- Is simply the display name for the job", 
        " [--config | -c] {configname} : the name of the job configuration file: {configname}.config.js", 
        "  |- The config file is searched in the current and up folders", 
        "", 
        ""
    ].join('\n'), 
    fy: [
        "Execute the 'wizzifycation' of a file or folder", 
        "", 
        "wz fy {options}", 
        "", 
        "options:", 
        " [--source | -s] {file | folder} : the source file or folder", 
        " [--dest | -d] {file | folder} : the destination file or folder", 
        " [--config | -c] {file} : a config file for extra plugins", 
        "  |- A wizzi plugin can optionaly contain a wizzifier for its language schema.", 
        "  |- Basic wizzifiers are included in the Wizzi CLI.", 
        "  |- You can add extra plugins using a config file of the same format as for the 'wz' command.", 
        "", 
        ""
    ].join('\n'), 
    meta: [
        "Execute a wizzi meta production", 
        "", 
        "wz meta {metaname}", 
        "", 
        "options:", 
        " metaname : the name of the meta definition file: wizzi.meta.config.{metaname}.js", 
        "  |- The config file is searched in the current and up folders", 
        "", 
        ""
    ].join('\n'), 
    metify: [
        "Execute the 'metification' of a wizzi folder", 
        "", 
        "wz metify {options}", 
        "", 
        "options:", 
        " [--source | -s] {folder} : the source file or folder", 
        " [--dest | -d] {folder} : the destination file or folder", 
        " [--compact | -c] {subfolder[ : subfolder[", 
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
    console.log("[33m%s[0m", 'Command:', subCmd || 'wz');
    console.log("[33m%s[0m", '---------------------------');
    console.log("[32m%s[0m", menus[subCmd] || menus.main);
}
;
