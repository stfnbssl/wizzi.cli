/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli\ittf\jobs\basic\ittf\lib\step_1.js.ittf
    utc time: Wed, 28 Feb 2024 19:52:02 GMT
*/
'use strict';
class Animal {
    sayHello() {
        console.log(this.cry, ', I am ', this.name, __filename);
    }
}
class Horse extends Animal {
    constructor(name) {
        super();
        this.name = name;
        this.cry = 'Hiii';
    }
}
var horse = new Horse('Varenne');
horse.sayHello();
