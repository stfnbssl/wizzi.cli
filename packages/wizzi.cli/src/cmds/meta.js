/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\src\cmds\meta.js.ittf
    utc time: Wed, 28 Feb 2024 08:12:51 GMT
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

module.exports = (args) => {

    const name = args._[1];
    let configPath = config.getPath(name, true);
    if (!configPath) {
        console.error(`meta config file "wizzi.meta.config.${(name ? name + '.' : '')}js" not found`);
        return ;
    }
    const configInstance = require(configPath);
    console.log('wizzi.cli.meta.metaConfigInstance', configInstance, __filename);
    const x_pluginsBaseFolder = configInstance.pluginsBaseFolder || __dirname;
    if (!configInstance.pluginsBaseFolder) {
        console.log(chalk.red('wizzi.cli.meta - pluginsBaseFolder not set'))
        console.log(chalk.red('meta generation failed'))
    }
    var x_pluginsItems = [];
    if (configInstance.plugins && configInstance.plugins.length > 0) {
        x_pluginsItems = configInstance.plugins;
    }
    else {
        chalk.red('wizzi.cli.meta - plugins not found in wizzi.meta.config')
        chalk.red('meta generation failed')
        return ;
    }
    const x_metaPluginsBaseFolder = configInstance.metaPluginsBaseFolder || __dirname;
    if (!configInstance.metaPluginsBaseFolder) {
        console.log(chalk.red('wizzi.cli.meta - metaPluginsBaseFolder not set'))
        console.log(chalk.red('meta generation failed'))
    }
    var x_metaPluginsItems = [];
    if (configInstance.plugins && configInstance.metaPlugins.length > 0) {
        x_metaPluginsItems = configInstance.metaPlugins;
    }
    else {
        chalk.red('wizzi.cli.meta - meta plugins not found in wizzi.meta.config')
        chalk.red('meta generation failed')
        return ;
    }
    if (!file.exists(configInstance.metaCtxPath)) {
        console.log("[31m%s[0m", 'Invalid options for `meta` command.');
        console.log("[31m%s[0m", 'Meta context path not found', configInstance.metaCtxPath);
        help({_:['help', 'meta']});
        return ;
    }
    generateMeta(configInstance.metaCtxPath, configInstance.destPath, {
        items: x_pluginsItems, 
        pluginsBaseFolder: x_pluginsBaseFolder
     }, {
        items: x_metaPluginsItems, 
        metaPluginsBaseFolder: x_metaPluginsBaseFolder
     }, configInstance.globalContext, (err, result) => {
    
        if (err) {
            throw err;
            console.log("[31m%s[0m", err);
        }
    }
    )
}
;
function generateMeta(metaCtxPath, destPath, pluginsInfo, metaPluginsInfo, globalContext, callback) {
    loadMetaContext(metaCtxPath, pluginsInfo, (err, metaCtx) => {
    
        if (err) {
            return callback(err);
        }
        factory.createJsonWizziFactoryAndJsonFs({}, pluginsInfo, metaPluginsInfo, (err, wf_and_jsonFs) => {
        
            if (err) {
                return callback(err);
            }
            metaCtx.__wz_fsc = new wizzi.FactoryServiceContext();
            wf_and_jsonFs.wf.executeMetaProduction({
                metaCtx: metaCtx, 
                paths: {
                    metaProductionTempFolder: '___template', 
                    metaProductionWizziFolder: '.wizzi'
                 }, 
                globalContext: globalContext
             }, (err, wizziPackiFiles) => {
            
                if (err) {
                    throw err;
                    console.log("[31m%s[0m", err);
                    return ;
                }
                console.log('wizzi.cli.meta.result.wizziPackiFiles.keys', Object.keys(wizziPackiFiles), __filename);
                metaCtx.__wz_fsc.dumpDebugObjects({
                    kind: 'packi', 
                    destFolder: path.join(__dirname, 'dumps', 'packi')
                 })
                writePackifiles(destPath, wizziPackiFiles)
            }
            )
        }
        )
    }
    )
}
function loadMetaContext(metaCtxPath, pluginsInfo, callback) {
    factory.createWizziFactory({}, pluginsInfo, (err, wf) => {
    
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
