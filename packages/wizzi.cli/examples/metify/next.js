/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: @wizzi/plugin.js@0.8.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\examples\metify\next.js.ittf
    utc time: Fri, 26 Apr 2024 11:13:43 GMT
*/
'use strict';
const path = require('path');
var metify = require('../../src/cmds/metify');
var baseFolder = 'C:/My/wizzi/stfnbssl/wizzi.metas/packages/wizzi.meta.ts.nextjs/.wizzi/wizzifieds';
var sourceFolder = path.join(baseFolder, 'blog-starter');
var destFolder = path.join(baseFolder, '.meta', 'blog-starter');
metify({
    s: sourceFolder, 
    d: destFolder, 
    c: true, 
    p: "tsNextjsBlog"
 })
