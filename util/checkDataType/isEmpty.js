import { TYPE } from "../../mapping/const";
import isNull from "../checkDataType/isNull";
import isString from "../checkDataType/isString";

function isEmpty(val) {
    if (isNull(val) || typeof val === TYPE.UNDEFINED) {
        return true;
    }

    if ((typeof val === TYPE.OBJECT || isString(val)) && val.length === 0) {
        return true;
    }

    return false;
}

export default isEmpty;
