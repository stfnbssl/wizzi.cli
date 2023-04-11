/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.meta.package\.wizzi-override\root\index.js.ittf
    utc time: Tue, 11 Apr 2023 09:25:49 GMT
*/
'use strict';

var util = require('util');
var path = require('path');
var stringify = require('json-stringify-safe');
var wizziUtils = require('@wizzi/utils');
var fSystem = wizziUtils.fSystem;
var errors = require('./errors');

var md = module.exports = {};
md.name = 'wizzi.meta.package.index';

//
class FactoryMeta {
    constructor(wizziPackage, provides) {
        this.file = wizziPackage.file;
        this.provides = provides;
        this.metaProductions = {};
    }
    
    initialize(options, callback) {
        // TODO
        return callback(null);
    }
    
    getName() {
        return 'wizzi.meta.package';
    }
    
    getFilename() {
        return __filename;
    }
    
    getProvides() {
        return this.provides;
    }
    
    //
    getMetaProductions(folderTemplates, ittfDocumentTemplates, callback) {
        get_all_MetaProductions(folderTemplates, ittfDocumentTemplates).then((result) => {
        
            return callback(null, result);
        }
        ).catch((err) => {
        
            return callback(err);
        }
        )
    }
    
}

async function get_all_MetaProductions(folderTemplates, ittfDocumentTemplates) {
    await getFolderTemplates('package', folderTemplates);
    await getIttfDocumentTemplates('package', ittfDocumentTemplates);
    await getFolderTemplates('lint', folderTemplates);
    await getIttfDocumentTemplates('lint', ittfDocumentTemplates);
    await getFolderTemplates('pretty', folderTemplates);
    await getIttfDocumentTemplates('pretty', ittfDocumentTemplates);
    return {
            folderTemplates, 
            ittfDocumentTemplates
         };
}
//
async function getFolderTemplates(metaProductionName, packiFiles) {
    
    packiFiles = packiFiles || {};
    return folderFsToPackiFiles(path.join(__dirname, 'ittf', 'folderTemplates', metaProductionName), packiFiles);
}
//
async function getIttfDocumentTemplates(metaProductionName, packiFiles) {
    
    packiFiles = packiFiles || {};
    return folderFsToPackiFiles(path.join(__dirname, 'ittf', 'ittfDocumentTemplates', metaProductionName), packiFiles);
}
async function folderFsToPackiFiles(folderPath, packiFiles) {
    return new Promise((resolve, reject) => {
        
            const fsfile = fSystem.vfile();
            packiFiles = packiFiles || {};
            try {
                fsfile.getFiles(folderPath, {
                    deep: true, 
                    documentContent: true
                 }, (err, result) => {
                
                    if (err) {
                        console.error("folderFsToPackiFiles", err);
                        return reject({
                                message: "folderFsToPackiFiles", 
                                err
                             });
                    }
                    result.map(fsitem => 
                    
                        packiFiles[fsitem.relPath] = {
                            type: "CODE", 
                            contents: fsitem.content || ""
                         }
                    )
                    return resolve(packiFiles);
                }
                )
            } 
            catch (ex) {
                return reject({
                        message: "folderFsToPackiFiles", 
                        err: ex
                     });
            } 
        }
        );
}
function error(errorName, method, message, innerError) {
    return new errors.WizziMetaError(message, null, {
            errorName: errorName, 
            method: md.name + '.' + method, 
            sourcePath: __filename, 
            inner: innerError
         });
}

md.provides = {
    metaProductions: [
        'package', 
        'lint', 
        'pretty'
    ]
 };
md.createFactoryMeta = function(wizziPackage, options, callback) {
    var meta = new FactoryMeta(wizziPackage, md.provides);
    meta.initialize(options, (err, notUsed) => {
    
        if (err) {
            return callback(err);
        }
        return callback(null, meta);
    }
    )
}
;
