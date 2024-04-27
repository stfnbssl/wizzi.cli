/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi-override\src\actions\fsrepo.ts.ittf
    utc time: Thu, 25 Apr 2024 08:28:32 GMT
*/
import path from 'path';
import {fSystem} from '@wizzi/utils';
import {PackiFiles} from '../features/packi/types';
import {wizziProds} from '../features/wizzi';
import {ittfToMeta} from '../utils/ittf';

export function getFilteredPackiFiles(options: any):  Promise<PackiFiles> {

    return new Promise((resolve, reject) => 
        
            fSystem.vfile().getFiles(options.sourceFolder, {
                deep: true, 
                documentContent: true
             }, (err: any, files: any) => {
            
                if (err) {
                    return reject(err);
                }
                const result: PackiFiles = {};
                var i, i_items=files, i_len=files.length, f;
                for (i=0; i<i_len; i++) {
                    f = files[i];
                    if (!options.filter || options.filter(f.relPath, f.content)) {
                        result[f.relPath] = {
                            type: "CODE", 
                            contents: f.content
                         };
                    }
                }
                resolve(result)
            }
            )
        );
}

export function getFileContents(options: any):  Promise<string> {

    return new Promise((resolve, reject) => 
        
            fSystem.vfile().read(options.sourceFile, (err: any, contents: any) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(contents)
            }
            )
        );
}

export function writePackiToDest(packiFiles: PackiFiles, destFolder: string, destMetaFolder?: string) {

    var i, i_items=Object.keys(packiFiles), i_len=Object.keys(packiFiles).length, k;
    for (i=0; i<i_len; i++) {
        k = Object.keys(packiFiles)[i];
        fSystem.vfile().write(path.join(destFolder, k), packiFiles[k].contents)
        if (destMetaFolder) {
            fSystem.vfile().write(path.join(destMetaFolder, k), ittfToMeta(packiFiles[k].contents))
        }
    }
}

export function getFileJSON(options: any):  Promise<string> {

    return new Promise((resolve, reject) => {
        
            if (options.sourceFile.endsWith(".ittf")) {
                wizziProds.generateArtifactFs(options.sourceFile).then((contents: any) => 
                
                    resolve(JSON.parse(contents.artifactContent))
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'fsrepo.getFileJSON.generateArtifactFs.error', err);
                    throw new Error(err);
                }
                )
            }
            else {
                fSystem.vfile().read(options.sourceFile, (err: any, contents: any) => {
                
                    if (err) {
                        return reject(err);
                    }
                    resolve(JSON.parse(contents))
                }
                )
            }
        }
        );
}

export // 
function createPackifilesFromFs(folderPath, callback) {

    const fsFile = fSystem.vfile();
    fsFile.getFiles(folderPath, {
        deep: true, 
        documentContent: true
     }, (err: any, files: any) => {
    
        if (err) {
            return callback(err);
        }
        const packiFiles = {};
        var i, i_items=files, i_len=files.length, file;
        for (i=0; i<i_len; i++) {
            file = files[i];
            packiFiles[file.relPath] = {
                type: 'CODE', 
                contents: file.content
             };
        }
        return callback(null, packiFiles);
    }
    )
}
