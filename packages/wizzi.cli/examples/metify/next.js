/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\examples\metify\next.js.ittf
    utc time: Wed, 28 Feb 2024 08:31:27 GMT
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
