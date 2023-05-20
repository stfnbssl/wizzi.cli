/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\root\index.js.ittf
    utc time: Fri, 19 May 2023 18:19:04 GMT
*/
'use strict';
const path = require('path');
const minimist = require('minimist');
const config = require('./src/utils/config');
const error = require('./src/utils/error');
function checkConfig(name) {
    var test = path.join(currentDir, 'wizzi.config.' + name + 'js');
}
module.exports = () => {

    const args = minimist(process.argv.slice(2));
    console.log('args', args, __filename);
    let cmd = args._[0] || 'generate';
    if (args.version || args.v) {
        cmd = 'version';
    }
    if (args.help || args.h || args['?']) {
        cmd = 'help';
    }
    // loog 'cmd', cmd
    switch (cmd) {
        case 'generate': {
            require('./src/cmds/generate')();
            break;
        }
        case 'fy': {
            require('./src/cmds/fy')(args);
            break;
        }
        case 'meta': {
            require('./src/cmds/meta')(args);
            break;
        }
        case 'metify': {
            require('./src/cmds/metify')(args);
            break;
        }
        case 'help': {
            require('./src/cmds/help')(args);
            break;
        }
        default: {
            var configPath = config.getPath(cmd);
            if (configPath) {
                require('./src/cmds/generate')(cmd);
            }
            else {
                error(`"${cmd}" is not a valid command!`);
                error(`try wizzi help`, true);
            }
            break;
        }
    }
}
;
