/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi\src\features\github\utils.ts.ittf
    utc time: Fri, 02 Feb 2024 10:28:40 GMT
*/
import {commonTypes} from '../../common';
import {GithubApiRepository} from './types';

export function apiRepositoryToMeta(apirepo: GithubApiRepository):  commonTypes.GitRepositoryMeta {

    
    // TODO implement branches
    return {
            owner: apirepo.owner.login, 
            name: apirepo.name, 
            description: apirepo.description, 
            branches: [
                'master'
            ]
         };
}
