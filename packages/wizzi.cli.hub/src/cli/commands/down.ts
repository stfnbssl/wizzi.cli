/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi-override\src\cli\commands\down.ts.ittf
*/
import path from 'path';
import App from '../../App';
import {downloadArtifact, downloadArtifactList, downloadPackage, downloadPackageList, downloadPlugin, downloadPluginList, downloadMeta, downloadMetaList, downloadTFolder, downloadTFolderList} from '../../actions/download';

export function getParams() {

    return [
            "down [--list|--files] [--artifact|--package|--plugin|--meta|--tfolder] --owner <name> [--name <name>] [--dest <path>]"
        ].join('\n');
}

export function executeCommand(args: any):  any {

    if (args._[0] != "down") {
        return {
                done: false
             };
    }
    if (!args.owner || (!args.artifact && !args.package && !args.plugin && !args.meta && !args.tfolder)) {
        return bad_parameters();
    }
    console.log('...executing down', args.owner, args.name, args.list, args.files, args.artifact, args.package, args.plugin, args.meta, args.tfolder, args.dest, __filename);
    const options: any = {};
    if (args.list) {
        if (!args.dest) {
            return bad_parameters();
        }
        else {
            options.destPath = path.join(args.dest, args.owner + '_' + production_kind(args) + 'List.json')
            ;
        }
    }
    else if (args.files) {
        if (!args.dest) {
            return bad_parameters();
        }
        else {
            options.destFolder = args.dest;
        }
    }
    else {
        if (!args.name || !args.dest) {
            return bad_parameters();
        }
        else {
            options.destFolder = args.dest;
        }
    }
    if (args.list || args.files) {
        if (args.artifact) {
            down_artifactList(args.owner, options)
        }
        if (args.package) {
            down_packageList(args.owner, options)
        }
        if (args.plugin) {
            down_pluginList(args.owner, options)
        }
        if (args.meta) {
            down_metaList(args.owner, options)
        }
        if (args.tfolder) {
            down_tFolderList(args.owner, options)
        }
    }
    else {
        if (args.artifact) {
            down_artifact(args.owner, args.name, options)
        }
        if (args.package) {
            down_package(args.owner, args.name, options)
        }
        if (args.plugin) {
            down_plugin(args.owner, args.name, options)
        }
        if (args.meta) {
            down_meta(args.owner, args.name, options)
        }
        if (args.tfolder) {
            down_tFolder(args.owner, args.name, options)
        }
    }
    return {
            done: true
         };
}
function production_kind(args) {

    if (args.artifact) {
        return 'artifact';
    }
    else if (args.package) {
        return 'package';
    }
    else if (args.plugin) {
        return 'plugin';
    }
    else if (args.meta) {
        return 'meta';
    }
    else {
        return 'tfolder';
    }
}
function bad_parameters() {

    return {
            done: true, 
            error: true, 
            message: getParams()
         };
}
function down_artifactList(owner: string, options: any) {

    start((err: any, app: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        downloadArtifactList(owner, options).then((result) => {
        
            console.log('downloadArtifactList', Object.keys(result));
            app.services.mongodbClose();
        }
        ).catch((err) => {
        
            console.log("[31m%s[0m", 'downloadArtifact.error', err);
            app.services.mongodbClose();
        }
        )
    }
    )
}
function down_packageList(owner: string, options: any) {

    start((err: any, app: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        downloadPackageList(owner, options).then((result) => {
        
            console.log('downloadPackageList', Object.keys(result));
            app.services.mongodbClose();
        }
        ).catch((err) => {
        
            console.log("[31m%s[0m", 'downloadPackageList.error', err);
            app.services.mongodbClose();
        }
        )
    }
    )
}
function down_pluginList(owner: string, options: any) {

    start((err: any, app: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        downloadPluginList(owner, options).then((result) => {
        
            console.log('downloadPluginList', Object.keys(result));
            app.services.mongodbClose();
        }
        ).catch((err) => {
        
            console.log("[31m%s[0m", 'downloadPluginList.error', err);
            app.services.mongodbClose();
        }
        )
    }
    )
}
function down_metaList(owner: string, options: any) {

    start((err: any, app: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        downloadMetaList(owner, options).then((result) => {
        
            console.log('downloadMetaList', Object.keys(result));
            app.services.mongodbClose();
        }
        ).catch((err) => {
        
            console.log("[31m%s[0m", 'downloadMetaList.error', err);
            app.services.mongodbClose();
        }
        )
    }
    )
}
function down_tFolderList(owner: string, options: any) {

    start((err: any, app: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        downloadTFolderList(owner, options).then((result) => {
        
            console.log('downloadTFolderList', Object.keys(result));
            app.services.mongodbClose();
        }
        ).catch((err) => {
        
            console.log("[31m%s[0m", 'downloadTFolderList.error', err);
            app.services.mongodbClose();
        }
        )
    }
    )
}
function down_artifact(owner: string, name: string, options: any) {

    start((err: any, app: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        downloadArtifact(owner, name, options).then((result) => {
        
            console.log('downloadArtifact', Object.keys(result));
            app.services.mongodbClose();
        }
        ).catch((err) => {
        
            console.log("[31m%s[0m", 'downloadArtifact.error', err);
            app.services.mongodbClose();
        }
        )
    }
    )
}
function down_package(owner: string, name: string, options: any) {

    start((err: any, app: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        downloadPackage(owner, name, options).then((result) => {
        
            console.log('downloadPackage', Object.keys(result));
            app.services.mongodbClose();
        }
        ).catch((err) => {
        
            console.log("[31m%s[0m", 'downloadPackage.error', err);
            app.services.mongodbClose();
        }
        )
    }
    )
}
function down_plugin(owner: string, name: string, options: any) {

    start((err: any, app: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        downloadPlugin(owner, name, options).then((result) => {
        
            console.log('downloadPlugin', Object.keys(result));
            app.services.mongodbClose();
        }
        ).catch((err) => {
        
            console.log("[31m%s[0m", 'downloadPlugin.error', err);
            app.services.mongodbClose();
        }
        )
    }
    )
}
function down_meta(owner: string, name: string, options: any) {

    start((err: any, app: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        downloadMeta(owner, name, options).then((result) => {
        
            console.log('downloadMeta', Object.keys(result));
            app.services.mongodbClose();
        }
        ).catch((err) => {
        
            console.log("[31m%s[0m", 'downloadMeta.error', err);
            app.services.mongodbClose();
        }
        )
    }
    )
}
function down_tFolder(owner: string, name: string, options: any) {

    start((err: any, app: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        downloadTFolder(owner, name, options).then((result) => {
        
            console.log('downloadTFolder', Object.keys(result));
            app.services.mongodbClose();
        }
        ).catch((err) => {
        
            console.log("[31m%s[0m", 'downloadTFolder.error', err);
            app.services.mongodbClose();
        }
        )
    }
    )
}

async function start(callback) {

    const app = await App.start();
    callback(null, app)
}
