const { Command } = require("commander"); // add this line
const figlet = require("figlet");
import wizzi from "@wizzi/factory";
import path from 'path'
import {createContextFromFile} from './factory'

//add the following line
const program = new Command();

console.log(figlet.textSync("WizziFactory"));

program
  .version("1.0.0")
  .description("An example CLI for managing the Wizzi Factory")
  .option("-l, --ls  [value]", "List directory contents")
  .option("-m, --mkdir <value>", "Create a directory")
  .option("-t, --touch <value>", "Create a file")
  .parse(process.argv);

const options = program.opts();

console.log(1);
wizzi.createFactory(
    {
        repo: {
            storeKind: "filesystem"
        },
        plugins: {
            items: ['@wizzi/plugin.json'],
        },
    }, function(err: any, wf: wizzi.WizziFactory ) {
        console.log(2);
        wf.loadModelAndGenerateArtifact(
            path.join(__dirname, 'ittf', 'wzCtx.json.ittf'),
            {
                modelRequestContext: {}
            },
            "json/document"
        , function(err: any, artifact: string) {
            console.log(artifact);
        })
    }
)
