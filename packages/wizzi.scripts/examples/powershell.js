/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.scripts\.wizzi-override\examples\powershell.js.ittf
    utc time: Sun, 28 Jan 2024 19:38:08 GMT
*/
'use strict';
const path = require("path");
const spawnUtils = require("../src/utils/spawn");
var choice = process.argv[2] || '1';
if (choice == '1') {
    const PowerShell = spawnUtils.PowerShell;
    let ps = new PowerShell("echo 'powershell is awesome'");
    ps.on("error", err => 
    
        console.error(err)
    )
    ps.on("output", data => 
    
        console.log(data)
    )
    ps.on("error-output", data => 
    
        console.error(data)
    )
    ps.on("end", (code) => {
    
    }
    )
}
if (choice == '2') {
    const PowerShell = spawnUtils.PowerShell;
    let ps = new PowerShell("dir");
    spawnUtils.psOutput(ps, {}, (err, stdout, stderr) => {
    
        console.log("powershell 2", err || stderr || stdout, __filename);
    }
    )
}
if (choice == '3') {
    const PowerShell = spawnUtils.PowerShell;
    let ps = new PowerShell("wz override", {
        cwd: "C:/My/wizzi/stfnbssl/wizzi.cli/packages/wizzi.cli.hub"
     });
    spawnUtils.psOutput(ps, {}, (err, stdout, stderr) => {
    
        console.log("powershell 2", err || stderr || stdout, __filename);
    }
    )
}
