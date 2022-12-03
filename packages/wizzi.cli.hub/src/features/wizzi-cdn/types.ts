/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi\src\features\wizzi-cdn\types.ts.ittf
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
