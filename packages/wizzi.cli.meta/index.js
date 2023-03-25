/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.meta\.wizzi-override\root\index.js.ittf
*/
'use strict';
const minimist = require('minimist');
const createEx = require('./src/cmds/createEx');
const args = minimist(process.argv.slice(2));
let cmd = args._[0];
console.log('args', args, 'cmd', cmd);
if (false) {
}
else if (cmd == 'ts-node-wizzi-cli-hub') {
    createEx({
        metaGenerator: 'ts-node', 
        context: 'wizzi.cli.hub', 
        pkgName: 'wizzi.cli.hub', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.cli/packages/wizzi.cli.hub'
     })
}
else if (cmd == 'ts-node-wizzi-cli-meta') {
    createEx({
        metaGenerator: 'ts-node', 
        context: 'wizzi.cli.meta', 
        pkgName: 'wizzi.cli.meta', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.cli/packages/wizzi.cli.meta'
     })
}
else if (cmd == 'ts-node-demo') {
    createEx({
        metaGenerator: 'ts-node', 
        context: 'demo', 
        pkgName: 'demo.ts.node', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/demo.ts.node'
     })
}
else if (cmd == 'ts-client-vite-react') {
    createEx({
        metaGenerator: 'ts-client', 
        context: 'vite-react', 
        pkgName: 'demo.ts.client.vite.react', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/demo.ts.client.vite.react'
     })
}
else if (cmd == 'ts-client-webpack-react') {
    createEx({
        metaGenerator: 'ts-client', 
        context: 'webpack-react', 
        pkgName: 'demo.ts.client.webpack.react', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/demo.ts.client.webpack.react'
     })
}
else if (cmd == 'ts-express-studio') {
    createEx({
        metaGenerator: 'ts-express', 
        context: 'wizzi.studio', 
        pkgName: 'wizzi.studio', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.apps/packages/wizzi.studio'
     })
}
else if (cmd == 'ts-express-demo-server') {
    createEx({
        metaGenerator: 'ts-express', 
        context: 'wizzi.demo.server', 
        pkgName: 'wizzi.demo.server', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.demo/packages/wizzi.demo.server'
     })
}
else if (cmd == 'ts-express-hello') {
    createEx({
        metaGenerator: 'ts-express', 
        context: 'hello', 
        pkgName: 'demo.ts.express.hello', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/demo.ts.express.hello'
     })
}
else if (cmd == 'ts-express-hello-rest') {
    createEx({
        metaGenerator: 'ts-express', 
        context: 'hello-rest', 
        pkgName: 'demo.ts.express.hello.rest', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/demo.ts.express.hello.rest'
     })
}
else if (cmd == 'ts-express-sequelize') {
    createEx({
        metaGenerator: 'ts-express', 
        context: 'demo-sequelize', 
        pkgName: 'demo.ts.express.sequelize', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/demo.ts.express.sequelize'
     })
}
else if (cmd == 'ts-express-wizzi-heroku') {
    createEx({
        metaGenerator: 'ts-express', 
        context: 'wizzi-heroku', 
        pkgName: 'wizzi-heroku', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.apps/packages/wizzi-heroku'
     })
}
else if (cmd == 'ts-express-wizzi') {
    createEx({
        metaGenerator: 'ts-express', 
        context: 'wizzi', 
        pkgName: 'demo.ts.express.wizzi', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/demo.ts.express.wizzi'
     })
}
else if (cmd == 'js-vanilla-data-entry') {
    createEx({
        metaGenerator: 'js-vanilla', 
        context: 'data-entry', 
        pkgName: 'js.vanilla.data-entry', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/js.vanilla.data-entry'
     })
}
else if (cmd == 'wizzi-plugin-wzjob') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.wzjob', 
        pkgName: 'wizzi.plugin.wzjob', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.wzjob'
     })
}
else if (cmd == 'wizzi-plugin-wzschema') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.wzschema', 
        pkgName: 'wizzi.plugin.wzschema', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.wzschema'
     })
}
else if (cmd == 'wizzi-plugin-svg') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.svg', 
        pkgName: 'wizzi.plugin.svg', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.svg'
     })
}
else if (cmd == 'wizzi-plugin-graphql') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.graphql', 
        pkgName: 'wizzi.plugin.graphql', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.graphql'
     })
}
else if (cmd == 'wizzi-plugin-org') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.org', 
        pkgName: 'wizzi.plugin.org', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.org'
     })
}
else if (cmd == 'wizzi-plugin-c') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.c', 
        pkgName: 'wizzi.plugin.c', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.c'
     })
}
else if (cmd == 'wizzi-plugin-py') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.py', 
        pkgName: 'wizzi.plugin.py', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.py'
     })
}
else if (cmd == 'wizzi-plugin-regexp') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.regexp', 
        pkgName: 'wizzi.plugin.regexp', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.regexp'
     })
}
else if (cmd == 'wizzi-plugin-go') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.go', 
        pkgName: 'wizzi.plugin.go', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.go'
     })
}
else if (cmd == 'wizzi-plugin-rdbms') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.rdbms', 
        pkgName: 'wizzi.plugin.rdbms', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.rdbms'
     })
}
else if (cmd == 'wizzi-plugin-raml') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.raml', 
        pkgName: 'wizzi.plugin.raml', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.raml'
     })
}
else if (cmd == 'wizzi-plugin-java') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.java', 
        pkgName: 'wizzi.plugin.java', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.java'
     })
}
else {
    throw new Error("Command unknown: " + cmd);
}
