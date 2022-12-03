/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi\src\features\github\utils.ts.ittf
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
