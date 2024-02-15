/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.scripts\.wizzi-override\examples\procOutput.js.ittf
    utc time: Sun, 28 Jan 2024 19:38:08 GMT
*/
'use strict';
const path = require("path");
const spawnUtils = require("../src/utils/spawn");
var choice = process.argv[2] || '1';
if (choice == '1') {
    spawnUtils.procOut();
}
