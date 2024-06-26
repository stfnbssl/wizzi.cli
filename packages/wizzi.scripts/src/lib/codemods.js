/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.scripts\.wizzi-override\src\lib\codemods.js.ittf
    utc time: Sun, 28 Jan 2024 19:38:08 GMT
*/
'use strict';
// generated by wizzi.plugin.js.artifacts.js.module.gen.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var path = require('path');
var util = require('util');
var file = require('@wizzi/utils').file;
var verify = require('@wizzi/utils').verify;
var Codemods = (function () {
    function Codemods() {
        _classCallCheck(this, Codemods);
    }
    Codemods.prototype.copyChangeWizziSchema = function(fromFolder, toFolder, oldWizziSchema, newWizziSchema, callback) {
        // loog 'copyChangeWizziSchema', 'from', fromFolder, 'to', toFolder,
        var result1 = file.getFiles(fromFolder, {
            extension: 'ittf', 
            documentContent: true, 
            deep: true
         });
        // loog 'result1', result1
        var i, i_items=result1, i_len=result1.length, item;
        for (i=0; i<i_len; i++) {
            item = result1[i];
            var parts = item.file.split('.');
            
            // loog 'new item.file', newItemFile
            if (parts[parts.length -1] == 'ittf' && parts[parts.length -2] == oldWizziSchema) {
                var newItemFile = parts.slice(0, -2).join('.') + '.'+ newWizziSchema + '.ittf';
                file.write(path.join(toFolder, newItemFile), item.content)
            }
        }
    }
    return Codemods;
})();

module.exports = Codemods;
