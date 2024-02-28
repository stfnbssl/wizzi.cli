/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\src\cmds\job.js.ittf
    utc time: Wed, 28 Feb 2024 08:45:08 GMT
*/
'use strict';
const path = require('path');
const util = require('util');
const fs = require('fs');
const async = require('async');
const chalk = require('chalk');
const wizzi = require('@wizzi/factory');
const config = require('../utils/config');
module.exports = (args) => {

    const name = args._[1];
    const configRelPath = args.c || args.config;
    let currentDir = process.cwd();
    let configPath = path.join(currentDir, configRelPath + '.config.js');
    const configInstance = require(configPath);
    console.log('wizzi-cli.job.configInstance', configInstance, __filename);
    const x_pluginsBaseFolder = configInstance.pluginsBaseFolder || __dirname;
    if (!configInstance.pluginsBaseFolder) {
        console.log(chalk.red('wizzi-cli.job - pluginsBaseFolder not set'))
        console.log(chalk.red('wizzi-cli.job - pluginsBaseFolder defaulted to ' + x_pluginsBaseFolder))
    }
    var x_pluginsItems = [];
    if (configInstance.plugins && configInstance.plugins.length > 0) {
        x_pluginsItems = configInstance.plugins;
    }
    else {
        chalk.red('wizzi.cli.job - plugins not found in wizzi.config')
        chalk.red('generation failed')
        return ;
    }
    let wfjobPath = path.join(currentDir, name + '.wfjob.ittf');
    wizzi.executeWizziJob({
        storeKind: 'filesystem', 
        config: {
            wfBaseFolder: __dirname, 
            plugins: x_pluginsItems, 
            pluginsBaseFolder: x_pluginsBaseFolder
         }, 
        job: {
            name: name, 
            ittfDocumentUri: wfjobPath, 
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
    })
}
;
