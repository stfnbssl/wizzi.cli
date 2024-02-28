# wizzi.cli

Wizzi Command Line Interface




## Work still in progress

Availability of features will be announced

on [Twitter](https://twitter.com/wizziteam) and [Facebook](https://www.facebook.com/wizzifactory)


```sh
npm install -g wizzi-cli
```
# wizzi-cli
The Wizzi command line interface (CLI) performs basic functionality, such as executing a Wizzi Production, creating a Wizzi Package based on a templated Meta Production, wizzifying an existent artifact or a folder of artifacts, meta wizzifying an existent wizzi package

The Wizzi CLI is packaged as an executable that can be used globally. Is available via [npm](https://www.npmjs.com/) and should be installed globally by running

```sh
npm install -g wizzi-cli
```
Run `wz help` for full help.

## CLI Commands
## "main"

<p>*Execute a wizzi package production (default) or a single artifact or single folder production or a specified command*</p>

```sh
wz [noarguments | configname | --source <file|folder> --dest <file|folder> -ctx <file>[-ctx <file>]...] --config <file>| [command <options>]
```

<table>
<thead>
<th>Argument<th>Description                                                                                                                                                                                                                         |</thead>
<tbody>
<tr>
<td>noarguments</td>
<td>execute a wizzi production using the 'wizzi.config.js' default config file

</tr>
<tr>
<td>configname</td>
<td>execute a wizzi production using the 'wizzi.config.<configname>.js' config file

`|- The config file is searched in the current and upwards in parent folders`
</tr>
<tr>
<td>[--source | -s] <file | folder></td>
<td>execute the wizzi production of a single file or folder using optionaly one or more context data files (json or yaml

</tr>
<tr>
<td>[--dest | -d] <file | folder></td>
<td>the destination file or folder of the production. A source folder requires a destination folder.

</tr>
<tr>
<td>[--config | -c] <file></td>
<td>the path to the optional generation configuration file: <file>.config.js

`|- Basic plugins are included in the Wizzi CLI.`
`|- You can add extra plugins using a config file of the same format as for the 'wz' command.`
</tr>
</tbody>
</table>

commands:

 job ................. execute a wizzi job

 fy .................. wizzify a file or folder

 meta ................ execute a wizzi meta production

 metify .............. execute the 'metafication' of a wizzi production

 version ............. show package version

 help ................ show help menu for a command

 |- Try: wz help [command] to see each command options

## "job"

<p>*Execute the wizzi job defined in a configuration file*</p>

```sh
wz job --config <file>
```

<table>
<thead>
<th>Argument<th>Description                                                                                                                                                                                                                         |</thead>
<tbody>
<tr>
<td>[--config | -c] <configname></td>
<td>the name of the job configuration file: <configname>.config.js

`|- The config file is searched in the current folder`
</tr>
</tbody>
</table>

## "fy"

<p>*Execute the 'wizzifycation' of a file or folder*</p>

```sh
wz fy --source <file|folder> --dest <file|folder> --config <file>
```

<table>
<thead>
<th>Argument<th>Description                                                                                                                                                                                                                         |</thead>
<tbody>
<tr>
<td>[--source | -s] <file | folder></td>
<td>the source file or folder

</tr>
<tr>
<td>[--dest | -d] <file | folder></td>
<td>the destination file or folder

</tr>
<tr>
<td>[--config | -c] <file></td>
<td>a config file for extra plugins

`|- A wizzi plugin can optionaly contain a wizzifier for its language schema.`
`|- Basic wizzifiers are included in the Wizzi CLI.`
`|- You can add extra plugins using a config file of the same format as for the 'wz' command.`
</tr>
</tbody>
</table>

## "meta"

<p>*Execute a wizzi meta production*</p>

```sh
wz meta [<metaname> | --config <filepath>
```

<table>
<thead>
<th>Argument<th>Description                                                                                                                                                                                                                         |</thead>
<tbody>
<tr>
<td>metaname</td>
<td>the name of the meta production config file: wizzi.meta.config.<metaname>.js

`|- The config file is searched in the current (cwd) and upwards in parent folders`
</tr>
<tr>
<td>config</td>
<td>the path of the meta production config file: <filepath>.config.js

`|- The config file`
</tr>
</tbody>
</table>

## "metify"

<p>*Execute the 'metafication' of a wizzi folder*</p>

```sh
wz metify --source <folder> --dest <folder> [--name <name>] [--compress <subfolder[;subfolder[;...]]>>]
```

<table>
<thead>
<th>Argument<th>Description                                                                                                                                                                                                                         |</thead>
<tbody>
<tr>
<td>[--source | -s]</td>
<td>the source file or folder

</tr>
<tr>
<td>[--dest | -d]</td>
<td>the destination file or folder

</tr>
<tr>
<td>[--name | -n]</td>
<td>the name to assign to the created meta production

</tr>
<tr>
<td>[--compress | -c]</td>
<td>semicolon separated list of folders that you prefer 'metamanaged' by their parents

</tr>
</tbody>
</table>



## Wizzi

One machinery, many productions.




<p><a href="https://stfnbssl.github.io/wizzi">Project page</a></p>

## Built With
    * [Nodejs](https://nodejs.org)
    
    * [Wizzi](https://github.com/stfnbssl/wizzi)
    

## License

<p>This project is licensed under the MIT License - see the <a href="license.txt">license.txt</a> for details.</p>

