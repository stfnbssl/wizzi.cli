/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi\src\features\config\env.ts.ittf
*/
import path from 'path';
import dotenv from 'dotenv';
import {cleanEnv, str, bool, port} from 'envalid';
import {ConfigType} from './types';
function validateEnv() {

    dotenv.config();
    let checkedEnv = cleanEnv(process.env, {
        MONGO_HOST: str(), 
        MONGO_USER: str(), 
        MONGO_PASSWORD: str(), 
        MONGO_PATH: str(), 
        GITHUB_ACCESS_TOKEN: str(), 
        IS_WIZZI_DEV: bool(), 
        WIZZI_BASE_PATH: str()
     });
    return checkedEnv;
}
export const packiFilePrefix = 'json:/';
export const packiFilePrefixExtract = 'json:/';
export const packiConfigPath = '.packi/config.json.ittf';
let config: ConfigType;
export default function create():  ConfigType {
    
        if (config == null) {
            const checkedEnv = validateEnv();
            const __rootPath = path.join(__dirname, '..', '..', '..');
            const __ittfPath = path.join(__rootPath, 'ittf');
            const __dataPath = path.join(__rootPath, 'data');
            config = {
                mongoHost: checkedEnv.MONGO_HOST, 
                mongoUser: checkedEnv.MONGO_USER, 
                mongoPassword: checkedEnv.MONGO_PASSWORD, 
                mongoPath: checkedEnv.MONGO_PATH, 
                mongoConnectUrl: "", 
                githubAccessToken: checkedEnv.GITHUB_ACCESS_TOKEN, 
                isWizziDev: checkedEnv.IS_WIZZI_DEV, 
                wizziBasePath: checkedEnv.WIZZI_BASE_PATH, 
                ittfPath: __ittfPath, 
                dataPath: __dataPath, 
                metaHtmlIttfPath: path.join(__ittfPath, 'meta', 'html', 'index.html.ittf'), 
                metaFolderIttfPath: path.join(__ittfPath, 'meta', 'folder', 'index.html.ittf'), 
                metaHtmlTextPath: path.join(__ittfPath, 'meta', 'text', 'index.html.ittf')
             };
            const { mongoHost, mongoUser, mongoPassword, mongoPath } = config;
            if (mongoUser && mongoUser.length > 0 && mongoPassword && mongoPassword.length > 0 && mongoHost && mongoHost.length > 0) {
                config.mongoConnectUrl = `${mongoHost}://${mongoUser}:${mongoPassword}${mongoPath}`;
            }
            // example 'mongodb://localhost/test'
            else {
                config.mongoConnectUrl = `${mongoPath}`;
            }
            Object.keys(config).forEach((element) => {
            
                if (element.indexOf("Pass") < 0 && element.indexOf("Secr") < 0) {
                    console.log('Created config', element, (config as any)[element])
                }
            }
            )
        }
        return config;
    }
