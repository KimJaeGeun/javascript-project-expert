// import { scopeConfirm, checkArrayValue, objFunc, mapsFunc, setFunc, paragraphEvaluation, importTest } from "./functions.js";
import { isEmpty, sortFunc } from "./reserch.js";

function app() {
    const testArray = ["device-1577", "device-4632", "line-8469", "device-5603", "line-4222", "category-100"];
    testArray.sort((a, b) => sortFunc("s", a, b));

    console.log(testArray);
    console.log([...testArray].sort((a, b) => a < b ? -1 : a > b ? 1 : 0));
    
}

export default new app();
