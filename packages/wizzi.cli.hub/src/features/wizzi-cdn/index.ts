/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi\src\features\wizzi-cdn\index.ts.ittf
*/
import {ModelBuilderType, ControllerType} from '../app/types';
import * as cdnTypes from './types';
import {CdnResourceModelBuilder, GetCdnResourceModel} from './mongo/resource';
import * as resourceApi from './api/resource';

const cdnModelGetters = {
    GetCdnResourceModel
 };

const cdnModelBuilders: ModelBuilderType[] = [
    CdnResourceModelBuilder
];

export {cdnTypes, cdnModelGetters, cdnModelBuilders, resourceApi};
