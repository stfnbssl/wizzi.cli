/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi-override\src\index.ts.ittf
    utc time: Fri, 02 Feb 2024 10:28:47 GMT
*/
import path from 'path';
const minimist = require('minimist');
//
import {githubApiCalls} from './features/github';
import {config} from './features/config';
import {artifactApi} from './features/wizzi-production';
import App from './App';
import {downloadArtifact, downloadArtifactList, downloadPackage, downloadPackageList, downloadPlugin, downloadPluginList, downloadMeta, downloadMetaList, downloadTFolder, downloadTFolderList} from './actions/download';
import {uploadArtifact, uploadPackage, uploadPlugin, uploadMeta, uploadTFolder} from './actions/upload';
import {downloadGitRepo} from './actions/gitrepo';
import {generateMetaFolder} from './actions/generation';
import {downloadWizzihub, uploadWizzihubArtifact, uploadWizzihubPackage, uploadWizzihubPlugin, uploadWizzihubMeta, uploadWizzihubTFolder} from './jobs/wizzihub';

const args = minimist(process.argv.slice(2));
let cmd = args._[0];
let p_list = args.list;
let p_dest = args.d || args.dest;
let p_artifact = args.a || args.artifact;
let p_package = args.p || args.package;
let p_plugin = args.l || args.plugin;
let p_meta = args.m || args.meta;
let p_tfolder = args.t || args.tfolder;
let p_create = args.c || args.create;
let p_update = args.u || args.update;
let p_schema = args.s || args.schema;
let p_name = args.n || args.name;
let p_filter_string = args.f || args.filter;
let p1 = args._[1];
let p2 = args._[2];
let p3 = args._[3];
let p4 = args._[4];
console.log('args', args, 'cmd', cmd);
console.log('p_create', p_create);
console.log('p_update', p_update);
console.log('p_schema', p_schema);
console.log('p_name', p_name);
console.log('p_meta', p_meta);
console.log('p_filter_string', p_filter_string);
var p_filter = null;
if (p_filter_string && p_filter_string.length > 0) {
    p_filter = function(name) {
    
        return name.startsWith(p_filter_string);
    }
    ;
}
if (cmd == 'down') {
    if (p_list) {
        downloadWizzihub({
            all: true, 
            list: true, 
            dest: p_dest
         })
    }
    else if (p1 == 'wizzihub') {
        downloadWizzihub({
            all: true, 
            metaFolder: p_meta, 
            filter: p_filter
         })
    }
    else if (p1 == 'artifacts') {
        downloadWizzihub({
            artifacts: true, 
            metaFolder: p_meta, 
            filter: p_filter
         })
    }
    else if (p1 == 'packages') {
        downloadWizzihub({
            packages: true, 
            metaFolder: p_meta, 
            filter: p_filter
         })
    }
    else if (p1 == 'plugins') {
        downloadWizzihub({
            plugins: true, 
            metaFolder: p_meta, 
            filter: p_filter
         })
    }
    else if (p1 == 'metas') {
        downloadWizzihub({
            metas: true, 
            metaFolder: p_meta, 
            filter: p_filter
         })
    }
    else if (p1 == 'tfolders') {
        downloadWizzihub({
            tFolders: true, 
            metaFolder: p_meta, 
            filter: p_filter
         })
    }
}
else if (cmd == 'up') {
    if (p_artifact) {
        if (p_create) {
            uploadWizzihubArtifact(p_create, undefined, 'index.' + p_schema + '.ittf', p_schema, 'create')
        }
        else if (p_update) {
            uploadWizzihubArtifact(p_update, undefined, undefined, undefined, 'update')
        }
    }
    else if (p_package) {
        if (p_create) {
            uploadWizzihubPackage(p_create, undefined, 'create')
        }
        else if (p_update) {
            uploadWizzihubPackage(p_update, undefined, 'update')
        }
    }
    else if (p_plugin) {
        if (p_create) {
            uploadWizzihubPlugin(p_create, undefined, 'create')
        }
        else if (p_update) {
            uploadWizzihubPlugin(p_update, undefined, 'update')
        }
    }
    else if (p_meta) {
        if (p_create) {
            uploadWizzihubMeta(p_create, undefined, 'create')
        }
        else if (p_update) {
            uploadWizzihubMeta(p_update, undefined, 'update')
        }
    }
    else if (p_tfolder) {
        if (p_create) {
            uploadWizzihubTFolder(p_create, undefined, 'create')
        }
        else if (p_update) {
            uploadWizzihubTFolder(p_update, undefined, 'update')
        }
    }
    else {
    }
}
else if (cmd == 'gen') {
    if (p_meta) {
        generateMetaFolder('stfnbssl', p_meta, {
            cliCtxSourceFile: path.join("C:/My/wizzi/stfnbssl/wizzihub-productions/data/metacontexts", p_name + '.json.ittf'), 
            destFolder: path.join("C:/My/wizzi/stfnbssl/wizzihub-productions/generations/metafolders", p_name)
         })
    }
}
else if (cmd == 'gitclone') {
    let p_owner = args.o || args.owner;
    p_name = args.n || args.name;
    let p_branch = args.b || args.branch;
    let p_filter = args.f || args.filter;
    console.log('repo owner', p_owner);
    console.log('repo name', p_name);
    console.log('repo branch', p_branch);
    console.log('repo filter', p_filter);
    downloadGitRepo(p_owner, p_name, p_branch || "master", {
        destFolder: path.join(__dirname, '..', 'gitclones', p_name), 
        destFolderIttf: path.join(__dirname, '..', 'gitclones-ittf', p_name), 
        filter: function(filePath) {
        
            if (p_filter) {
                return filePath && filePath.startsWith(p_filter);
            }
            else {
                return filePath;
            }
        }
     }).then((result) => {
    
    }
    ).catch((err) => {
    
    }
    )
}
else {
    if (false) {
        listRepos().then((result) => {
        
        }
        )
    }
    
    if (false) {
        viewRepo("stfnbssl", "vscode-ittf").then((result) => {
        
        }
        )
    }
    
    if (false) {
        cloneRepo("stfnbssl", "vscode-ittf", "main").then((result) => {
        
        }
        )
    }
    if (false) {
        start((err: any, app: any) => {
        
            if (err) {
                console.log("[31m%s[0m", 'err', err);
                throw err;
            }
            console.log('started', app);
            artifactApi.getArtifactProduction("stfnbssl", "quick.html").then((result) => {
            
                console.log('artifactApi.getArtifactProduction.result', result);
                app.services.mongodbClose();
            }
            ).catch((err) => {
            
                console.log("[31m%s[0m", 'artifactApi.getArtifactProduction.error', err);
                app.services.mongodbClose();
            }
            )
        }
        )
    }
    if (false) {
        start((err: any, app: any) => {
        
            if (err) {
                console.log("[31m%s[0m", 'err', err);
                throw err;
            }
            console.log('started', app);
            artifactApi.getArtifactProductionObject("stfnbssl", "quick.html").then((result) => {
            
                console.log('artifactApi.getArtifactProductionObject.result', result);
                app.services.mongodbClose();
            }
            ).catch((err) => {
            
                console.log("[31m%s[0m", 'artifactApi.getArtifactProductionObject.error', err);
                app.services.mongodbClose();
            }
            )
        }
        )
    }
    if (false) {
        start((err: any, app: any) => {
        
            if (err) {
                console.log("[31m%s[0m", 'err', err);
                throw err;
            }
            downloadArtifact("stfnbssl", "quick.html", {
                destFolder: path.join(__dirname, '..', 'downloads', 'quick', 'html')
             }).then(result => 
            
                app.services.mongodbClose()
            ).catch(err => 
            
                app.services.mongodbClose()
            )
        }
        )
    }
    if (false) {
        start((err: any, app: any) => {
        
            if (err) {
                console.log("[31m%s[0m", 'err', err);
                throw err;
            }
            uploadArtifact("stfnbssl", "quick.html", "quick.html description", "index.html.ittf", "html", {
                sourceFolder: path.join(__dirname, '..', 'downloads', 'quick', 'html')
             }).then(result => 
            
                app.services.mongodbClose()
            ).catch(err => 
            
                app.services.mongodbClose()
            )
        }
        )
    }
    if (false) {
        start((err: any, app: any) => {
        
            if (err) {
                console.log("[31m%s[0m", 'err', err);
                throw err;
            }
            uploadPackage("stfnbssl", "__cli_test__", "CLI Test", {
                sourceFolder: path.join(__dirname, '..', 'downloads', 'quick', 'html')
             }).then(result => 
            
                app.services.mongodbClose()
            ).catch(err => 
            
                app.services.mongodbClose()
            )
        }
        )
    }
    
    if (false) {
        start((err: any, app: any) => {
        
            if (err) {
                console.log("[31m%s[0m", 'err', err);
                throw err;
            }
            downloadGitRepo("tastejs", "todomvc", "gh-pages", {
                destFolder: path.join(__dirname, '..', 'downloads', 'tastejs', 'todomvc'), 
                destFolderIttf: path.join(__dirname, '..', 'downloads', 'vanillajs-ittf'), 
                filter: function(filePath) {
                
                    return filePath && filePath.startsWith('examples/vanillajs');
                }
             }).then(result => 
            
                app.services.mongodbClose()
            ).catch(err => 
            
                app.services.mongodbClose()
            )
        }
        )
    }
    
    // Merge a local folder into a wizzihub package
    if (false) {
        start((err: any, app: any) => {
        
            if (err) {
                console.log("[31m%s[0m", 'err', err);
                throw err;
            }
            uploadPackage("stfnbssl", "__cli_test__", "CLI Test", {
                sourceFolder: path.join(__dirname, '..', 'downloads', 'vanillajs-ittf', 'examples'), 
                merge: true
             }).then(result => 
            
                app.services.mongodbClose()
            ).catch(err => 
            
                app.services.mongodbClose()
            )
        }
        )
    }
    
    // Merge a local folder into a wizzihub artifact
    if (false) {
        start((err: any, app: any) => {
        
            if (err) {
                console.log("[31m%s[0m", 'err', err);
                throw err;
            }
            uploadArtifact("stfnbssl", "lab/vanillajs/html", undefined, "index.html.ittf", "html", {
                sourceFolder: path.join(__dirname, '..', 'downloads', 'vanillajs-ittf', 'examples'), 
                merge: true, 
                mergeToFolder: 't/three'
             }).then(result => 
            
                app.services.mongodbClose()
            ).catch(err => 
            
                app.services.mongodbClose()
            )
        }
        )
    }
    if (false) {
        start((err: any, app: any) => {
        
            if (err) {
                console.log("[31m%s[0m", 'err', err);
                throw err;
            }
            downloadArtifactList("stfnbssl", {
                destPath: path.join(__dirname, '..', 'downloads', 'artifactList.json'), 
                destFolder: path.join('C:/My/wizzi/stfnbssl/wizzihub-productions', 'artifacts')
             }).then(result => 
            
                app.services.mongodbClose()
            ).catch(err => 
            
                app.services.mongodbClose()
            )
        }
        )
    }
    if (false) {
        start((err: any, app: any) => {
        
            if (err) {
                console.log("[31m%s[0m", 'err', err);
                throw err;
            }
            downloadPackageList("stfnbssl", {
                destPath: path.join(__dirname, '..', 'downloads', 'packageList.json'), 
                destFolder: path.join('C:/My/wizzi/stfnbssl/wizzihub-productions', 'packages')
             }).then(result => 
            
                app.services.mongodbClose()
            ).catch(err => 
            
                app.services.mongodbClose()
            )
        }
        )
    }
    if (false) {
        start((err: any, app: any) => {
        
            if (err) {
                console.log("[31m%s[0m", 'err', err);
                throw err;
            }
            downloadPluginList("stfnbssl", {
                destPath: path.join(__dirname, '..', 'downloads', 'pluginList.json'), 
                destFolder: path.join('C:/My/wizzi/stfnbssl/wizzihub-productions', 'plugins')
             }).then(result => 
            
                app.services.mongodbClose()
            ).catch(err => 
            
                app.services.mongodbClose()
            )
        }
        )
    }
    if (false) {
        start((err: any, app: any) => {
        
            if (err) {
                console.log("[31m%s[0m", 'err', err);
                throw err;
            }
            downloadMetaList("stfnbssl", {
                destPath: path.join(__dirname, '..', 'downloads', 'metaList.json'), 
                destFolder: path.join('C:/My/wizzi/stfnbssl/wizzihub-productions', 'metas')
             }).then(result => 
            
                app.services.mongodbClose()
            ).catch(err => 
            
                app.services.mongodbClose()
            )
        }
        )
    }
    if (false) {
        start((err: any, app: any) => {
        
            if (err) {
                console.log("[31m%s[0m", 'err', err);
                throw err;
            }
            downloadTFolderList("stfnbssl", {
                destPath: path.join(__dirname, '..', 'downloads', 'tfolderList.json'), 
                destFolder: path.join('C:/My/wizzi/stfnbssl/wizzihub-productions', 'tfolders')
             }).then(result => 
            
                app.services.mongodbClose()
            ).catch(err => 
            
                app.services.mongodbClose()
            )
        }
        )
    }
    if (false) {
        uploadWizzihubArtifact('Cosie%2F7-13-anni%2FData%2FResults', 'Risultato elaborazioni pianificazione guide Cosie', 'index.json.ittf', 'json', 'update')
    }
}

async function start(callback) {

    const app = await App.start();
    callback(null, app)
}

async function listRepos() {

    const repos = await githubApiCalls.getRepositories(config.githubAccessToken);
    return {
            repos, 
            title: 'Repositories page'
         };
}

async function viewRepo(owner: string, repoName: string) {

    const repo = await githubApiCalls.getRepository(owner, repoName, config.githubAccessToken);
    return {
            repo, 
            title: 'Repository page'
         };
}

async function cloneRepo(owner: string, repoName: string, branchName: string) {

    const clonedBranch = await githubApiCalls.cloneBranch({
            owner: owner, 
            name: repoName, 
            token: config.githubAccessToken
         }, branchName || 'main');
    return {
            repo: repoName, 
            cloned: clonedBranch.files, 
            commitHistory: clonedBranch.commitHistory, 
            title: 'Cloned repository'
         };
}
