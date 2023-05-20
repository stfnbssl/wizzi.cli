/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\examples\metify\index.js.ittf
    utc time: Fri, 19 May 2023 18:19:07 GMT
*/
'use strict';
const path = require('path');
const fs = require('fs');
const wizzi = require('@wizzi/factory');
var metify = require('../../src/cmds/metify');
var sourceFolder = 'C:/My/wizzi/stfnbssl/wizzi.metas/packages/wizzi.meta.documents/.wizzi-override/ittf/documentsPdf/ittfDocumentTemplates/.wizzi';
var outputFolder = 'C:/My/wizzi/stfnbssl/wizzi.metas/packages/wizzi.meta.documents/.wizzi-override/ittf/documentsPdf/ittfDocumentTemplates/.wizzi/metified';
metify.simple(sourceFolder, path.join(__dirname, 'output', 'express_wizzi.ittf.ittf'))
metify.complex(sourceFolder, outputFolder)
