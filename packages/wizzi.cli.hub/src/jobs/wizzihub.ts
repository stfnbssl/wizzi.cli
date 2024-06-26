/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi-override\src\jobs\wizzihub.ts.ittf
    utc time: Thu, 25 Apr 2024 08:28:32 GMT
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
         }).then(result => 
        
            app.services.mongodbClose()
        ).catch(err => 
        
            app.services.mongodbClose()
        )
    }
    )
}
export function uploadWizzihubPackage(name, description, action) {

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
         }).then(result => 
        
            app.services.mongodbClose()
        ).catch(err => 
        
            app.services.mongodbClose()
        )
    }
    )
}
export function uploadWizzihubPlugin(name, description, action) {

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
         }).then(result => 
        
            app.services.mongodbClose()
        ).catch(err => 
        
            app.services.mongodbClose()
        )
    }
    )
}
export function uploadWizzihubMeta(name, description, action) {

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
         }).then(result => 
        
            app.services.mongodbClose()
        ).catch(err => 
        
            app.services.mongodbClose()
        )
    }
    )
}
export function uploadWizzihubTFolder(name, description, action) {

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
         }).then(result => 
        
            app.services.mongodbClose()
        ).catch(err => 
        
            app.services.mongodbClose()
        )
    }
    )
}
export function downloadWizzihub(options: any) {

    options = options || {};
    console.log('downloadWizzihub.options.metaFolder', options.metaFolder);
    console.log('downloadWizzihub.options.filter', options.filter);
    start((err: any, startedapp: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        app = startedapp;
        if (options.artifacts) {
            options.all = false;
            downloadWizzihubArtifacts(options)
        }
        if (options.packages) {
            options.all = false;
            downloadWizzihubPackages(options)
        }
        if (options.plugins) {
            options.all = false;
            downloadWizzihubPlugins(options)
        }
        if (options.metas) {
            options.all = false;
            downloadWizzihubMetas(options)
        }
        if (options.tFolders) {
            options.all = false;
            downloadWizzihubTFolders(options)
        }
        if (options.all) {
            downloadWizzihubArtifacts(options)
        }
    }
    )
}
function downloadWizzihubArtifacts(options: any) {

    options = options || {};
    downloadArtifactList("stfnbssl", {
        destPath: path.join(__dirname, '..', 'downloads', 'artifactList.json'), 
        destFolder: path.join(wizzihubProductionsFolder, 'downloads', 'artifacts'), 
        destMetaFolder: options.metaFolder ? path.join(options.metaFolder, 'artifacts') : null, 
        filter: options.filter
     }).then((result) => {
    
        if (options.all) {
            downloadWizzihubPackages(options)
        }
        else {
            app.services.mongodbClose();
        }
    }
    ).catch(err => 
    
        app.services.mongodbClose()
    )
}
function downloadWizzihubPackages(options: any) {

    options = options || {};
    downloadPackageList("stfnbssl", {
        destPath: path.join(__dirname, '..', 'downloads', 'packageList.json'), 
        destFolder: path.join(wizzihubProductionsFolder, 'downloads', 'packages'), 
        destMetaFolder: options.metaFolder ? path.join(options.metaFolder, 'packages') : null, 
        filter: options.filter
     }).then((result) => {
    
        if (options.all) {
            downloadWizzihubPlugins(options)
        }
        else {
            app.services.mongodbClose();
        }
    }
    ).catch(err => 
    
        app.services.mongodbClose()
    )
}
function downloadWizzihubPlugins(options: any) {

    options = options || {};
    downloadPluginList("stfnbssl", {
        destPath: path.join(__dirname, '..', 'downloads', 'pluginList.json'), 
        destFolder: path.join(wizzihubProductionsFolder, 'downloads', 'plugins'), 
        destMetaFolder: options.metaFolder ? path.join(options.metaFolder, 'plugins') : null, 
        filter: options.filter
     }).then((result) => {
    
        if (options.all) {
            downloadWizzihubMetas(options)
        }
        else {
            app.services.mongodbClose();
        }
    }
    ).catch(err => 
    
        app.services.mongodbClose()
    )
}
function downloadWizzihubMetas(options: any) {

    options = options || {};
    downloadMetaList("stfnbssl", {
        destPath: path.join(__dirname, '..', 'downloads', 'metaList.json'), 
        destFolder: path.join(wizzihubProductionsFolder, 'downloads', 'metas'), 
        destMetaFolder: options.metaFolder ? path.join(options.metaFolder, 'metas') : null, 
        filter: options.filter
     }).then((result) => {
    
        if (options.all) {
            downloadWizzihubTFolders(options)
        }
        else {
            app.services.mongodbClose();
        }
    }
    ).catch(err => 
    
        app.services.mongodbClose()
    )
}
function downloadWizzihubTFolders(options: any) {

    options = options || {};
    downloadTFolderList("stfnbssl", {
        destPath: path.join(__dirname, '..', 'downloads', 'tfolderList.json'), 
        destFolder: path.join(wizzihubProductionsFolder, 'downloads', 'tfolders'), 
        destMetaFolder: options.metaFolder ? path.join(options.metaFolder, 'tfolders') : null, 
        filter: options.filter
     }).then(result => 
    
        app.services.mongodbClose()
    ).catch(err => 
    
        app.services.mongodbClose()
    )
}

async function start(callback) {

    const app = await App.start();
    callback(null, app)
}
