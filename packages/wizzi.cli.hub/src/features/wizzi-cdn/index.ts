/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi\src\features\wizzi-cdn\index.ts.ittf
    utc time: Fri, 02 Feb 2024 10:28:40 GMT
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
