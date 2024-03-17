/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\examples\fy\step_0.js.ittf
    utc time: Mon, 04 Mar 2024 21:42:47 GMT
*/
'use strict';
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
console.log('fy.step_0.args', args, __filename);
var fy = require('../../src/cmds/fy');
fy(args);
