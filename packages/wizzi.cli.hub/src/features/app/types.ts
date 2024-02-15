/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi\src\features\app\types.ts.ittf
    utc time: Fri, 02 Feb 2024 10:28:40 GMT
*/
import {Application, Router} from 'express';
import {ConfigType} from '../config';
export type ModelBuilderType = { 
    buildModel: (options?: any) => void;
    applyExtraSetup: (options?: any) => void;
};
export type ApiType = { 
    name: string;
    initialize: (initValues: AppInitializerType) => void;
};
export type ControllerType = { 
    path: string;
    router: Router;
    initialize: (initValues: AppInitializerType) => void;
};
export type MiddlewareType = (app: Application) => void;
export type AppInitializerType = { 
    config: ConfigType;
    globalApi: any;
    apis: ApiType[];
    controllers: ControllerType[];
    middlewaresPre: MiddlewareType[];
    middlewaresPost: MiddlewareType[];
};
