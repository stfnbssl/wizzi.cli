/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi\src\App.ts.ittf
    utc time: Fri, 02 Feb 2024 10:28:40 GMT
*/
import {ConfigType, config} from './features/config/index';
import {ModelBuilderType} from './features/app';
import {mongodbStart, close as mongodbClose} from './services/mongodb';
import {productionModelBuilders} from './features/wizzi-production/index';
import {cdnModelBuilders} from './features/wizzi-cdn/index';

async function startServices(config: ConfigType) {

    let modelBuilders: ModelBuilderType[] = [
        ...productionModelBuilders, 
        ...cdnModelBuilders
    ];
    await mongodbStart(config, modelBuilders);
    return {
            mongodbClose
         };
}

async function start() {

    const services = await startServices(config);
    return {
            services
         };
}

export default {
        start
     }
