/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: @wizzi/plugin.js@0.8.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\examples\metify\step_0.js.ittf
    utc time: Fri, 24 May 2024 18:26:49 GMT
*/
'use strict';
const minimist = require('minimist');
var metify = require('../../src/cmds/metify');

const args = minimist(process.argv.slice(2));
console.log('args', args, __filename);
metify(args);
