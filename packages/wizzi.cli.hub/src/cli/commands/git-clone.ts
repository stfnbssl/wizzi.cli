/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi-override\src\cli\commands\git-clone.ts.ittf
*/
import path from 'path';
import {downloadGitRepo} from '../../actions/gitrepo';

export function getParams() {

    return [
            "git clone --owner <name> --package <name> --branch <name> [--dest <path>] [--ittf <path>]"
        ].join('\n');
}

export function executeCommand(args: any):  any {

    if (args._[0] != "git" || args._[1] != "clone") {
        return {
                done: false
             };
    }
    if (args.owner && args.owner.length > 0 && args.package && args.package.length > 0 && args.branch && args.branch.length > 0) {
        console.log('...executing git clone', args.owner, args.package, args.branch, args.dest, args.ittf, __filename);
        const options: any = {};
        if (args.dest && args.dest.length > 0) {
            options.destFolder = args.dest;
        }
        if (args.ittf && args.ittf.length > 0) {
            options.destFolderIttf = args.ittf;
        }
        downloadGitRepo(args.owner, args.package, args.branch, options).then((filteredRepoFiles) => {
        
            console.log('filteredRepoFiles', Object.keys(filteredRepoFiles), __filename);
        }
        )
        return {
                done: true
             };
    }
    else {
        return {
                done: true, 
                error: true, 
                message: getParams()
             };
    }
}
