// empty값 체크 함수
function isEmpty(value) {
    // empty : NaN, null, undefined, {}, [], ""

    if (value !== null && (typeof value === "object" || typeof value === "string")) {
        return !value.length;
    }

    if (value === 0) {
        return true;
    }

    return !value;
}

// 정렬함수 심화
function sortFunc(type, a, b) {
    switch(type) {
        // 문자열 내 숫자가 포함될 시에도 정렬 가능하게끔
        case "s": {
            const stringNumA = a.match(/(?:\d+)/g);
            const stringNumB = b.match(/(?:\d+)/g);
            
            if (!isEmpty(stringNumA) && !isEmpty(stringNumB)){
                return Number(stringNumA[0]) - Number(stringNumB[0])
            } else {
               return a < b ? -1 : a > b ? 1 : 0
            }
            
        };
        case "n": return a - b;
    }
}

export { isEmpty, sortFunc }