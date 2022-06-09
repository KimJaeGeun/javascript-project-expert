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

// 얕은 복사, 깊은 복사 이해를 위한 함수
function objFunc() {
    const obj = {
        a: "A1",
        b: "B1",
        c: "C1",
        o: {
            q: "Q",
            w: "W"
        }
    };
    const copyObj = Object.assign({}, obj);
    // 복사된 객체 값 수정
    copyObj.a = "A";
    // 객체의 참조를 복사 => 얕은 복사
    // 중첩된 객체내 객체의 복사 => 깊은 복사(실제 값을 복사)
    // 중첩 객체의 경우 깊은 복사가 되지않는다.(얕은 복사로 인하여 참조된값을 수정시 원본객체의 값이 수정)
    copyObj.o.q = "0";

    console.log("copyObj")
    console.log(copyObj);
    console.log("obj")
    console.log(obj);

    // 전개 연산자를 통한 복사또한 객체내 객체의 깊은 복사가 이루어지지않음
    //  Object.assign({}, {...obj})
    const copyObj2 = {...obj };

    copyObj2.o.q = "2";

    console.log("copyObj2");
    console.log(copyObj2);


}

function mapsFunc() {
    const basicMap = new Map([, ["key", "value"]]);
    console.log(basicMap);

}

export { scopeConfirm, checkArrayValue, objFunc, mapsFunc }