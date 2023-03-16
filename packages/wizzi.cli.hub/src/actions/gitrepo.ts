/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi-override\src\actions\gitrepo.ts.ittf
*/
import path from 'path';
import {fSystem} from 'wizzi-utils';
import {PackiFiles} from '../features/packi/types';
import {githubApiCalls} from '../features/github';
import {wizziProds} from '../features/wizzi';
import {config} from '../features/config';

export function downloadGitRepo(owner: string, repoName: string, branchName: string, options: any):  Promise<any> {

    return new Promise((resolve, reject) => 
        
            githubApiCalls.cloneBranch({
                owner: owner, 
                name: repoName, 
                token: config.githubAccessToken
             }, branchName || 'main').then((clonedBranch: any) => {
            
                const filteredRepoFiles = filterRepoFiles(clonedBranch.files, options);
                if (options.destFolder) {
                    writeToDest(filteredRepoFiles, options.destFolder)
                }
                if (options.destFolderIttf) {
                    wizzifyAndWriteToDestIttf(filteredRepoFiles, options.destFolderIttf).then((result: any) => 
                    
                        resolve(result)
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'gitrepo.downloadGitRepo.wizzifyAndWriteToDestIttf.error', err);
                        return reject(err);
                    }
                    )
                }
                else {
                    return resolve(filteredRepoFiles);
                }
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'gitrepo.downloadGitRepo.githubApiCalls.cloneBranch.error', err);
                return reject(err);
            }
            )
        
        );
}

function filterRepoFiles(packiFiles: PackiFiles, options: any) {

    if (!options || !options.filter) {
        return packiFiles;
    }
    else {
        const result: PackiFiles = {};
        var i, i_items=Object.keys(packiFiles), i_len=Object.keys(packiFiles).length, k;
        for (i=0; i<i_len; i++) {
            k = Object.keys(packiFiles)[i];
            if (options.filter(k, packiFiles[k].type, packiFiles[k].contents)) {
                result[k] = packiFiles[k];
            }
        }
        return result;
    }
}

function writeToDest(packiFiles: PackiFiles, destFolder: string) {

    var i, i_items=Object.keys(packiFiles), i_len=Object.keys(packiFiles).length, k;
    for (i=0; i<i_len; i++) {
        k = Object.keys(packiFiles)[i];
        fSystem.vfile().write(path.join(destFolder, k), packiFiles[k].contents)
    }
}

function wizzifyAndWriteToDestIttf(packiFiles: PackiFiles, destFolderIttf: string):  Promise<any> {

    return new Promise((resolve, reject) => 
        
            wizziProds.wizzify(packiFiles).then((wizzifiedPackiFiles: any) => {
            
                writeToDest(wizzifiedPackiFiles, destFolderIttf)
                resolve(wizzifiedPackiFiles)
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'gitrepo.wizzifyAndWriteToDestIttf.wizzify.error', err);
                return reject(err);
            }
            )
        
        );
}
