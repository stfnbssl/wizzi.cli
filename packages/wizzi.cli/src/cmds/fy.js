/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\.wizzi\src\cmds\fy.js.ittf
    utc time: Wed, 28 Feb 2024 08:33:56 GMT
*/
'use strict';
const path = require('path');
const fs = require('fs');
const wizziUtils = require('@wizzi/utils');
const verify = wizziUtils.verify;
const file = wizziUtils.file;
const vfile = wizziUtils.vfile;
const help = require('./help');
const factory = require('../factory');
const github = require('../features/github');
var _wf = null;
module.exports = (args, accessToken) => {

    console.log('fy.accessToken', accessToken, args.git, __filename);
    if (args.git) {
        wizzifyGitRepo(args, accessToken, (err, result) => {
        
            if (err) {
                console.log("[31m%s[0m", 'err', err);
                throw new Error(err.message);
            }
            console.log('Done. Wizzify github repo.', __filename);
        }
        )
        return ;
    }
    let currentDir = process.cwd();
    let source = args.source || args.s;
    let dest = args.dest || args.d;
    console.log('fy.source.dest', source, dest, __filename);
    var sourcePath, destPath, sourceIsFolder;
    if (source && source.length > 0) {
        if (verify.isAbsolutePath(source)) {
            sourcePath = source;
        }
        else {
            sourcePath = path.join(currentDir, source);
        }
        if (!file.exists(sourcePath)) {
            console.log("[31m%s[0m", 'Invalid options for `fy` command.');
            console.log("[31m%s[0m", 'Source path not found', source);
            help({_:['help', 'fy']});
            return ;
        }
        sourceIsFolder = file.isDirectory(sourcePath);
        if (dest && dest.length > 0) {
            if (verify.isAbsolutePath(dest)) {
                destPath = dest;
            }
            else {
                destPath = path.join(currentDir, dest);
            }
        }
        if (!file.exists(path.dirname(destPath))) {
            console.log("[31m%s[0m", 'Invalid options for `fy` command.');
            console.log("[31m%s[0m", 'Destination path dirname not found', dest);
            help({_:['help', 'fy']});
            return ;
        }
        if (file.isFile(destPath) && sourceIsFolder) {
            console.log("[31m%s[0m", 'Invalid options for `fy` command.');
            console.log("[31m%s[0m", 'Source path is a folder, destination path cannot be a filename', dest);
            help({_:['help', 'fy']});
            return ;
        }
        if (file.isDirectory(destPath) && !sourceIsFolder) {
            destPath = path.join(destPath, path.basename(sourcePath) + '.ittf')
            ;
        }
        if (sourceIsFolder) {
            console.log('ok. source && dest are folders', args, __filename);
            wizzifyFolder(sourcePath, destPath, args.f || args.from || null, args.t || args.to || null, (err, result) => {
            
                if (err) {
                    console.log("[31m%s[0m", 'err', err);
                    throw new Error(err.message);
                }
                console.log('Done. Wizzify folder.', __filename);
            }
            )
        }
        else {
            console.log('ok. source && dest are files', __filename);
            var extension = path.extname(sourcePath);
            var schema;
            extension = extension.substr(1);
            if (extension.toLowerCase() === 'vue') {
                source = '<vue>' + source + '</vue>';
                schema = 'html';
                isVue = true;
            }
            else if (extension.toLowerCase() === 'tsx') {
                schema = 'ts';
            }
            else if (extension.toLowerCase() === 'jsx') {
                schema = 'js';
                extension = 'js';
            }
            else {
                schema = extension;
            }
            wizzifyFile(sourcePath, destPath, (err, notUsed) => {
            
                if (err) {
                    console.log("[31m%s[0m", 'err', err);
                    throw new Error(err.message);
                }
                console.log('Done. Wizzify file.', __filename);
            }
            )
        }
    }
    else {
        console.log("[31m%s[0m", 'Invalid options for `fy` command.');
        help({_:['help', 'fy']});
    }
}
;
function wizzifyGitRepo(args, accessToken, callback) {
    const owner = args.o || args.owner;
    const name = args.n || args.name;
    const branch = args.b || args.branch || "master";
    const kind = args.k || args.kind || "all";
    const destFolder = path.join(process.cwd(), args.d || args.dest || 'git_output', owner, name);
    console.log('wizzifyGitRepo', 'owner', owner, 'name', name, 'branch', branch, 'kind', kind, 'destFolder', destFolder, __filename);
    github.api.repo.cloneBranch({
        owner, 
        name, 
        token: accessToken
     }, branch, kind).then((result) => {
    
        console.log('wizzifyGitRepo.result', Object.keys(result.files), __filename);
        if (result.files) {
            for (var k in result.files) {
                file.write(path.join(destFolder, k), result.files[k].contents)
                console.log('Written', k, __filename);
            }
        }
        const destIttfFolder = path.join(destFolder, ".wizzi");
        wizzifyFolder(destFolder, destIttfFolder, null, null, (err, notUsed) => {
        
            if (err) {
                return callback(err);
            }
            return callback(null);
        }
        )
    }
    )
}
function wizzifyFolder(sourceFolder, destFolder, from, to, callback) {
    console.log('wizzifyFolder.sourceFolder', sourceFolder, __filename);
    console.log('wizzifyFolder.destFolder', destFolder, __filename);
    getWizziFactory((err, wf) => {
    
        if (err) {
            return callback(err);
        }
        vfile().getFiles(sourceFolder, {
            deep: true, 
            documentContent: false
         }, (err, files) => {
        
            if (err) {
                return callback(err);
            }
            console.log('wizzifyFolder.sourceFiles', files.length, __filename);
            function run(i) {
                if (from != null && i < from) {
                    return run(i+1);
                }
                if (to != null && i > to) {
                    return run(i+1);
                }
                if (!files[i]) {
                    return callback(null);
                }
                try {
                    var sourcePath = files[i].fullPath;
                    var wizzifyName = getWizzifyName(sourcePath);
                    if (!wf.canWizzify(wizzifyName)) {
                        console.log(i+1, '/', files.length, sourcePath,'has no wizzifier', __filename);
                        return file.copyFile(sourcePath, path.join(destFolder, files[i].relPath), (err, result) => {
                            
                                if (err) {
                                    console.log("[31m%s[0m", 'copying file', sourcePath);
                                    console.log("[31m%s[0m", err);
                                    return run(i+1);
                                }
                                console.log(i+1, '/', files.length, sourcePath, 'copied', __filename);
                                return run(i+1);
                            }
                            );
                    }
                    console.log("from, to, i", from, to, i+1, '/', files.length, __filename);
                    var destPath = path.join(destFolder, files[i].relPath + '.ittf');
                    wf.getWizziIttfFromText(file.read(sourcePath), getWizzifyName(sourcePath), (err, result) => {
                    
                        if (err) {
                            console.log("[31m%s[0m", 'on file', sourcePath);
                            console.log("[31m%s[0m", err);
                            return process.nextTick(() => 
                                
                                    run(i+1)
                                );
                        }
                        file.write(destPath, result);
                        console.log('Done. Wizzify file', destPath, __filename);
                        return process.nextTick(() => 
                            
                                run(i+1)
                            );
                    }
                    )
                } 
                catch (ex) {
                    console.log("[31m%s[0m", 'in file', sourcePath, 'message', ex.message);
                    process.nextTick(() => 
                    
                        run(i+1)
                    )
                } 
            }
            run(0);
        }
        )
    }
    )
}
function wizzifyFile(sourcePath, destPath, callback) {
    getWizziFactory((err, wf) => {
    
        if (err) {
            return callback(err);
        }
        try {
            wf.getWizziIttfFromText(file.read(sourcePath), getWizzifyName(sourcePath), (err, result) => {
            
                if (err) {
                    return callback(err);
                }
                file.write(destPath, result);
                console.log('Done. Wizzify file', destPath, __filename);
                return callback(null);
            }
            )
        } 
        catch (ex) {
            console.log("[31m%s[0m", 'in file', sourcePath, 'message', ex.message);
            return callback(null);
        } 
    }
    )
}
function getWizzifyName(sourcePath) {
    var ext = path.extname(sourcePath).substr(1);
    if (ext == 'tsx') {
        return 'ts';
    }
    else if (ext == 'jsx') {
        return 'js';
    }
    else if (ext == 'mdx') {
        return 'md';
    }
    else {
        return ext;
    }
}
function getWizziFactory(callback) {
    if (_wf != null) {
        return callback(null, _wf);
    }
    const globalContext = {};
    factory.createWizziFactory(globalContext, {
        items: factory.getDefaultPlugins(), 
        pluginsBaseFolder: factory.getDefaultPluginsBaseFolder()
     }, (err, wf) => {
    
        if (err) {
            return callback(err);
        }
        _wf = wf;
        return callback(null, _wf);
    }
    )
}
