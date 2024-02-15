/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi\src\features\wizzi-cdn\types.ts.ittf
    utc time: Fri, 02 Feb 2024 10:28:40 GMT
*/

import {Document} from "mongoose";


export type ICdnResource = { 
    owner: string;
    name: string;
    contents: string;
    created_at: Date;
    updated_at: Date;
};


type ICdnResource_doc = { 
    _doc: ICdnResource;
};

export interface ICdnResourceModel extends ICdnResource, ICdnResource_doc, Document {
}
