/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.scripts\.wizzi-override\src\lib\pandoc.js.ittf
    utc time: Sun, 28 Jan 2024 19:38:08 GMT
*/
'use strict';
const path = require("path");
const spawn = require("child_process").spawn;
const fs = require("fs");
var vfile = require('@wizzi/utils').vfile;

const md = module.exports = {};

md.executePandoc = async function(src, dest, format, args) {
    return new Promise((resolve) => {
        
            let stdOut = "",
                stdErr = "";
            const onStdOutData = function(data) {
                stdOut += data.toString();
            };
            const onStdErrData = function(data) {
                stdErr += data.toString();
            };
            const onStatCheck = function(err, stats) {
                if (err || !stats.isFile()) {
                    console.log("[31m%s[0m", "onStatCheck", err.message);
                    resolve({
                        success: false, 
                        error: err.message
                     })
                    return ;
                }
                // set special parameters for PDF output
                args.unshift(src);
                if (format === "pdf") {
                    args.push("-V", "documentclass=ltjarticle", "-V", "classoption=a4j", "-V", "geometry:margin=1in", "--pdf-engine=lualatex");
                }
                else {
                    args.push("-t", format);
                }
                args.push("-o", dest);
                args.push("--standalone");
                const pdSpawn = spawn("pandoc", args);
                pdSpawn.stdout.on("data", onStdOutData);
                pdSpawn.stderr.on("data", onStdErrData);
                pdSpawn.on("exit", (code) => {
                
                    const success = code === 0;
                    resolve({
                        success, 
                        result: stdOut, 
                        error: stdErr
                     })
                }
                )
                pdSpawn.on("error", (err) => {
                
                    console.log("[31m%s[0m", "pdSpawn.on error", err.message);
                    resolve({
                        success: false, 
                        error: err.message
                     })
                }
                )
            };
            fs.stat(src, onStatCheck);
        }
        );
}
;
md.toNativeJson = async function(source) {
    console.log('Enter toNativeJson', 'source:', source, __filename);
    return new Promise((resolve, reject) => {
        
            const sourcePath = path.isAbsolute(source) ? source : path.resolve(process.cwd(), source);
            const sourceFolder = path.dirname(sourcePath);
            const tempNative = path.join(sourceFolder, '..', path.basename(sourceFolder) + '_temp', path.basename(sourcePath) + '.native');
            md.executePandoc(source, tempNative, 'native', [
                '-f', 
                getSourceFormat(source)
            ]).then((result) => {
            
                if (!result.success) {
                    console.log("[31m%s[0m", result);
                    return reject(result);
                }
                console.log("Executed temp native", tempNative, result, __filename);
                const tempJson = path.join(sourceFolder, '..', path.basename(sourceFolder) + '_temp', path.basename(sourcePath) + '.json');
                md.executePandoc(tempNative, tempJson, 'json', [
                    '-f', 
                    'native'
                ]).then((result) => {
                
                    if (!result.success) {
                        console.log("[31m%s[0m", result);
                        return reject(result);
                    }
                    fs.readFile(tempJson, "utf-8", (err, data) => {
                    
                        if (err) {
                            console.log("[31m%s[0m", 'err', err);
                            throw err;
                        }
                        var jsonData = JSON.parse(data);
                        const tempFmtJson = path.join(sourceFolder, '..', path.basename(sourceFolder) + '_temp', path.basename(sourcePath) + '.fmt.json');
                        vfile().write(tempFmtJson, JSON.stringify(jsonData, null, 4), (err, data) => {
                        
                            if (err) {
                                console.log("[31m%s[0m", 'err', err);
                                throw err;
                            }
                            const tempAstJson = path.join(sourceFolder, '..', path.basename(sourceFolder) + '_temp', path.basename(sourcePath) + '.ast.schema.json');
                            vfile().write(tempAstJson, JSON.stringify(ejs(jsonData), null, 4), (err, data) => {
                            
                                if (err) {
                                    console.log("[31m%s[0m", 'err', err);
                                    throw err;
                                }
                                resolve({
                                    success: true, 
                                    message: 'Written: ' + tempFmtJson
                                 })
                            }
                            )
                        }
                        )
                    }
                    )
                }
                ).catch(err => 
                
                    resolve({
                        success: false, 
                        error: err
                     })
                )
            }
            ).catch(err => 
            
                resolve({
                    success: false, 
                    error: err
                 })
            )
        }
        );
}
;
function getSourceFormat(source) {
    var ss = source.split('.');
    var ext = ss[ss.length-1];
    if (ext == 'md') {
        return 'markdown';
    }
    return ext;
}
md.toNativeJsonFolder = async function(source, dest) {
    console.log('Enter toNativeJsonFolder', 'source:', source, 'dest:', dest, __filename);
    return new Promise((resolve, reject) => {
        
            const sourcePath = path.resolve(process.cwd(), source);
            var destPath;
            if (!dest) {
                destPath = path.join(sourcePath, 'output')
                ;
            }
            else {
                destPath = path.resolve(process.cwd(), dest)
                ;
            }
            const fsFile = vfile();
            fsFile.getFiles(sourcePath, {
                deep: false, 
                documentContent: false
             }, (err, files) => {
            
                if (err) {
                    return resolve({
                            success: false, 
                            error: err
                         });
                }
                async function exec(i) {
                    if (!files[i]) {
                        return resolve({
                                success: true, 
                                message: "Pandoc json files written to " + destPath
                             });
                    }
                    else {
                        try {
                            await md.toNativeJson(files[i].fullPath);
                        } 
                        catch (ex) {
                            console.log("[31m%s[0m", ex);
                        } 
                        exec(i+1);
                    }
                }
                exec(0);
            }
            )
        }
        );
}
;
function isPlainObject(obj) {
    return obj ? typeof obj === 'object' && Object.getPrototypeOf(obj) === Object.prototype : false;
}
const supportType = [
    'string', 
    'number', 
    'array', 
    'object', 
    'boolean', 
    'integer'
];
function getType(type) {
    if (!type) {
        type = 'string';
    }
    if (supportType.indexOf(type) !== -1) {
        return type;
    }
    return typeof type;
}
function isSchema(object) {
    if (supportType.indexOf(object.type) !== -1) {
        return true;
    }
    return false;
}
function handleSchema(json, schema, jsonBaxSchema) {
    Object.assign(schema, json);
    if (schema.type === 'object') {
        delete schema.properties
        parse(json.properties, schema, jsonBaxSchema);
    }
    if (schema.type === 'array') {
        delete schema.items
        schema.items = {};
        parse(json.items, schema.items, jsonBaxSchema);
    }
}
function handleArray(arr, schema, jsonBaxSchema) {
    schema.type = 'array';
    var props = schema.items = {};
    var i,
        i_items = arr,
        i_len = arr.length,
        item;
    for (; i < i_len; i++) {
        item = arr[i];
        parse(item, props, jsonBaxSchema);
    }
}
function handleObject(json, schema, jsonBaxSchema) {
    if (isSchema(json)) {
        return handleSchema(json, schema, jsonBaxSchema);
    }
    schema.type = 'object';
    schema.required = [];
    var props = schema.properties = {};
    if (json.t && json.c) {
        var curSchema = props[key] = {};
        jsonBaxSchema.curPath.push('t_' + json.t);
        parse(json.c, curSchema, jsonBaxSchema);
        jsonBaxSchema.curPath.pop();
    }
    else {
        for (var key in json) {
            var item = json[key];
            var curSchema = props[key] = {};
            if (key[0] === '*') {
                delete props[key]
                key = key.substr(1);
                schema.required.push(key);
                props[key] = {};
            }
            jsonBaxSchema.curPath.push(key == 't' ? 't_' + json[key] : key)
            parse(item, curSchema, jsonBaxSchema);
            jsonBaxSchema.curPath.pop();
        }
    }
}
function parse(json, schema, jsonBaxSchema) {
    if (Array.isArray(json)) {
        jsonBaxSchema.curPath.push('[');
        handleArray(json, schema, jsonBaxSchema);
        jsonBaxSchema.curPath.pop();
    }
    else {
        if (isPlainObject(json)) {
            jsonBaxSchema.curPath.push('{');
            handleObject(json, schema, jsonBaxSchema);
            jsonBaxSchema.curPath.pop();
        }
        else {
            jsonBaxSchema.curPath.push(getType(json));
            jsonBaxSchema.paths[jsonBaxSchema.curPath.join('.')] = json;
            jsonBaxSchema.curPath.pop();
        }
    }
}
function ejs(data) {
    var JsonSchema = {};
    var JsonBaxSchema = {
        curPath: [], 
        paths: {
            
         }
     };
    parse(data, JsonSchema, JsonBaxSchema);
    return JsonBaxSchema;
}
