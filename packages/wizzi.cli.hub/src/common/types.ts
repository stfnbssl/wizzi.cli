/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi\src\common\types.ts.ittf
    utc time: Fri, 02 Feb 2024 10:28:40 GMT
*/
export type ValidateResult = { 
    isValid: boolean;
    message?: string;
};

export type CRUDResult = { 
    oper: string;
    ok: boolean;
    item?: any;
    message?: string;
};

export type GitRepositoryMeta = { 
    owner: string;
    name: string;
    description: string;
    branches: string[];
};

