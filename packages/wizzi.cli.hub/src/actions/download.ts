/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi-override\src\actions\download.ts.ittf
*/
import path from 'path';
import {fSystem, verify} from 'wizzi-utils';
import {PackiFiles} from '../features/packi/types';
import {artifactApi, packageApi, pluginApi, tFolderApi, metaApi} from '../features/wizzi-production';
import {resourceApi} from '../features/wizzi-cdn';
import {ittfToMeta} from '../utils/ittf';

export function downloadArtifactList(owner: string, options: any):  Promise<any> {

    console.log('downloadArtifactList.options.filter', options.filter);
    return new Promise((resolve, reject) => 
        
            artifactApi.getArtifactProductionList({
                owner: owner
             }).then((result: any) => {
            
                if (options.destPath) {
                    writeJSONToDest(options.destPath, result)
                }
                if (options.destFolder) {
                    var i, i_items=result.item, i_len=result.item.length, item;
                    for (i=0; i<i_len; i++) {
                        item = result.item[i];
                        const packiFiles: PackiFiles = JSON.parse(item.packiFiles);
                        writePackiToDest(filterPackiFiles(packiFiles, {
                            filter: options.filter, 
                            name: verify.replaceAll(item.name, '/', '%2F')
                         }), path.join(options.destFolder, verify.replaceAll(item.name, '/', '%2F')), path.join(options.destMetaFolder, verify.replaceAll(item.name, '/', '%2F')))
                    }
                }
                return resolve(result.item);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'download.downloadArtifact.getArtifactProductionList.error', err);
                return reject(err);
            }
            )
        
        );
}

export function downloadArtifact(owner: string, name: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => 
        
            artifactApi.getArtifactProductionObject(owner, name).then((result: any) => {
            
                if (options.destFolder) {
                    writePackiToDest(filterPackiFiles(result.packiFiles, options), options.destFolder)
                }
                return resolve(result.item);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'download.downloadArtifact.getArtifactProductionObject.error', err);
                return reject(err);
            }
            )
        
        );
}

export function downloadPackageList(owner: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => 
        
            packageApi.getPackageProductionList({
                owner: owner
             }).then((result: any) => {
            
                if (options.destPath) {
                    writeJSONToDest(options.destPath, result)
                }
                if (options.destFolder) {
                    var i, i_items=result.item, i_len=result.item.length, item;
                    for (i=0; i<i_len; i++) {
                        item = result.item[i];
                        const packiFiles: PackiFiles = JSON.parse(item.packiFiles);
                        writePackiToDest(filterPackiFiles(packiFiles, {
                            filter: options.filter, 
                            name: verify.replaceAll(item.name, '/', '%2F')
                         }), path.join(options.destFolder, verify.replaceAll(item.name, '/', '%2F')), path.join(options.destMetaFolder, verify.replaceAll(item.name, '/', '%2F')))
                    }
                }
                return resolve(result.item);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'download.downloadPackage.getPackageProductionList.error', err);
                return reject(err);
            }
            )
        
        );
}

export function downloadPackage(owner: string, name: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => 
        
            packageApi.getPackageProductionObject(owner, name).then((result: any) => {
            
                if (options.destFolder) {
                    writePackiToDest(filterPackiFiles(result.packiFiles, options), options.destFolder)
                }
                return resolve(result.item);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'download.downloadPackage.getPackageProductionObject.error', err);
                return reject(err);
            }
            )
        
        );
}

export function downloadPluginList(owner: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => 
        
            pluginApi.getPluginProductionList({
                owner: owner
             }).then((result: any) => {
            
                if (options.destPath) {
                    writeJSONToDest(options.destPath, result)
                }
                if (options.destFolder) {
                    var i, i_items=result.item, i_len=result.item.length, item;
                    for (i=0; i<i_len; i++) {
                        item = result.item[i];
                        const packiFiles: PackiFiles = JSON.parse(item.packiFiles);
                        writePackiToDest(filterPackiFiles(packiFiles, {
                            filter: options.filter, 
                            name: verify.replaceAll(item.name, '/', '%2F')
                         }), path.join(options.destFolder, verify.replaceAll(item.name, '/', '%2F')), path.join(options.destMetaFolder, verify.replaceAll(item.name, '/', '%2F')))
                    }
                }
                return resolve(result.item);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'download.downloadPlugin.getPluginProductionList.error', err);
                return reject(err);
            }
            )
        
        );
}

export function downloadPlugin(owner: string, name: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => 
        
            pluginApi.getPluginProductionObject(owner, name).then((result: any) => {
            
                if (options.destFolder) {
                    writePackiToDest(filterPackiFiles(result.packiFiles, options), options.destFolder)
                }
                return resolve(result.item);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'download.downloadPlugin.getPluginProductionObject.error', err);
                return reject(err);
            }
            )
        
        );
}

