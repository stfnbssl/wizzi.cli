/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\src\factory.js.ittf
    utc time: Wed, 28 Feb 2024 08:45:08 GMT
*/
'use strict';

const wizzi = require('@wizzi/factory');

const packiFilePrefix = 'json:/';

function ensurePackiFilePrefix(filePath) {
    return filePath.startsWith(packiFilePrefix) ? filePath : packiFilePrefix + filePath;
}

module.exports = {
    createWizziFactory: function(globalContext, plugins, callback) {
        wizzi.fsFactory({
            plugins: plugins, 
            globalContext: globalContext || {}
         }, callback)
    }, 
    createJsonWizziFactoryAndJsonFs: function(packiFiles, plugins, metaPlugins, callback) {
        const jsonDocuments = [];
        console.log('createJsonWizziFactoryAndJsonFs', __filename);
        Object.keys(packiFiles).map((value) => {
        
            if (packiFiles[value].type === 'CODE' && packiFiles[value].contents && packiFiles[value].contents.length > 0) {
                const filePath = ensurePackiFilePrefix(value);
                jsonDocuments.push({
                    path: filePath, 
                    content: packiFiles[value].contents
                 })
            }
        }
        )
        wizzi.JsonComponents.createJsonFs(jsonDocuments, (err, jsonFs) => {
        
            if (err) {
                return callback(err);
            }
            wizzi.jsonFactory({
                jsonFs: jsonFs, 
                plugins: plugins, 
                metaPlugins: metaPlugins
             }, (err, wf) => {
            
                if (err) {
                    return callback(err);
                }
                callback(null, {
                    wf: wf, 
                    jsonFs: jsonFs
                 })
            }
            )
        }
        )
    }, 
    getDefaultPlugins: function() {
        return [
                "./wizzi.plugin.css/index.js", 
                "./wizzi.plugin.docx/index.js", 
                "./wizzi.plugin.graphql/index.js", 
                "./wizzi.plugin.html/index.js", 
                "./wizzi.plugin.ittf/index.js", 
                "./wizzi.plugin.js/index.js", 
                "./wizzi.plugin.json/index.js", 
                "./wizzi.plugin.md/index.js", 
                "./wizzi.plugin.pandoc/index.js", 
                "./wizzi.plugin.pdf/index.js", 
                "./wizzi.plugin.ppt/index.js", 
                "./wizzi.plugin.text/index.js", 
                "./wizzi.plugin.ts/index.js", 
                "./wizzi.plugin.svg/index.js", 
                "./wizzi.plugin.wzjob/index.js", 
                "./wizzi.plugin.wzschema/index.js", 
                "./wizzi.plugin.xml/index.js", 
                "./wizzi.plugin.yaml/index.js"
            ];
    }, 
    getDefaultPluginsBaseFolder: function() {
        return "C:/My/wizzi/stfnbssl/wizzi.plugins/packages";
    }
 };
