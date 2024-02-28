/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\examples\meta1\step_1.js.ittf
    utc time: Wed, 28 Feb 2024 08:12:51 GMT
*/
'use strict';
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));
console.log("args", args, __filename);
var gen = require('../../src/cmds/meta');
gen(args);
