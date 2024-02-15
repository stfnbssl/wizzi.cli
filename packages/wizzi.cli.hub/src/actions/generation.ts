/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi-override\src\actions\generation.ts.ittf
    utc time: Fri, 02 Feb 2024 10:28:47 GMT
*/
import path from 'path';
import {PackiFiles} from '../features/packi/types';
import {metaApi} from '../features/wizzi-production';
import {writePackiToDest, getFileJSON} from './fsrepo';
import App from '../App';

var app: any;

export function generateMetaFolder(owner: string, name: string, options: any) {

    start((err: any, startedapp: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        app = startedapp;
        if (options.cliCtxSourceFile) {
            getFileJSON({
                sourceFile: options.cliCtxSourceFile
             }).then((json: any) => 
            
                execGenerateMetaFolder(owner, name, json, options, app)
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'generation.generateMetaFolder.getFileJSON.error', err);
                throw new Error(err);
            }
            )
        }
        else {
            execGenerateMetaFolder(owner, name, options.cliCtx || {}, options, app)
        }
    }
    )
}

function execGenerateMetaFolder(owner: string, name: string, cliCtx: any, options: any, app: any) {

    metaApi.generateMetaProduction(owner, name, cliCtx).then((files: PackiFiles) => {
    
        writePackiToDest(files, options.destFolder)
        app.services.mongodbClose();
    }
    ).catch((err: any) => {
    
        if (typeof err === 'object' && err !== null) {
        }
        console.log("[31m%s[0m", 'generation.execGenerateMetaFolder.generateMetaProduction.error', err);
        throw new Error(err);
    }
    )
}

async function start(callback) {

    const app = await App.start();
    callback(null, app)
}
