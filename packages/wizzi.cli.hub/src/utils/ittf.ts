/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.hub\.wizzi-override\src\utils\ittf.ts.ittf
    utc time: Fri, 02 Feb 2024 10:28:47 GMT
*/
const WAIT_NAME = 1;
const IN_NAME = 2;
const WAIT_VALUE = 3;
const IN_VALUE = 4;
export function ittfToMeta(ittf) {

    var ret = [];
    var status = WAIT_NAME;
    for (var i=0; i<ittf.length; i++) {
        var ch = ittf[i];
        if (ch == '\n' || ch == '\r') {
            status = WAIT_NAME;
            ret.push(ch);
        }
        else if (ch == ' ' || ch == '\t') {
            if (status == WAIT_NAME) {
                ret.push(ch);
            }
            else if (status = IN_NAME) {
                status = WAIT_VALUE;
                ret.push(ch);
            }
            else {
                ret.push(ch);
            }
        }
        else if (ch == '(' && status == IN_NAME) {
            ret.push("$" + "{'('}")
            status = WAIT_VALUE;
        }
        else if (ch == '$' && (ittf[i+1] == "{" || (status == WAIT_NAME && i > 0))) {
            ret.push("$" + "{'$'}")
        }
        else {
            if (status == WAIT_NAME) {
                status = IN_NAME;
            }
            else if (status == WAIT_VALUE) {
                status = IN_VALUE;
            }
            ret.push(ch);
        }
    }
    return ret.join("");
}
