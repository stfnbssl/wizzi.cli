/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.scripts\.wizzi-override\src\lib\powershell.js.ittf
    utc time: Sun, 28 Jan 2024 19:38:08 GMT
*/
'use strict';
const powershell = require("powershell");

const md = module.exports = {};

md.executePowershell = async function(options) {
    return new Promise((resolve, reject) => {
        
            var ps = new powershell({
                executionPolicy: 'Bypass', 
                verbose: true, 
                version: 3
             });
            console.log(myname, 'executePowershell', 'options', JSON.stringify(options, null, 2), __filename);
            if (options.params) {
                ps.addCommand(options.scriptPath, options.params)
            }
            else {
                ps.addCommand(options.scriptPath)
            }
            ps.invoke().then((output) => {
            
                console.log(myname, 'executePowershell', 'output', output, __filename);
                resolve({
                    error: false, 
                    stdout: output
                 })
            }
            ).catch((err) => {
            
                console.log("[31m%s[0m", myname, 'executePowershell', err);
                ps.dispose();
                resolve({
                    error: true, 
                    stderr: err
                 })
            }
            )
        }
        );
}
;
md.executePowershellToEventStream = async function(options, res) {
    return new Promise((resolve, reject) => 
        
            md.executePowershell({
                scriptPath: options.scriptPath, 
                params: options.params
             }).then((result) => {
            
                res.writeHead(200, {
                    "Content-Type": "text/event-stream", 
                    "Cache-control": "no-cache"
                 })
                if (result.error) {
                    res.write('stderr: ' + result.stderr);
                    res.end('data: ***___CLOSE___***\n\n');
                }
                else {
                    var str;
                    var lines = result.stdout.split("\n");
                    for (var i in lines) {
                        if (i == lines.length - 1) {
                            str = lines[i];
                        }
                        // Note: The double-newline is *required*
                        else {
                            res.write('data: ' + lines[i] + "\n\n");
                        }
                    }
                    res.end('data: ***___CLOSE___***\n\n');
                }
                resolve(result)
            }
            ).catch((err) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'executePowershellToEventStream.error', err);
                return reject(err);
            }
            )
        
        );
}
;
