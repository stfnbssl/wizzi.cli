/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.scripts\.wizzi-override\examples\spawn.js.ittf
    utc time: Sun, 28 Jan 2024 19:38:08 GMT
*/
'use strict';
const path = require("path");
const spawnUtils = require("../src/utils/spawn");
var choice = process.argv[2] || '1';
if (choice == '1') {
    spawnUtils.spawn("dir", [], {
        cwd: __dirname
     }, (err, stdout, stderr) => {
    
        console.log("1", err || stderr || stdout, __filename);
    }
    )
}
if (choice == '1b') {
    spawnUtils.spawnPromise("dir", [], {
        cwd: __dirname
     }).then(console.log)
}
if (choice == '1c') {
    spawnUtils.spawnPromise("node", [
        "procOutput", 
        "2"
    ], {
        cwd: __dirname
     }).then(console.log)
}
if (choice == '1d') {
    spawnUtils.spawnPromise("wz", [
        "override"
    ], {
        cwd: path.join(__dirname, '..')
     }).then(console.log)
}
if (choice == '1e') {
    spawnUtils.spawnPromise("ver", [
        "override"
    ], {
        cwd: path.join(__dirname, '..')
     }).then(console.log)
}

// Pipe the output in the stdout/stderr streams (this will not collect the output in memory)
if (choice == '2') {
    let proc = spawnUtils.spawn("ping", [
        "ionicabizau.net"
    ], {
        cwd: __dirname, 
        output: true
     });
}

// PING ionicabizau.net (109.107.37.233) 56(84) bytes of data.

// 64 bytes from cip-109-107-37-233.gb1.brightbox.com (109.107.37.233): icmp_seq=1 ttl=54 time=49.2 ms

// 64 bytes from cip-109-107-37-233.gb1.brightbox.com (109.107.37.233): icmp_seq=2 ttl=54 time=44.4 ms

// 64 bytes from cip-109-107-37-233.gb1.brightbox.com (109.107.37.233): icmp_seq=3 ttl=54 time=47.9 ms

// 64 bytes from cip-109-107-37-233.gb1.brightbox.com (109.107.37.233): icmp_seq=4 ttl=54 time=46.3 ms

// Promise interface
if (choice == '3') {
    spawnUtils.spawnPromise("curl", [
        "ionicabizau.net"
    ]).then(console.log)
}
