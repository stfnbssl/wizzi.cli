/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\src\cmds\meta.js.ittf
    utc time: Fri, 19 May 2023 18:19:06 GMT
*/
'use strict';

const path = require('path');
const util = require('util');
const async = require('async');
const chalk = require('chalk');
const wizzi = require('@wizzi/factory');
const wizziUtils = require('wizzi-utils');
const file = wizziUtils.file;
const verify = wizziUtils.verify;
const config = require('../utils/config');
const help = require('./help');
const factory = require('../factory');

var pluginsBaseFolderV08 = 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages';
var metaPluginsBaseFolder = 'C:/My/wizzi/stfnbssl/wizzi.metas/packages';

module.exports = (name) => {

    let configPath = config.getPath(name, true);
    if (!configPath) {
        console.error(`meta config file "wizzi.meta.config.${(name ? name + '.' : '')}js" not found`);
        return ;
    }
    const configInstance = require(configPath);
    console.log('wizzi.cli.generate.metaConfigInstance', configInstance, __filename);
    const x_pluginsBaseFolder = configInstance.pluginsBaseFolder || __dirname;
    if (!configInstance.pluginsBaseFolder) {
        console.log(chalk.red('wizzi-cli.meta - pluginsBaseFolder not set'))
        console.log(chalk.red('meta generation failed'))
    }
    var x_pluginsItems = [];
    if (configInstance.plugins && configInstance.plugins.length > 0) {
        x_pluginsItems = configInstance.plugins;
    }
    else {
        chalk.red('wizzi.cli.meta - plugins not found in wizzi.meta.config')
        chalk.red('meta generation failed')
    }
    if (!file.exists(configInstance.metaCtxPath)) {
        console.log("[31m%s[0m", 'Invalid options for `meta` command.');
        console.log("[31m%s[0m", 'Meta context path not found', configInstance.metaCtxPath);
        help({_:['help', 'meta']});
        return ;
    }
    generateMeta(configInstance.metaCtxPath, configInstance.destPath, {
        items: configInstance.plugins, 
        pluginsBaseFolder: configInstance.pluginsBaseFolder
     }, {
        items: configInstance.metaPlugins, 
        metaPluginsBaseFolder: configInstance.metaPluginsBaseFolder
     }, (err, result) => {
    
        if (err) {
            console.log("[31m%s[0m", err);
        }
    }
    )
}
;
function generateMeta(metaCtxPath, destPath, plugins, metaPlugins, callback) {
    loadMetaContext(metaCtxPath, plugins, (err, metaCtx) => {
    
        if (err) {
            return callback(err);
        }
        factory.createJsonWizziFactoryAndJsonFs({}, plugins, metaPlugins, (err, wf_and_jsonFs) => {
        
            if (err) {
                return callback(err);
            }
            wf_and_jsonFs.wf.executeMetaProduction({
                metaCtx: metaCtx, 
                paths: {
                    metaProductionTempFolder: '___template', 
                    metaProductionWizziFolder: '.wizzi'
                 }, 
                globalContext: {
                    
                 }
             }, (err, wizziPackiFiles) => {
            
                if (err) {
                    console.log("[31m%s[0m", err);
                    return ;
                }
                console.log('wizziPackiFiles', Object.keys(wizziPackiFiles), __filename);
                writePackifiles(destPath, wizziPackiFiles)
            }
            )
        }
        )
    }
    )
}
function loadMetaContext(metaCtxPath, plugins, callback) {
    factory.createWizziFactory({}, plugins, (err, wf) => {
    
        if (err) {
            return callback(err);
        }
        wf.loadModel('json', metaCtxPath, {
            mTreeBuildupContext: {
                metaCtx: {
                    
                 }
             }
         }, (err, wizziModel) => {
        
            if (err) {
                return callback(err);
            }
            return callback(null, wizziModel);
        }
        )
    }
    )
}
function writePackifiles(folderPath, packiFiles) {
    for (var k in packiFiles) {
        file.write(path.join(folderPath, k), packiFiles[k].contents)
    }
}
