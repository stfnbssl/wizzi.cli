/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\src\factory.js.ittf
    utc time: Fri, 19 May 2023 18:19:06 GMT
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
    }
 };
