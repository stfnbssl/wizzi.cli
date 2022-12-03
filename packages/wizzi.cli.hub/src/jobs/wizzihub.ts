/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi-override\src\jobs\wizzihub.ts.ittf
*/
import path from 'path';
import {config} from '../features/config';
import {artifactApi} from '../features/wizzi-production';
import App from '../App';
import {downloadArtifact, downloadArtifactList, downloadPackage, downloadPackageList, downloadPlugin, downloadPluginList, downloadMeta, downloadMetaList, downloadTFolder, downloadTFolderList} from '../actions/download';
import {uploadArtifact, uploadPackage, uploadPlugin, uploadMeta, uploadTFolder} from '../actions/upload';
const wizzihubProductionsFolder = "C:/My/wizzi/stfnbssl/wizzihub-productions";
var app: any;
export function uploadWizzihubArtifact(name, description, mainIttf, wizziSchema, action) {

    console.log('uploadWizzihubArtifact.action', action, __filename);
    start((err: any, startedapp: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        app = startedapp;
        uploadArtifact("stfnbssl", decodeURIComponent(name), description, mainIttf, wizziSchema, {
            create: action == 'create', 
            update: action == 'update', 
            sourceFolder: path.join(wizzihubProductionsFolder, "uploads", "artifacts", name)
         }).then((result) => {
        
            console.log('uploadArtifact', name, result, __filename);
            app.services.mongodbClose();
        }
        ).catch((err) => {
        
            console.log('uploadArtifact.error', err, __filename);
            app.services.mongodbClose();
        }
        )
    }
    )
}
export function uploadWizzihubPackage(name, description, action) {

    console.log('uploadWizzihubPackage.action', action, __filename);
    start((err: any, startedapp: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        app = startedapp;
        uploadPackage("stfnbssl", decodeURIComponent(name), description, {
            create: action == 'create', 
            update: action == 'update', 
            sourceFolder: path.join(wizzihubProductionsFolder, "uploads", "packages", name)
         }).then((result) => {
        
            console.log('uploadPackage', name, result, __filename);
            app.services.mongodbClose();
        }
        ).catch((err) => {
        
            console.log('uploadPackage.error', err, __filename);
            app.services.mongodbClose();
        }
        )
    }
    )
}
export function uploadWizzihubPlugin(name, description, action) {

    console.log('uploadWizzihubPlugin.action', action, __filename);
    start((err: any, startedapp: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        app = startedapp;
        uploadPlugin("stfnbssl", decodeURIComponent(name), description, {
            create: action == 'create', 
            update: action == 'update', 
            sourceFolder: path.join(wizzihubProductionsFolder, "uploads", "plugins", name)
         }).then((result) => {
        
            console.log('uploadPlugin', name, result, __filename);
            app.services.mongodbClose();
        }
        ).catch((err) => {
        
            console.log('uploadPlugin.error', err, __filename);
            app.services.mongodbClose();
        }
        )
    }
    )
}
export function uploadWizzihubMeta(name, description, action) {

    console.log('uploadWizzihubMeta.action', action, __filename);
    start((err: any, startedapp: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        app = startedapp;
        uploadMeta("stfnbssl", decodeURIComponent(name), description, {
            create: action == 'create', 
            update: action == 'update', 
            sourceFolder: path.join(wizzihubProductionsFolder, "uploads", "metas", name)
         }).then((result) => {
        
            console.log('uploadMeta', name, result, __filename);
            app.services.mongodbClose();
        }
        ).catch((err) => {
        
            console.log('uploadMeta.error', err, __filename);
            app.services.mongodbClose();
        }
        )
    }
    )
}
export function uploadWizzihubTFolder(name, description, action) {

    console.log('uploadWizzihubTFolder.action', action, __filename);
    start((err: any, startedapp: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        app = startedapp;
        uploadTFolder("stfnbssl", decodeURIComponent(name), description, {
            create: action == 'create', 
            update: action == 'update', 
            sourceFolder: path.join(wizzihubProductionsFolder, "uploads", "tfolders", name)
         }).then((result) => {
        
            console.log('uploadTFolder', name, result, __filename);
            app.services.mongodbClose();
        }
        ).catch((err) => {
        
            console.log('uploadTFolder.error', err, __filename);
            app.services.mongodbClose();
        }
        )
    }
    )
}
export function downloadWizzihub(options: any) {

    options = options || {};
    start((err: any, startedapp: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        app = startedapp;
        if (options.artifacts) {
            downloadWizzihubArtifacts({
                all: false
             })
        }
        if (options.packages) {
            downloadWizzihubPackages({
                all: false
             })
        }
        if (options.plugins) {
            downloadWizzihubPlugins({
                all: false
             })
        }
        if (options.metas) {
            downloadWizzihubMetas({
                all: false
             })
        }
        if (options.tFolders) {
            downloadWizzihubTFolders({
                all: false
             })
        }
        if (options.all) {
            downloadWizzihubArtifacts({
                all: true
             })
        }
    }
    )
}
function downloadWizzihubArtifacts(options: any) {

    options = options || {};
    downloadArtifactList("stfnbssl", {
        destPath: path.join(__dirname, '..', 'downloads', 'artifactList.json'), 
        destFolder: path.join(wizzihubProductionsFolder, 'downloads', 'artifacts')
     }).then((result) => {
    
        console.log('downloadArtifactList', result.length, __filename);
        if (options.all) {
            downloadWizzihubPackages(options)
        }
        else {
            app.services.mongodbClose();
        }
    }
    ).catch((err) => {
    
        console.log('downloadArtifact.error', err, __filename);
        app.services.mongodbClose();
    }
    )
}
function downloadWizzihubPackages(options: any) {

    options = options || {};
    downloadPackageList("stfnbssl", {
        destPath: path.join(__dirname, '..', 'downloads', 'packageList.json'), 
        destFolder: path.join(wizzihubProductionsFolder, 'downloads', 'packages')
     }).then((result) => {
    
        console.log('downloadPackageList', result.length, __filename);
        if (options.all) {
            downloadWizzihubPlugins(options)
        }
        else {
            app.services.mongodbClose();
        }
    }
    ).catch((err) => {
    
        console.log('downloadPackageList.error', err, __filename);
        app.services.mongodbClose();
    }
    )
}
function downloadWizzihubPlugins(options: any) {

    options = options || {};
    downloadPluginList("stfnbssl", {
        destPath: path.join(__dirname, '..', 'downloads', 'pluginList.json'), 
        destFolder: path.join(wizzihubProductionsFolder, 'downloads', 'plugins')
     }).then((result) => {
    
        console.log('downloadPluginList', result.length, __filename);
        if (options.all) {
            downloadWizzihubMetas(options)
        }
        else {
            app.services.mongodbClose();
        }
    }
    ).catch((err) => {
    
        console.log('downloadPluginList.error', err, __filename);
        app.services.mongodbClose();
    }
    )
}
function downloadWizzihubMetas(options: any) {

    options = options || {};
    downloadMetaList("stfnbssl", {
        destPath: path.join(__dirname, '..', 'downloads', 'metaList.json'), 
        destFolder: path.join(wizzihubProductionsFolder, 'downloads', 'metas')
     }).then((result) => {
    
        console.log('downloadMetaList', result.length, __filename);
        if (options.all) {
            downloadWizzihubTFolders(options)
        }
        else {
            app.services.mongodbClose();
        }
    }
    ).catch((err) => {
    
        console.log('downloadMetaList.error', err, __filename);
        app.services.mongodbClose();
    }
    )
}
function downloadWizzihubTFolders(options: any) {

    options = options || {};
    downloadTFolderList("stfnbssl", {
        destPath: path.join(__dirname, '..', 'downloads', 'tfolderList.json'), 
        destFolder: path.join(wizzihubProductionsFolder, 'downloads', 'tfolders')
     }).then((result) => {
    
        console.log('downloadTFolderList', result.length, __filename);
        app.services.mongodbClose();
    }
    ).catch((err) => {
    
        console.log('downloadTFolderList.error', err, __filename);
        app.services.mongodbClose();
    }
    )
}

async function start(callback) {

    const app = await App.start();
    callback(null, app)
}
