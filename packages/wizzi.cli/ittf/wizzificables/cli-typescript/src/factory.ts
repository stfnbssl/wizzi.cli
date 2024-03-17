'use strict';

import path from 'path'
import wizzi from "@wizzi/factory";
import {packi, fSystem} from '@wizzi/utils';
import wizziRepo, { JsonFs } from '@wizzi/repo';
import { ParameterChecker } from './ParametersChecker';

// const packi.packiFilePrefix = 'json:/';

function ensurePackiFilePrefix(filePath: string) {
    return filePath.startsWith(packi.filePrefix) ? filePath : packi.filePrefix + filePath;
}

export function createWizziFactory(globalContext: any, extraPlugin: wizzi.PluginsOptions, callback: wizzi.cb<wizzi.WizziFactory>) {
    console.log("[33m%s[0m", 'extraPlugin', extraPlugin);
    wizzi.fsFactory({
        repo: { storeKind: "filesystem"},
        plugins: extraPlugin, 
        globalContext: globalContext || {}
     }, callback)
}

export function createJsonWizziFactoryAndJsonFs(packiFiles: packi.PackiFiles, extraPlugin: wizzi.PluginsOptions, 
    extraMetaPlugins: wizzi.PluginsOptions, callback: wizzi.cb<wizzi.JsonWizziFactoryAndJsonFs|null>) {
    const jsonDocuments: wizziRepo.JsonDocumentDto[] = [];
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
    wizziRepo.JsonComponents.createJsonFs(jsonDocuments, (err, jsonFs) => {
    
        if (err) {
            return callback(err, null);
        }
        if (jsonFs == undefined) {
            return callback(err, null);
        }
        wizzi.jsonFactory({
            jsonFs: jsonFs, 
            plugins: extraPlugin, 
            metaPlugins: extraMetaPlugins
         }, (err, wf?: wizzi.WizziFactory) => {
            if (err || !wf) {
                return callback(err, null);
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
;

export function getDefaultPlugins() {
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
}


export function getDefaultPluginsBaseFolder() {
    return "C:/My/wizzi/stfnbssl/wizzi.plugins/packages";
}

export function createContextFromFile(filePath: string, previousContext: any, extraPlugins: wizzi.PluginsOptions, callback: wizzi.cb<any>) {
    const fInfo = fSystem.fileInfoByPath(filePath);
    if (fInfo.isIttfDocument) {
        if (fInfo.schema == 'json') {
            createWizziFactory({}, extraPlugins, (err: null, wf: wizzi.WizziFactory) => {
                if (err) {
                    return callback(err, null);
                }
                wf.loadModelAndGenerateArtifact(filePath, {
                    modelRequestContext: {
                        mTreeBuildupContext: previousContext || {}
                     }, 
                    artifactRequestContext: {}
                 }, "json/module", (err, result) => {
                
                    if (err) {
                        console.log("[31m%s[0m", 'err', err);
                        throw new Error(err.message);
                    }
                    if (result == undefined) {
                        throw new Error("");
                    }
                    console.log('result', result, __filename);
                    callback(null, JSON.parse(result))
                }
                )
            }
            )
        }
        else {
            callback({
                __is_error: true, 
                message: 'Wizzi schema of context file ' + filePath + ' not managed'
             }, null)
        }
    }
    else {
        if (fInfo.extension == 'json') {
            fSystem.vfile({storeName: 'filesystem'}, (err: any, vfileImpl: fSystem.VFile) => {
                if (err) {
                    return callback(err, null);
                }
                vfileImpl.read(filePath, (err, result) => {
                
                    if (err) {
                        return callback(err, null);
                    }
                    callback(null, JSON.parse(result))
                }
                )
            }
            )
        }
        else {
            callback({
                __is_error: true, 
                message: 'Mime type of context file ' + filePath + ' not managed'
             }, null)
        }
    }
}

export function loadContexts(contextFiles: [string], plugins:wizzi.PluginsOptions, checker: ParameterChecker, callback: wizzi.cb<{[path: string]: any}>): void {
    
    contextFiles.map(contextFile =>{
        checker.checkFile(contextFile, contextFile)
    })
    if (!checker.isValid()) {
        return callback(null, {
                __is_checkerError: true
        });
    }
    const progressiveContext: {[path: string]: any} = {};
    function doLoadContext(ndx: number) {
        const contextFile = contextFiles[ndx];
        if (!contextFile) {
            console.log('progressiveContext', progressiveContext, __filename);
            return callback(null, progressiveContext);
        }
        createContextFromFile(checker.values[contextFile] as string, progressiveContext, plugins, (err, context) => {
            if (err) {
                return callback(err, {});
            }
            const fileBasename = path.basename(contextFile);
            const contextName = fileBasename.split('.')[0];
            progressiveContext[contextName] = context;
            checker.checkNotNullOrUndefined(context, contextName, {
                message: "loaded context from " + contextFile
             })
            doLoadContext(ndx + 1)
        }
        )
    }
    doLoadContext(0)
}