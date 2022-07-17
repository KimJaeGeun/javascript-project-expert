import { TYPE } from "../mapping/const.js"

function isString(val) {
    if (typeof val === TYPE.STRING) {
        return true;
    }
    return false;
}

export default isString;
