/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi-override\src\cdn.ts.ittf
    utc time: Thu, 25 Apr 2024 08:28:32 GMT
*/
import path from 'path';
const minimist = require('minimist');
import App from './App';
import {uploadCdnResource} from './actions/upload';
import {downloadCdnResource} from './actions/download';

const args = minimist(process.argv.slice(2));
let cmd = args._[0];
let p1 = args._[1];
let p2 = args._[2];
let p3 = args._[3];
console.log('args', args, 'cmd', cmd);
if (cmd == 'down') {
    const destFolder = path.join(__dirname, 'downloads', 'cdn');
    if (p1 == 'all') {
        start((err: any, app: any) => {
        
            if (err) {
                console.log("[31m%s[0m", 'err', err);
                throw err;
            }
            downloadCdnResource('stfnbssl', {
                destFolder: destFolder
             }).then(() => 
            
                app.services.mongodbClose()
            )
        }
        )
    }
    else {
        start((err: any, app: any) => {
        
            if (err) {
                console.log("[31m%s[0m", 'err', err);
                throw err;
            }
            downloadCdnResource('stfnbssl', {
                name: p1, 
                destFolder: destFolder
             }).then(() => 
            
                app.services.mongodbClose()
            )
        }
        )
    }
}
if (cmd == 'up') {
    if (p1 == 'folder') {
        uploadFolder(p2)
    }
}
function uploadFolder(folder) {

    start((err: any, app: any) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            throw err;
        }
        const sourceFolder = path.join(__dirname, 'uploads', folder);
        uploadCdnResource('stfnbssl', {
            sourceFolder: sourceFolder
         }).then(() => 
        
            app.services.mongodbClose()
        )
    }
    )
}

async function start(callback) {

    const app = await App.start();
    callback(null, app)
}

