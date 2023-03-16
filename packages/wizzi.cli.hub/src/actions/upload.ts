/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi-override\src\actions\upload.ts.ittf
*/
import path from 'path';
import {PackiFiles} from '../features/packi/types';
import {artifactApi, packageApi, pluginApi, tFolderApi, metaApi} from '../features/wizzi-production';
import {resourceApi} from '../features/wizzi-cdn';
import {getFileContents, getFilteredPackiFiles} from './fsrepo';

export function uploadArtifact(owner: string, name: string, description: string, mainIttf: string, wizziSchema: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => {
        
            console.log('uploadArtifact.options', options, __filename);
            getFilteredPackiFiles(options).then((packiFiles: PackiFiles) => {
            
                if (options.merge) {
                    artifactApi.mergeArtifactProductionFiles(owner, name, packiFiles, options).then((result: any) => 
                    
                        resolve(result)
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'upload.uploadArtifact.artifactApi.mergeArtifactProductionFiles.error', err);
                        return reject(err);
                    }
                    )
                }
                else if (options.create) {
                    artifactApi.createArtifactProduction(owner, name, description, mainIttf, wizziSchema, JSON.stringify(packiFiles)).then((result: any) => 
                    
                        resolve(result)
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'upload.uploadArtifact.artifactApi.createArtifactProduction.error', err);
                        return reject(err);
                    }
                    )
                }
                else if (options.update) {
                    artifactApi.getArtifactProduction(owner, name).then((ap: any) => {
                    
                        console.log('upload.uploadArtifact.artifactApi.getArtifactProduction', Object.keys(ap.item._doc), __filename);
                        artifactApi.updateArtifactProduction(ap.item._doc._id, owner, name, description, mainIttf, wizziSchema, JSON.stringify(packiFiles)).then((result: any) => 
                        
                            resolve(result)
                        ).catch((err: any) => {
                        
                            if (typeof err === 'object' && err !== null) {
                            }
                            console.log("[31m%s[0m", 'upload.uploadArtifact.artifactApi.createArtifactProduction.error', err);
                            return reject(err);
                        }
                        )
                    }
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'upload.uploadArtifact.artifactApi.getArtifactProduction.error', err);
                        return reject(err);
                    }
                    )
                }
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'upload.uploadArtifact.getFilteredPackiFiles.error', err);
                return reject(err);
            }
            )
        }
        );
}

export function uploadPackage(owner: string, name: string, description: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => {
        
            console.log('uploadPackage.sourceFolder', options.sourceFolder, __filename);
            getFilteredPackiFiles(options).then((packiFiles: PackiFiles) => {
            
                if (options.merge) {
                    packageApi.mergePackageProductionFiles(owner, name, packiFiles, options).then((result: any) => 
                    
                        resolve(result)
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'upload.uploadPackage.packageApi.mergePackageProductionFiles.error', err);
                        return reject(err);
                    }
                    )
                }
                else if (options.create) {
                    packageApi.createPackageProduction(owner, name, description, JSON.stringify(packiFiles)).then((result: any) => 
                    
                        resolve(result)
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'upload.uploadPackage.packageApi.createPackageProduction.error', err);
                        return reject(err);
                    }
                    )
                }
                else if (options.update) {
                    packageApi.getPackageProduction(owner, name).then((ap: any) => {
                    
                        console.log('upload.uploadPackage.packageApi.getPackageProduction', Object.keys(ap.item._doc), __filename);
                        packageApi.updatePackageProduction(ap.item._doc._id, owner, name, description, JSON.stringify(packiFiles)).then((result: any) => 
                        
                            resolve(result)
                        ).catch((err: any) => {
                        
                            if (typeof err === 'object' && err !== null) {
                            }
                            console.log("[31m%s[0m", 'upload.uploadPackage.packageApi.updatePackageProduction.error', err);
                            return reject(err);
                        }
                        )
                    }
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'upload.uploadPackage.packageApi.getPackageProduction.error', err);
                        return reject(err);
                    }
                    )
                }
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'upload.uploadPackage.getFilteredPackiFiles.error', err);
                return reject(err);
            }
            )
        }
        );
}

export function uploadPlugin(owner: string, name: string, description: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => {
        
            console.log('uploadPlugin.sourceFolder', options.sourceFolder, __filename);
            getFilteredPackiFiles(options).then((packiFiles: PackiFiles) => {
            
                if (options.merge) {
                    pluginApi.mergePluginProductionFiles(owner, name, packiFiles, options).then((result: any) => 
                    
                        resolve(result)
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'upload.uploadPackage.pluginApi.mergePluginProductionFiles.error', err);
                        return reject(err);
                    }
                    )
                }
                else if (options.create) {
                    pluginApi.createPluginProduction(owner, name, description, JSON.stringify(packiFiles)).then((result: any) => 
                    
                        resolve(result)
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'upload.uploadPlugin.pluginApi.createPluginProduction.error', err);
                        return reject(err);
                    }
                    )
                }
                else if (options.update) {
                    pluginApi.getPluginProduction(owner, name).then((ap: any) => {
                    
                        console.log('upload.uploadPlugin.pluginApi.getPluginProduction', Object.keys(ap.item._doc), __filename);
                        pluginApi.updatePluginProduction(ap.item._doc._id, owner, name, description, JSON.stringify(packiFiles)).then((result: any) => 
                        
                            resolve(result)
                        ).catch((err: any) => {
                        
                            if (typeof err === 'object' && err !== null) {
                            }
                            console.log("[31m%s[0m", 'upload.uploadPlugin.pluginApi.updatePluginProduction.error', err);
                            return reject(err);
                        }
                        )
                    }
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'upload.uploadPlugin.pluginApi.getPluginProduction.error', err);
                        return reject(err);
                    }
                    )
                }
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'upload.uploadPlugin.getFilteredPackiFiles.error', err);
                return reject(err);
            }
            )
        }
        );
}

