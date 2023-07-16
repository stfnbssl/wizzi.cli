/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.scripts\.wizzi-override\root\index.js.ittf
    utc time: Sun, 11 Jun 2023 13:19:30 GMT
*/
'use strict';
const path = require('path');
const minimist = require('minimist');
const error = require('./src/utils/error');

const args = minimist(process.argv.slice(2));
console.log('args', args, __filename);
let cmd = args._[0] || 'generate';
if (args.version || args.v) {
    cmd = 'version';
}
if (args.help || args.h || args['?']) {
    cmd = 'help';
}
console.log('cmd', cmd, __filename);
switch (cmd) {
    case 'pandoc': {
        checked(require('./src/commands/pandoc'), args)
        break;
    }
    case 'babel': {
        checked(require('./src/commands/babel'), args)
        break;
    }
    case 'help': {
        require('./src/commands/help')(args);
        break;
    }
    case 'version': {
        console.log('Version 0.1');
        break;
    }
    default: {
        error(`"${cmd}" is not a valid command!`);
        error(`try wizzi help`, true);
        break;
    }
}
function checked(action, args) {
    action(args).then((result) => {
    
        if (result.success) {
            console.log("[32m%s[0m", "Action executed. Message: " + result.message);
        }
        else {
            console.log("[33m%s[0m", "Action failed. Error: " + result.error);
        }
    }
    ).catch((err) => {
    
        if (err) {
            console.log("[31m%s[0m", err);
        }
        else {
            console.log("[31m%s[0m", "Failed");
        }
    }
    )
}
