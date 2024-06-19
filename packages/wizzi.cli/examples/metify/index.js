/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: @wizzi/plugin.js@0.8.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\examples\metify\index.js.ittf
    utc time: Fri, 24 May 2024 18:26:49 GMT
*/
'use strict';
const path = require('path');
var metify = require('../../src/cmds/metify');
var sourceFolder = 'C:/My/wizzi/stfnbssl/wizzi.metas/packages/wizzi.meta.documents/.wizzi-override/ittf/documentsPdf/ittfDocumentTemplates/.wizzi';
var destFolder = 'C:/My/wizzi/stfnbssl/wizzi.metas/packages/wizzi.meta.documents/.wizzi-override/ittf/documentsPdf/ittfDocumentTemplates/.wizzi/metified';
metify({
    s: sourceFolder, 
    d: path.join(__dirname, 'output', 'express_wizzi.ittf.ittf')
 })
metify({
    s: sourceFolder, 
    d: destFolder, 
    c: true
 })