export function uploadTFolder(owner: string, name: string, description: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => {
        
            console.log('uploadTFolder.sourceFolder', options.sourceFolder, __filename);
            getFilteredPackiFiles(options).then((packiFiles: PackiFiles) => {
            
                if (options.merge) {
                    tFolderApi.mergeTFolderFiles(owner, name, packiFiles, options).then((result: any) => 
                    
                        resolve(result)
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'upload.uploadTFolder.tFolderApi.mergeTFolderProductionFiles.error', err);
                        return reject(err);
                    }
                    )
                }
                else if (options.create) {
                    tFolderApi.createTFolder(owner, name, description, JSON.stringify(packiFiles)).then((result: any) => 
                    
                        resolve(result)
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'upload.uploadTFolder.tFolderApi.createTFolder.error', err);
                        return reject(err);
                    }
                    )
                }
                else if (options.update) {
                    tFolderApi.getTFolder(owner, name).then((ap: any) => {
                    
                        console.log('upload.uploadTFolder.tFolderApi.getTFolder', Object.keys(ap.item._doc), __filename);
                        tFolderApi.updateTFolder(ap.item._doc._id, owner, name, description, JSON.stringify(packiFiles)).then((result: any) => 
                        
                            resolve(result)
                        ).catch((err: any) => {
                        
                            if (typeof err === 'object' && err !== null) {
                            }
                            console.log("[31m%s[0m", 'upload.uploadTFolder.tFolderApi.updateTFolder.error', err);
                            return reject(err);
                        }
                        )
                    }
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'upload.uploadTFolder.tFolderApi.getTFolder.error', err);
                        return reject(err);
                    }
                    )
                }
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'upload.uploadTFolder.getFilteredPackiFiles.error', err);
                return reject(err);
            }
            )
        }
        );
}

export function uploadMeta(owner: string, name: string, description: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => {
        
            console.log('uploadMeta.sourceFolder', options.sourceFolder, __filename);
            getFilteredPackiFiles(options).then((packiFiles: PackiFiles) => {
            
                if (options.merge) {
                    metaApi.mergeMetaProductionFiles(owner, name, packiFiles, options).then((result: any) => 
                    
                        resolve(result)
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'upload.uploadMeta.metaApi.mergeMetaProductionFiles.error', err);
                        return reject(err);
                    }
                    )
                }
                else if (options.create) {
                    metaApi.createMetaProduction(owner, name, description, JSON.stringify(packiFiles)).then((result: any) => 
                    
                        resolve(result)
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'upload.uploadMeta.metaApi.createMetaProduction.error', err);
                        return reject(err);
                    }
                    )
                }
                else if (options.update) {
                    metaApi.getMetaProduction(owner, name).then((ap: any) => {
                    
                        console.log('upload.uploadMeta.metaApi.getMetaProduction', Object.keys(ap.item._doc), __filename);
                        metaApi.updateMetaProduction(ap.item._doc._id, owner, name, description, JSON.stringify(packiFiles)).then((result: any) => 
                        
                            resolve(result)
                        ).catch((err: any) => {
                        
                            if (typeof err === 'object' && err !== null) {
                            }
                            console.log("[31m%s[0m", 'upload.uploadMeta.metaApi.updateMetaProduction.error', err);
                            return reject(err);
                        }
                        )
                    }
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'upload.uploadMeta.metaApi.getMetaProduction.error', err);
                        return reject(err);
                    }
                    )
                }
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'upload.uploadMeta.getFilteredPackiFiles.error', err);
                return reject(err);
            }
            )
        }
        );
}

export function uploadCdnResource(owner: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => {
        
            console.log('uploadCdnResource.sourceFile.sourceFolder', options.sourceFile, options.sourceFolder, __filename);
            if (options.sourceFile && options.sourceFile.length > 0) {
                getFileContents(options).then((contents: string) => 
                
                    resourceApi.createCdnResource(owner, options.name, contents).then((result: any) => 
                    
                        resolve(result)
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'upload.uploadCdnResource.resourceApi.createCdnResource.error', err);
                        return reject(err);
                    }
                    )
                
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'upload.uploadMeta.getFilteredPackiFiles.error', err);
                    return reject(err);
                }
                )
            }
            else if (options.sourceFolder && options.sourceFolder.length > 0) {
                getFilteredPackiFiles(options).then((packiFiles: PackiFiles) => {
                
                    const paths = Object.keys(packiFiles);
                    var count = -1;
                    function execUpload() {
                    
                        count++;
                        if (count >= paths.length) {
                            return resolve(paths);
                        }
                        resourceApi.createCdnResource(owner, paths[count], packiFiles[paths[count]].contents).then((result: any) => {
                        
                            console.log('uploadCdnResource', paths[count], "uploaded", __filename);
                            execUpload();
                        }
                        ).catch((err: any) => {
                        
                            if (typeof err === 'object' && err !== null) {
                            }
                            console.log("[31m%s[0m", 'upload.uploadCdnResource.resourceApi.createCdnResource.error', err);
                            return reject(err);
                        }
                        )
                    }
                    execUpload();
                }
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'upload.uploadCdnResource.getFilteredPackiFiles.error', err);
                    return reject(err);
                }
                )
            }
        }
        );
}
