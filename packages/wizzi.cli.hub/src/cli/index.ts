/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi-override\src\cli\index.ts.ittf
*/
import path from 'path';
import * as gitclone from './commands/git-clone';
import * as down from './commands/down';
const minimist = require('minimist');

const commands = [
    gitclone, 
    down
];

const args = minimist(process.argv.slice(2));
console.log('args', args, __filename);
function main() {

    if (args.help) {
        for (const command of commands) {
            const res = command.getParams();
            console.log(res);
        }
    }
    else {
        for (const command of commands) {
            const res = command.executeCommand(args);
            if (res.done) {
                if (res.error) {
                    console.log(res.message);
                }
                return ;
            }
        }
        for (const command of commands) {
            const res = command.getParams();
            console.log(res);
        }
    }
}
main();
