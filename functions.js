function scopeConfirm() {
    const item = document.getElementById("app");

    // const let var
    for (let i = 0; i < 4; i += 1) {
        item.addEventListener('click', () => {
            alert(i);
        })
    }
}

// 배열내 값 체크 방법(해당 값이 존재하는지)
function checkArrayValue() {
    const testArray = ["a", "b", "c"];

    // 존재시 해당 인덱스값 반환, 부재시 -1 반환
    testArray.indexOf("b");
    // 존재시 true, 부재시 false 반환
    testArray.includes("b");
    // 존재시 값과 같은 값으로 이루어진 새로운 배열 반환, 부재시 빈배열 반환
    testArray.filter(item => item === "b");
    // 존재시 값을 반환, 부재시 undefined반환
    testArray.find(item => item === "b");

    console.log(testArray.includes("b"));

    // 객체배열 객체요소내 값 체크
    const testArray2 = [{ a: "A1", b: "B1", c: "C1" }, { a: "A2", b: "B2", c: "C2" }, { a: "A3", b: "B3", c: "C3" }];

    // 객체배열내 값이란 키,값의 쌍을 의미

    // 특정 키의 값의 존재여부 확인후 해당 값의 배열 반환
    testArray2.filter(item => item.a === "A2");

    let result = false;
    // 특정 키의 존재여부 확인 후 존재시 true, 부재시 false 반환
    for (const item of testArray2) {
        if (Object.keys(item).includes("a")) {
            result = true;
            return;
        }
    }
    // 특정 키의 존재여부 확인 후 존재시 true, 부재시 false 반환
    for (const item of testArray2) {
        if (Object.values(item).includes("C2")) {
            result = true;
            return;
        }
    }

    console.log(testArray2.filter(item => item.includes("A2")));
}

export { scopeConfirm, checkArrayValue }