/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.meta\.wizzi-override\root\index.js.ittf
*/
'use strict';
const minimist = require('minimist');
const createEx = require('./src/cmds/createEx');
const args = minimist(process.argv.slice(2));
let cmd = args._[0];
console.log('args', args, 'cmd', cmd);
if (cmd == 'ts-node-wizzi-cli-hub') {
    createEx({
        templateGroup: 'ts-node', 
        template: 'wizzi.cli.hub', 
        pkgName: 'wizzi.cli.hub', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.cli/packages/wizzi.cli.hub'
     })
}
else if (cmd == 'ts-node-wizzi-cli-meta') {
    createEx({
        templateGroup: 'ts-node', 
        template: 'wizzi.cli.meta', 
        pkgName: 'wizzi.cli.meta', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.cli/packages/wizzi.cli.meta'
     })
}
else if (cmd == 'ts-express-demo-sequelize') {
    createEx({
        templateGroup: 'ts-express', 
        template: 'demo-sequelize', 
        pkgName: 'demo.ts.express.sequelize', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/demo.ts.express.sequelize'
     })
}
else if (cmd == 'ts-client-vite-react') {
    createEx({
        templateGroup: 'ts-client', 
        template: 'vite-react', 
        pkgName: 'lab.vite.react', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/lab.vite.react'
     })
}
else if (cmd == 'ts-client-webpack-react') {
    createEx({
        templateGroup: 'ts-client', 
        template: 'webpack-react', 
        pkgName: 'lab.webpack.react', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.apps/packages/lab.webpack.react'
     })
}
else if (cmd == 'ts-express-wizzi-heroku') {
    createEx({
        templateGroup: 'ts-express', 
        template: 'wizzi-heroku', 
        pkgName: 'wizzi-heroku', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.apps/packages/wizzi-heroku'
     })
}
else if (cmd == 'ts-express-wizzi') {
    createEx({
        templateGroup: 'ts-express', 
        template: 'wizzi', 
        pkgName: 'wizzi-app'
     })
}
else if (cmd == 'wizzi-plugin-svg') {
    createEx({
        templator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.svg', 
        pkgName: 'wizzi.plugin.svg', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.svg'
     })
}
else if (cmd == 'wizzi-plugin-org') {
    createEx({
        templator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.org', 
        pkgName: 'wizzi.plugin.org', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.org'
     })
}
else if (cmd == 'wizzi-plugin-c') {
    createEx({
        templator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.c', 
        pkgName: 'wizzi.plugin.c', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.c'
     })
}
else if (cmd == 'wizzi-plugin-py') {
    createEx({
        templator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.py', 
        pkgName: 'wizzi.plugin.py', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.py'
     })
}
else if (cmd == 'wizzi-plugin-regexp') {
    createEx({
        templator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.regexp', 
        pkgName: 'wizzi.plugin.regexp', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.regexp'
     })
}
else if (cmd == 'wizzi-plugin-go') {
    createEx({
        templator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.go', 
        pkgName: 'wizzi.plugin.go', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.go'
     })
}
else if (cmd == 'wizzi-plugin-rdbms') {
    createEx({
        templator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.rdbms', 
        pkgName: 'wizzi.plugin.rdbms', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.rdbms'
     })
}
else if (cmd == 'wizzi-plugin-raml') {
    createEx({
        templator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.raml', 
        pkgName: 'wizzi.plugin.raml', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.raml'
     })
}
else if (cmd == 'wizzi-plugin-java') {
    createEx({
        templator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.java', 
        pkgName: 'wizzi.plugin.java', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.java'
     })
}
else {
    throw new Error("Command unknown: " + cmd);
}
