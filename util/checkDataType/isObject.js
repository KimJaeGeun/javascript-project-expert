import { TYPE } from "../mapping/const.js"

function isObject(val) {
    if (typeof val === TYPE.OBJECT && !Array.isArray(val) && typeof val === TYPE.NULL) {
        return true;
    }
    return false;
}

export default isObject;
