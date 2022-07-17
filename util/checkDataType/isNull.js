import { TYPE } from "../mapping/const.js"

function isNull(val) {
    if (!typeof val === TYPE.OBJECT && typeof val === TYPE.NULL) {
        return true;
    }
    return false;
}

export default isNull;