export function downloadMetaList(owner: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => 
        
            metaApi.getMetaProductionList({
                owner: owner
             }).then((result: any) => {
            
                if (options.destPath) {
                    writeJSONToDest(options.destPath, result)
                }
                if (options.destFolder) {
                    var i, i_items=result.item, i_len=result.item.length, item;
                    for (i=0; i<i_len; i++) {
                        item = result.item[i];
                        const packiFiles: PackiFiles = JSON.parse(item.packiFiles);
                        writePackiToDest(filterPackiFiles(packiFiles, {
                            filter: options.filter, 
                            name: verify.replaceAll(item.name, '/', '%2F')
                         }), path.join(options.destFolder, verify.replaceAll(item.name, '/', '%2F')), path.join(options.destMetaFolder, verify.replaceAll(item.name, '/', '%2F')))
                    }
                }
                return resolve(result.item);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'download.downloadMeta.getMetaProductionList.error', err);
                return reject(err);
            }
            )
        
        );
}

export function downloadMeta(owner: string, name: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => 
        
            metaApi.getMetaProductionObject(owner, name).then((result: any) => {
            
                if (options.destFolder) {
                    writePackiToDest(filterPackiFiles(result.packiFiles, options), options.destFolder)
                }
                return resolve(result.item);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'download.downloadMeta.getMetaProductionObject.error', err);
                return reject(err);
            }
            )
        
        );
}

export function downloadTFolderList(owner: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => 
        
            tFolderApi.getTFolderList({
                owner: owner
             }).then((result: any) => {
            
                if (options.destPath) {
                    writeJSONToDest(options.destPath, result)
                }
                if (options.destFolder) {
                    var i, i_items=result.item, i_len=result.item.length, item;
                    for (i=0; i<i_len; i++) {
                        item = result.item[i];
                        const packiFiles: PackiFiles = JSON.parse(item.packiFiles);
                        writePackiToDest(filterPackiFiles(packiFiles, {
                            filter: options.filter, 
                            name: verify.replaceAll(item.name, '/', '%2F')
                         }), path.join(options.destFolder, verify.replaceAll(item.name, '/', '%2F')), path.join(options.destMetaFolder, verify.replaceAll(item.name, '/', '%2F')))
                    }
                }
                return resolve(result.item);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'download.downloadTFolder.getTFolderProductionList.error', err);
                return reject(err);
            }
            )
        
        );
}

export function downloadTFolder(owner: string, name: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => 
        
            tFolderApi.getTFolderObject(owner, name).then((result: any) => {
            
                if (options.destFolder) {
                    writePackiToDest(filterPackiFiles(result.packiFiles, options), options.destFolder)
                }
                return resolve(result.item);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'download.downloadTFolder.getTFolderObject.error', err);
                return reject(err);
            }
            )
        
        );
}

export function downloadCdnResource(owner: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => {
        
            if (options.name) {
                resourceApi.getCdnResource(owner, options.name).then((result: any) => 
                
                    writeToDest(path.join(options.destFolder, options.name), result.contents)
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'download.downloadCdnResource.getCdnResource.error', err);
                    return reject(err);
                }
                )
            }
            else {
                resourceApi.getCdnResourceList(owner).then((result: any) => {
                
                    if (options.destFolder) {
                        writeFilesToDest(filterFiles(result.item, options), options.destFolder)
                    }
                    return resolve(result.item);
                }
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'download.downloadCdnResource.getCdnResourceList.error', err);
                    return reject(err);
                }
                )
            }
        }
        );
}

// loog 'filterPackiFiles.filter', options
function filterPackiFiles(packiFiles: PackiFiles, options: any) {

    if (!options || !options.filter) {
        return packiFiles;
    }
    else {
        const result: PackiFiles = {};
        var i, i_items=Object.keys(packiFiles), i_len=Object.keys(packiFiles).length, k;
        for (i=0; i<i_len; i++) {
            k = Object.keys(packiFiles)[i];
            console.log('filterPackiFiles', options.name + '/' + k , options.filter(k, packiFiles[k].type, packiFiles[k].contents), __filename);
            if (options.filter(options.name + '/' + k, packiFiles[k].type, packiFiles[k].contents)) {
                result[k] = packiFiles[k];
            }
        }
        return result;
    }
}

function writePackiToDest(packiFiles: PackiFiles, destFolder: string, destMetaFolder?: string) {

    var i, i_items=Object.keys(packiFiles), i_len=Object.keys(packiFiles).length, k;
    for (i=0; i<i_len; i++) {
        k = Object.keys(packiFiles)[i];
        fSystem.vfile().write(path.join(destFolder, k), packiFiles[k].contents)
        if (destMetaFolder) {
            fSystem.vfile().write(path.join(destMetaFolder, k + '.ittf'), ittfToMeta(packiFiles[k].contents))
        }
    }
}

function writeToDest(destPath: string, json: string) {

    fSystem.vfile().write(destPath, json)
}
function writeJSONToDest(destPath: string, json: any) {

    fSystem.vfile().write(destPath, JSON.stringify(json, null, 2))
}

function filterFiles(files: any, options: any) {

    if (!options || !options.filter) {
        return files;
    }
    else {
        const result: any = [];
        for (const file of files) {
            if (options.filter(file)) {
                result.push(file)
            }
        }
        return result;
    }
}

function writeFilesToDest(files: any, destFolder: string) {

    for (const file of files) {
        fSystem.vfile().write(path.join(destFolder, file.name), file.contents)
    }
}
