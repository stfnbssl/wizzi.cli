/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.scripts\.wizzi-override\src\lib\babel.js.ittf
    utc time: Sun, 28 Jan 2024 19:38:08 GMT
*/
'use strict';
const path = require("path");
const spawn = require("child_process").spawn;
const fs = require("fs");
var file = require('@wizzi/utils').file;
var vfile = require('@wizzi/utils').vfile;

var babelParser = null;
var babelCore = null;

const md = module.exports = {};

md.getParseConfig = function(options) {
    // TODO calculate cfg from options
    var cfg = options;
    var result = 
    // Indicate the mode the code should be parsed in. Can be one of "script", "module", or "unambiguous". Defaults to "script". "unambiguous" will make @babel/parser attempt to guess, based on the presence of ES6 import or export statements. Files with ES6 imports and exports are considered "module" and are otherwise "script".
    
    // Array containing the plugins that you want to enable.
    
    // By default, import and export declarations can only appear at a program's top level. Setting this option to true allows them anywhere where a statement is allowed.
    
    // By default, await use is not allowed outside of an async function. Set this to true to accept such code.
    
    // By default, a return statement at the top level raises an error. Set this to true to accept such code.
    
    // By default, super use is not allowed outside of class and object methods. Set this to true to accept such code.
    
    // Correlate output AST nodes with their source filename. Useful when generating code and source maps from the ASTs of multiple input files.
    
    // By default, the first line of code parsed is treated as line 1. You can provide a line number to alternatively start with. Useful for integration with other source tools.
    
    // By default, ECMAScript code is parsed as strict only if a "use strict"; directive is present or if the parsed file is an ECMAScript module. Set this option to true to always parse files in strict mode.
    
    // Adds a ranges property to each node: [node.start, node.end]
    
    // Adds all parsed tokens to a tokens property on the File node
    {
        sourceType: cfg.sourceType || 'module', 
        plugins: [
            "jsx", 
            "typescript", 
            "objectRestSpread", 
            "classProperties", 
            "doExpressions", 
            ['decorators', { decoratorsBeforeExport: false }], 
            "classProperties", 
            "classPrivateProperties", 
            "classPrivateMethods", 
            "exportDefaultFrom", 
            "exportNamespaceFrom", 
            "asyncGenerators", 
            "functionBind", 
            "functionSent", 
            "dynamicImport", 
            "numericSeparator", 
            "optionalChaining", 
            "importMeta", 
            "bigInt", 
            "optionalCatchBinding", 
            "throwExpressions", 
            "nullishCoalescingOperator"
        ], 
        allowImportExportEverywhere: cfg.allowImportExportEverywhere, 
        allowAwaitOutsideFunction: cfg.allowAwaitOutsideFunction, 
        allowReturnOutsideFunction: cfg.allowReturnOutsideFunction, 
        allowSuperOutsideMethod: cfg.allowSuperOutsideMethod, 
        sourceFilename: cfg.sourceFilename || undefined, 
        startLine: cfg.startLine || 1, 
        strictMode: cfg.strictMode, 
        ranges: cfg.ranges, 
        tokens: cfg.tokens
     };
    return result;
}
;
md.parseExec = function(options, callback) {
    md.parseRequire(options)
    var code = options.code;
    var codePath = options.codePath;
    console.log('wizzi.scripts.parseExec codePath, code', codePath, code, __filename);
    var cfg = md.getParseConfig(options);
    var ast;
    if (codePath) {
        try {
            ast = md.cleanAst(options, babelParser.parse(file.read(codePath), cfg))
            ;
        } 
        catch (ex) {
            if (ex.pos) {
                console.log("[31m%s[0m", "pos", ex.pos);
            }
            if (ex.loc) {
                console.log("[31m%s[0m", "loc", ex.loc);
            }
            console.log("[31m%s[0m", ex);
            callback(ex)
        } 
        return callback(null, ast);
    }
    else {
        try {
            ast = md.cleanAst(options, babelParser.parse(code, cfg))
            ;
        } 
        catch (ex) {
            if (ex.pos) {
                console.log("[31m%s[0m", "pos", ex.pos);
            }
            if (ex.loc) {
                console.log("[31m%s[0m", "loc", ex.loc);
            }
            console.log("[31m%s[0m", ex);
            callback(ex)
        } 
        return callback(null, ast);
    }
}
;
md.parseExecToEventStream = function(options, res, callback) {
    md.parseExec(options, (err, result) => {
    
        res.writeHead(200, {
            "Content-Type": "text/event-stream", 
            "Cache-control": "no-cache"
         })
        
        // _ res.write('stderr: ' + JSON.stringify(err, null, 2))
        if (err) {
            res.write('data: ' + JSON.stringify(err, null, 2));
            res.end('data: ***___CLOSE___***\n\n');
        }
        // loog 'wizzi-scripts.parseExecToEventStream'
        else {
            var resultString = JSON.stringify(result, null, 2);
            var str;
            var lines = resultString.split("\n");
            for (var i in lines) {
                if (i == lines.length - 1) {
                    str = lines[i];
                }
                // Note: The double-newline is *required*
                else {
                    res.write('data: ' + lines[i] + "\n\n");
                }
            }
            if (str.length > 0) {
                res.write('data: ' + str + "\n\n");
            }
            res.end('data: ***___CLOSE___***\n\n');
        }
        if (callback) {
            return callback(null, result);
        }
    }
    )
}
;
md.getTransformConfig = function(options) {
    // TODO calculate cfg from options
    var cfg = 
    /**
        * plugins
            * 
                * "@babel/plugin-proposal-decorators"
                * 
                    * "legacy"  true
            * "@babel/plugin-proposal-function-sent"
            * "@babel/plugin-proposal-export-namespace-from"
            * "@babel/plugin-proposal-numeric-separator"
            * "@babel/plugin-proposal-throw-expressions"
            * stage 3
            * "@babel/plugin-syntax-dynamic-import"
            * "@babel/plugin-syntax-import-meta"
            * 
                * "@babel/plugin-proposal-class-properties"
                * 
                    * loose false
            * "@babel/plugin-proposal-json-strings"
    */
    {
        presets: [
            "@babel/preset-env", 
            "@babel/preset-react", 
            "@babel/preset-flow"
        ]
     };
    return cfg;
}
;
md.transformExec = function(options, callback) {
    md.transformRequire(options)
    var code = options.code;
    var codePath = options.codePath;
    var cfg = md.getTransformConfig(options);
    if (codePath) {
        console.log('wizzi.scripts.transformExec.codePath', codePath, __filename);
        babelCore.transformFile(codePath, cfg, callback)
    }
    else {
        console.log('wizzi.scripts.transformExec.code-length', code.length, __filename);
        babelCore.transform(code, cfg, callback)
    }
}
;
md.transformExecToEventStream = function(options, res, callback) {
    md.transformExec(options, (err, result) => {
    
        // loog 'wizzi-scripts.transformExecToEventStream.err.result', err, result
        res.writeHead(200, {
            "Content-Type": "text/event-stream", 
            "Cache-control": "no-cache"
         })
        var payload;
        if (err) {
            payload = util.inspect(err);
        }
        // TODO calculate payload from options
        else {
            var payload = result.code;
        }
        // loog 'payload', payload
        var str;
        var lines = payload.split("\n");
        for (var i in lines) {
            if (i == lines.length - 1) {
                str = lines[i];
            }
            // Note: The double-newline is *required*
            else {
                res.write('data: ' + lines[i] + "\n\n");
            }
        }
        if (str.length > 0) {
            res.write('data: ' + str + "\n\n");
        }
        res.end('data: ***___CLOSE___***\n\n');
        if (callback) {
            return callback(null, payload);
        }
    }
    )
}
;

md.parseRequire = function(options) {
    if (!babelParser) {
        babelParser = require("@babel/parser");
    }
}
;
md.transformRequire = function(options) {
    if (!babelCore) {
        babelCore = require("@babel/core");
    }
}
;
md.cleanAst = function(options, ast) {
    var removeLocation = options.removeLocation;
    if (removeLocation) {
        delete ast.loc
        delete ast.start
        delete ast.end
        var i, i_items=Object.keys(ast), i_len=Object.keys(ast).length, k;
        for (i=0; i<i_len; i++) {
            k = Object.keys(ast)[i];
            if (verify.isArray(ast[k])) {
                var j, j_items=ast[k], j_len=ast[k].length, node;
                for (j=0; j<j_len; j++) {
                    node = ast[k][j];
                    md.cleanBabelAst(options, node);
                }
            }
            if (verify.isObject(ast[k])) {
                md.cleanBabelAst(options, ast[k]);
            }
        }
    }
    return ast;
}
;
