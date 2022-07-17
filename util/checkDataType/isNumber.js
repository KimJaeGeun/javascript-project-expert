import { TYPE } from "../mapping/const.js"

function isNumber(val) {
    if (typeof val === TYPE.NUMBER) {
        return true;
    }
    return false;
}

export default isNumber;
