import { scopeConfirm, checkArrayValue, objFunc, mapsFunc, setFunc, paragraphEvaluation } from "./functions.js";
import { isEmpty, sortFunc } from "./reserch.js";

function app() {
    const testObj = {
        e_qwer_06: "qw6",
        e_desc: "D",
        e_qwer_05: "qw5",
        e_qwer_02: "qw2",
        e_asdf: "A",
        e_qwer_04: "qw4",
        e_cccd: "CCC",
        e_qwer_03: "qw3",
        e_gfds: "G",
    }
    console.log(Object.entries(testObj));
    console.log(Object.entries(testObj).sort((a, b) => sortFunc("s", a[0], b[0])));
}

export default new app();