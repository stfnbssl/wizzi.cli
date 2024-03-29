/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\src\cmds\generatePath.js.ittf
    utc time: Wed, 28 Feb 2024 20:31:32 GMT
*/
'use strict';
const path = require('path');
const util = require('util');
const fs = require('fs');
const async = require('async');
const chalk = require('chalk');
const wizzi = require('@wizzi/factory');
const config = require('../utils/config');
const commons = require('./commons');

const kCommandName = "main";

module.exports = (args) => {

    
    const checker = new commons.commandChecker(kCommandName);
    
    const currentDir = process.cwd();
    
    let sourcePath = args.source || args.s;
    let destPath = args.dest || args.d;
    
    let configInstance = null;
    
    checker.checkFile(sourcePath, 'sourcePath')
    checker.checkFile(destPath, 'destPath')
    if (args.config || args.c) {
        checker.checkFile(path.join(currentDir, (args.config || args.c) + '.config.js'), "configPath")
        if (checker.isValid()) {
            configInstance = require(checker.configPath);
        }
        else {
            return checker.checkOut();
        }
        
        checker.checkNotEmpty(configInstance.pluginsBaseFolder, 'pluginsBaseFolder', {
            message: "in config file " + checker.configPath
         })
        checker.checkArrayNotEmpty(configInstance.plugins, 'pluginsItems', {
            message: "in config file " + checker.configPath
         })
    }
    if (!checker.checkOut()) {
        return ;
    }
    return ;
    const x_pluginsBaseFolder = configInstance.pluginsBaseFolder || __dirname;
    if (!configInstance.pluginsBaseFolder) {
        console.log(chalk.red('wizzi-cli.generate - pluginsBaseFolder not set'))
        console.log(chalk.red('wizzi-cli.generate - pluginsBaseFolder defaulted to ' + x_pluginsBaseFolder))
    }
    var x_pluginsItems = [];
    if (configInstance.plugins && configInstance.plugins.length > 0) {
        x_pluginsItems = configInstance.plugins;
    }
    else {
        chalk.red('wizzi.cli.generate - plugins not found in wizzi.config')
        chalk.red('generation failed')
        return ;
    }
    wizzi.executeWizziJob({
        storeKind: 'filesystem', 
        config: {
            wfBaseFolder: __dirname, 
            plugins: x_pluginsItems, 
            pluginsBaseFolder: x_pluginsBaseFolder
         }, 
        job: {
            name: configInstance.wfjobName, 
            ittfDocumentUri: configInstance.wfjobPath, 
            productionOptions: wizzi.productionOptions({
                indentSpaces: 4, 
                basedir: __dirname, 
                verbose: 2, 
                dumps: {
                    dumpsBaseFolder: path.join(__dirname, '_dumps'), 
                    mTreeBuildupJsWizziScript: {
                        dump: false
                     }
                 }
             }), 
            globalContext: configInstance.globalContext
         }
     }, function(err) {
        if (err) {
            return wizzi.printWizziJobError(configInstance.wfjobName, err);
        }
        if (configInstance.schemas && configInstance.schemas.length > 0) {
            generateSchemas(configInstance.schemas, path.dirname(configInstance.wfjobPath), configInstance.destPath, configInstance.packageName || configInstance.wfjobName, {
                items: x_pluginsItems, 
                baseFolder: x_pluginsBaseFolder
             })
        }
    })
}
;
function generateSchemas(schemasToGen, wfJobFolder, destPath, packageName, plugins) {
    async.mapSeries(schemasToGen, function(schemaName, callback) {
        // loog 'wizzi-cli.generate.Generating schema ' + schemaName
        var options = {};
        if (plugins) {
            options = {
                plugins: plugins.items, 
                pluginsBaseFolder: plugins.baseFolder
             };
        }
        wizzi.generateWizziModelTypes({
            configOptions: options, 
            wfschema: {
                name: schemaName, 
                ittfDocumentUri: path.join(wfJobFolder, 'lib', 'wizzi', 'schemas', schemaName + '.wfschema.ittf'), 
                outputPackageFolder: destPath
             }
         }, function(err, result) {
            if (err) {
                throw new Error('Package: ' + packageName + ' schema ' + schemaName + '  wizzi models production error: ' + (util.inspect(err, {
                        depth: null
                     })));
            }
            // loog 'wizzi-cli.generate.Generate schema result', result
            callback(null, result);
        })
    }, function(err, result) {
        if (err) {
            wizzi.printWizziJobError($name, err);
        }
    })
}
