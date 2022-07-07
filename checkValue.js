import { TYPE } from "./mapping/const.js"

function isNumber(val) {
    if (typeof val === TYPE.NUMBER) {
        return true;
    }
    return false;
}

function isString(val) {
    if (typeof val === TYPE.STRING) {
        return true;
    }
    return false;
}

function isObject(val) {
    if (typeof val === TYPE.OBJECT && !Array.isArray(val) && typeof val === TYPE.NULL) {
        return true;
    }
    return false;
}

function isArray(val) {
    if (Array.isArray(val)) {
        return true;
    }
    return false;
}

function isNull(val) {
    if (!isObject(val) && typeof val === TYPE.NULL) {
        return true;
    }
    return false;
}

function isEmpty(val) {
    if (isNull(val) || typeof val === TYPE.UNDEFINED) {
        return true;
    }

    if ((isArray(val) || isObject(val) || isString(val)) && val.length === 0) {
        return true;
    }

    return false;
}

export { isNumber, isString, isObject, isArray, isNull, isEmpty}