# JavaScript
자바스크립트 개념 관련 정리

## 목차

1. [타입](#타입)
2. [조건문](#조건문)
3. [반복문](#반복문)
4. [this](#this)
5. [객체](#객체)
6. [동기, 비동기성](#동기-비동기성)
7. [import, export](#import-export)





## 타입
1. Number
    - 개요
        - 원시래퍼객체
        - 객체가 아니면서 메서드를 가지지않은 것
        - 소수점 17이하자리로 표현 가능한 부동 소수점 값(이상의 산술의 경우 반올림)
        - javascript내에서는 별도의 정수형이 존재하지않음

    - Number(value)
        - value값을 number로 형변환
        - number로 형변환 불가한 값의 경우 NaN을 반환
        - **NaN(Not-A-Number)은 null이나 undefined와 같이 값의 문제보단 연산의 문제를 말한다. 연산이 불가한 결과값을 NaN으로 반환**

    - **NaN값 체크함수에 관하여**
        ```
        isNaN(value)
        - value값이 현재 NaN인경우, Number로 형변환이 불가한 경우 true를 반환

        Number.isNaN(value)
        - value값이 현재 NaN인경우에만 true를 반환
        ```

    - Math()
        - 자바스크립트내 수학적 상수, 함수, 속성을 가진 내장객체(함수객체가 아님)
        - Number타입의 자료형만 지원하며 다른 숫자형데이터(bigLint등)을 지원하지않는다.
        [참조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math)
2. String
    - 개요
        - 전역객체로 문자의 나열
        - 문자의 나열이기에 오브젝트, 배열로 취급이 가능
        - **취급이 가능한것이지 타입이 동일한것은 아니다.**
        - 문자열을 배열화 하여 응용
            ```
            const str = "abcd"
            Array.from(str).reverse().join("")
            // dcba
            ```
        - ES5이후 리터럴 템플릿가능
        - ``으로 이루어지며, 문자열과 문자보간기능을 사용 가능
            - 보간 표현식 내부 플레이스 홀더(${...})를 사용하여 변수 및 표현식의 결과값을 표현 가능
        - [참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)
        - 특수문자의 경우 이스케이프 표현을 사용하여 표현
        - [참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String#%EC%9D%B4%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%94%84_%ED%91%9C%ED%98%84)
    
    - String(value)
        ```
        console.log(String(value));

        출력값: 임의의 value값을 String으로 출력
        ```

        **직접 생성과 생성자를 사용한 것의 타입값이 다르다**
        ```
        const test1 = "";
        const test2 = new String(test1);

        console.log(typeof test1); // String
        console.log(typeof test2); // object

        ```
    - 함수
        - 대표적인 예시만 기술
        ```
        const testString = 'test value'

        1. indexOf()
        - testString.indexOf('value')
        - 해당 값이 존재하는 첫번째 인덱스값을 반환
        - 값이 부재한 경우 -1을 반환
        2. substring(startIndex, endIndex)
        - testString.substring(startIndex, endIndex)
        - 시작 인덱스의 문자, 끝 인덱스의 문자값을 반환
        3. charAt()
        - testString.charAt(index)
        - 문자열내 해당 인덱스의 문자를 반환
        ```

    - length
        - UTF-16 코드 유닛 기준으로 문자열의 길이를 표현
        - '' 빈문자열의 경우 0을 반환
        - 이모티콘의 경우 기본은 2, 복합적인 경우 결합한 수만큼의 길이값을 가짐
        ```
        예시 - 1
        console.log('hellow'.length);

        출력값: 6

        예시 - 2
        console.log('😸'.length);

        출력값: 2
        ```
3. Object
    - 개요
        - 값을 모아둔 전역객체
        - 값을 모아둔 전역객체로써, 배열(Array)과 비슷하나 그 형태가 리스트형태이며, 인덱스를 포함하지않는 점이 다르다.
        - 키를 설정할 수 있으며, 키와 값중 어느 한쪽이 부재한 object는 만들 수 없다.
        - 생성자, 객체초기자, 리터럴 구문으로 생성 가능
        ```
        const testObject =
        1. new Object(value)
        2. Object.create(object.protoType, {key: value})
        3. { key: value }

        console.log(testObject);


        출력값: {key: value}
        ```
    - **함수(function)**
    - object의 하위타입으로 타입값은 object이다.
    - 함수내 선언된 인자 갯수는 함수.length로 알 수 있다.(func(a,b,c) -> func.length === 3)
    - 객체이 프로퍼티가 함수인 경우 **메서드**라 지칭
4. Array
    - 개요
        - 리스트형태를 가진 전역 객체
        - 배열의 길이, 배열내 요소의 데이터형은 정해져있지않음
        - 요소와 인덱스로 이루어져있으며, 인덱스는 오로지 정수만을 사용 가능
        ```
        const testArray = ['value']

        console.log(testArray)

        출력값: ['value']
        ```
        - 배열 또한 객체이기에 키와 프로퍼티 문자열을 추가할 수 있다.
            - **키로 지정한 문자열이 10진수의 숫자 타입이라면 배열의 길이에 변화를 줄 수 있다**
            ```
            const test = [1,2,3]

            test["9"] = 15;
            console.log(test);
            // [1, 2, 3, empty*6, 9], length => 10
            ```
5. Symbol
    - 개요
        - 함수로써 존재하는 type의 한 종류
        - 데이터값은 [원시값](https://developer.mozilla.org/ko/docs/Glossary/Primitive)
        - Symbol()값을 반환
        ```
        console.log(Symbol('temp));

        출력값: Symbol(temp)
        ```
        **Symbol()의 출력값은 String형태가 아닌 Symbol()이라는 고유값이다**
        - 각각의 고유값을 같기에 같은 Symbol이라도 동일한 값을 갖지않는다
        ```
        console.log(Symbol('a') == Symbol('a'))

        출력값: false
        ```

    - 구조
        ```
        Symbol(description)
        ```
        - description 타입은 String 혹은 Number를 사용

    - 사용이유
    1. 숨김프로퍼티(hidden property) 작성
        - 서드파티에서 가져온 객체 이용시, 해당 객체의 식별자로써 사용 가능

        > 예시)
        > ```
        > const fruits = {
        >     apple: 'apple'
        > };
        >
        > let banana = Symbol('banana');
        >
        > fruits[banana] = 'banana';
        >
        > console.log(fruits);
        > ```

        > 출력값
        > ```
        > {apple: 'apple', Symbol(banana): 'banana'}
        > ```

    2. for...in내에서 열거되지않는다
        > 예시)
        > ```
        > const fruits = {
        >     [Symbol('banana')]: 'banana',
        >     apple: 'apple'
        > };
        >
        > for(const f in fruits) {
        >     console.log(f);
        > }
        > ```

        > 출력값
        > ```
        > apple
        > ```

    - Symbol.iterator
        - 기본 이터레이터를 지정하는 상용심볼
            - **상용심볼**: 특별한 용도를 위해 지정된 심볼


## 조건문

- 개요
    - 조건을 충족하는 가에 따라 실행여부를 판단하는 구문


1. if
    - if문내 조건을 충족시 실행문을 실행, 불충족시 실행하지않으며, 불충족시 실행되는 구문은 else구문이다.
    - javascript내에서는 else if구문은 존재하지않으며, 관용적으로 else구문내 if문을 넣은 2중if문이다.
    ```
    if (true) {
        // true일때 실행
    } else {
        // false일때 실행
    }

    - 이하의 코드는 서로 같은 코드이다/
    if (조건1) {

    } else if(조건2) {

    }

    if (조건1) {

    } else {
        if (조건2) {

        }
    }

    ```

2. switch
    - switch의 조건문을 충족하는 case구문을 실행
    - 조건이 타입형의 경우 엄격히 구분됨
    - 상위case구문이 실행되는 경우 하위 case구문도 실행되기에 실행후 조건문실행을 중지할 경우 break, return등으로 탈출
    - 모두 충족되지않을경우 실행되는 default구문이 있다.
    ```
    const value = 0;

    switch() {
        case 0: console.log('0') break;
        case 1: console.log('1') break;
        default: console.log('default') break;
    }
    ```

3. 삼항 연산자
    - 조건문 ? 조건충족 실행문 : 조건불충족 실행문
    ```
    2 > 0 ? console.log(실행) : console.log(실행 안됨)
    ```

4. 논리연산자 응용
    - &&
        - 비교논리가 값의 경우, 양쪽 값이 존재하는 경우 최우측단의 값이 반환
        - 값이 부재하는 경우 false를 반환
    - ||
        - 비교논리가 값의 경우 존재하는 값이 반환
        - 양쪽 값이 존재하는 경우 처음 존재하는 값이 반환
        - 첫 비교값이 null, undefined인 경우 0을 반환
    ```
    console.log(10 && 'test')

    출력값: 'test'

    console.log(10 || 'test')

    출력값: 10

    ```

### null 병합
    - ||와 비슷하나 첫 비교값이 null, undefined인 경우 그 다음 값을 반환
    ```
    const test = undefined; //null
    const testnull = test ?? 10;

    console.log(testnull);

    출력값: 10
    ```


## 반복문

- 개요
    - 반복문
    - 어느 조건을 갖고 조건에 부합하는 경우한정으로 반복하는 구문

### for

- **for**
    - 원시 for문
    - for내부 인덱스의 경우 지정 인덱스가 아닐시 let으로 새로 지정을 추천(인덱스값은 for문 실행시 변경되기에)
    ```
    for (let i = 0; i < 조건  i +=1) {

    }
    ```

- **for...in**
    - 상속된 속성포함하여 열거가능 한 속성(key)을 나열함
    - Symbol로 지정된 속성인 경우 숨김이기에 나열되지않음
    ```
    const testObject = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
    }

    for (const property in testObject) {
        property // Object.keys(testObject)
        testObject[property] // Object.values(testObject)

    }
    ```

- **for...of**
    - 반복가능한 객체내 요소를 나열함
    - 반복가능한 객체(Array, map, Set, typeArray등)
    ```
    const testArray = ['value1', 'value2', 'value3']

    for (const property of testArray) {
        property // testArray[index]
    }
    ```

- **for await ...of**
    - for...of의 비동기처리방식
    ```
    const testArray = api처리등으로 인한 비동기식 생성배열

    async function asyncFunction () {
        for await (const property of testArray) {
            property // testArray[index]
        }
    }

    ```
### while

- **while**
    - 조건충족시 실행되는 반복문
    ```
    const value = 0;

    while (value > 5) {
        value+=1;
    }

    ```
- **do while**
    - 조건의 불충족때까지 실행되는 반복문
    ```
    let value = 0;

    do {
        value +=1;
    } while(value < 5>)

    - do의 실행문은 무조건 한번은 실행이 된다.
    ```


## this

- 개요
    - 자기 참조 변수로 참조하는 객체, 생성되는 객체를 의미한다.
    - this가 나타내는 것은 함수의 호출방식에 따라 달라진다.
        - [참조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this#try_it)
    - parseInt등의 함수가 실행되는 것은 기본적인 this는 암시적으로 window를 뜻한다.(console로 찍어보여는 순간 호출부가 정해지기에 undefined를 반환한다.)
        - 명시적으로 globalThis가 있다.(ES11)
        - globalThis === window
    - window의 경우 타입, 기타 함수등의 객체를 모두 포함하고 있다.

- 호출부의 바인딩 규칙
    1. 기본바인딩
    - this가 전역객체를 참조하게끔하는 것
    - 엄격모드에서는 전역객체 참조가 불가하며, 이때this는 undefined를 반환한다.
    2. 암시적 바인딩
    - 호출부내 해당 객체의 소유/ 포함 여부 확인
    - 함수를 객체안에 삽입하여 바인딩 하는 것
    3. 명시적 바인딩
    - 함수를 객체내 삽입하지않고 객체를 바인딩에 사용하는 것
    - call(), apply()의 인수의 바인딩
        - call()은 인수 리스트를 받고 함수를 실행
        - apply()는 인수 단일 배열을 받고 함수를 실행
    - 하드 바인딩
        - 호출부와 상관없이 항상 특정 클로저를 바인딩 하는 것
        - ES5부터는 bind()를 이용하여 가능
    4. new 바인딩
    - new를 사용한 생성자 호출시 새로 객체를 생성하며 생성된 객체의 함수 호출시 this로 바인딩 된다.
    - 해당 this는 새 객체를 의미한다.

- 어휘적 this
    - 화살표 함수내에서는 스코프가 this를 의미한다.

- bind(value)
    - function의 내장함수로써 받는 value값은 해당 함수의 this를 지정하는 스코프역할을 한다.
    - 함수내부에서 전역으로 지칭되어있는 스코프를 지정해줄 수 있다.
    - 함수가 실행하기전 지정이 되며, 실행중에는 할당 할 수 없다.


## 객체

- 개요
    - 객체의 정의는 리터럴 형식과 생성자 형식으로 나뉘어진다
    - 리터럴 형식
        - 다수의 키/값을 설정 가능
        ```
        const obj = {
            key: value
        };
        ```
    - 생성자 형식
        - 한번에 하나의 프로퍼티 추가가능
        ```
        const obj = new testObj()
        ```
    - [객체의 타입](https://github.com/KimJaeGeun/javascript-project/tree/main/type)
    - 객체가 지정될때 해당 객체의 타입값(프로퍼티)으로 이루어진다.
    - **객체에 함수가 내장되는 것이 아니다. 해당 함수를 가르키는 프로퍼티가 존재하는 것**


- 내장객체
    - 자바스크립트내 내장 함수로써 생성자로 사용되며 하위타입의 새 객체를 생성
    - 자바스크립트에서는 리터럴형식의 객체또한 해당 타입의 객체로 강제변환되므로, 명시적 객체생성은 필요없다(new로 만드는 거)
        ```
        "test".toUpperCase();
        120.345.toFixed(2)
        ```
    - 종류
        - String
        - Number
        - Boolean
        - Object
        - Function
        - Array
        - Date
            - Date는 리터럴 형식이 없기때문에 항상 생성자로 생성해주어야 한다.
        - RegExp
        - Error
            - 예외처리시 사용되는것이 대부분이기에 명시적 생성은 드물지만 생성자로도 생성은 가능하다.

- 객체의 복사
    - JSON객체로 복사
        ```
        JSON.parse(JSON.stringify(obj))
        ```
    - Object.assign()
        - 열거 가능한 객체를 복사하여 해당객체와 병합
        ```
        Object.assign(targetObj,obj1, obj2...)
        ```

- 프로퍼티 서술자
    - 해당 프로퍼티의 특성값을 나타낸 것
    - 프로퍼티 특성값
        1. writable(쓰기가능)
            - 해당 프로퍼티의 값의 변경 여부
        2. configurable(설정가능)
            - true인 경우 Object.defineProperty() 사용하여프로퍼티 서술자를 변경 가능
            - fasle인경우 writable의 값을 false로 변경은 가능하나 되돌리기는 불가하다.
        3. enumerable(열거 가능)
            - 루프문(for in과 같은)에서 객체 프로퍼티를 열거할때 사용가능 여부
    - 프로퍼티의 특성값 확인
        ```
        Object.getOwnPropertyDescriptor(obj, 'key');
        ```
    - 프로퍼티의 특성값 정의
        ```
        const obj = {
            aaa: 'abcdeFu'
        }

        setPropertyDescriptor(obj, 'aaa', true, false, false)

        Object.getOwnPropertyDescriptor(obj, 'aaa')
        ```

- 객체간의 상속, 객체복사(mixin)
    - 전제) 자바스크립트 내에서 이루어지는 상속과정에서 클래스(굳이 말하자면 객체복사)는 존재하지않는다. 유일한 생성자는 오로지 객체만이 존재한다.**(프로토타입 참조)**
        - 상속과정은 객체를 복사하는 과정이나, 현재 자바스크립트 내에서 객체를 완벽하게 복사하는 방법은 없다.
        - 해당 상속과정중 공용으로 사용되는 프로퍼티는 존재하기에 부모자식간에 영향이 있을 수 있다.
    - 임의 객체를 상속하여 해당 프로퍼티를 부분적으로 사용할 수 있게끔 하는 것
    ```
    function basicMixin(target, source, property) {
        const checkNull = isEmpty(target) || isEmpty(source);
        const checkObj = typeof target === "object" && typeof source === "object"

        if (isEmpty(property)) {
            console.log("프로퍼티 부재");
        }

        if (checkNull || !checkObj) {
            console.log("객체 부재")
            return;
        }

        target[property] = source[property];

        return target;
    }
    ```

- 프로토타입
    - 객체 내 존재하는 내부 프로퍼티
    - **다른 객체를 참조하는 단순레퍼런스 역할을 한다.**
        - 임의의 객체내 어느 프로퍼티를 참조하려는 경우 해당 프로퍼티를 못찾을 시 프로토타입을 통해 탐색을 한다.
        ```
        const obj = {
            a: 1
        }

        obj.b = 'value'
        // Object의 프로토타입 [[get]]을 통하여 프로퍼티b를 탐색 -> 직속 프로퍼티 b가 존재하지않을 경우 Object의 프로토타입 [[put]]을 통하여 직속 프로퍼티 b를 생성 및 값을 할당

        // [[put]]의 작동 과정
        // obj의 프로퍼티 서술자를 확인(쓰기가능)
        // 2-1. 읽기전용이 아닌 경우는 직속프로퍼티 b를 생성 및 값을 대입
        // 2-2. 읽기전용인 경우 에러가 발생하여 b가 생성되지않음
        ```

    - 상속이란 객체의 복사과정이지만 이는 복사가 아닌 프로토타입으로 연결하여 해당 객체의 프로퍼티/함수에 접근할 수 있게 하는 것이다.
        ```
        const copyObj = new obj();
        // obj가 copyObj에 new로 할당되는 경우 객체 obj를 복사하는 것이 아닌 프로토타입으로 연결된 새로운 객체를 생성한다.
        // 생성자가 아닌, 일반 함수에 new를 붙이는 경우 생성자 호출이 된다(해당 함수 호출 + 함수이름의 객체 생성)
        ```


## 동기, 비동기성

- 개요
    - 자바스크립트의 프로그램은 하나의 파일이 아닌, 여러개의 덩이(chunk)로 구성될 수 있으며 덩이의 일반적인 것은 함수이다.
    - 순차적으로 덩이들이 처리완료된뒤, 다음 덩이를 처리하는 것 => 비동기성(일괄처리가 아니라는 뜻)
    - 덩이가 처리되지않은 상태에서 넘어가며, 이후의 덩이를 처리하는 것 => 동기성(동시다발적으로 처리된다는 뜻)
    - **자바스크립트 프로그램은 한번에 하나의 덩이 단위로 실행되어지지만, 연쇄적으로 동시적 실행이 되는 것처럼 보여지는 경우가 있다.<br>이러한 경우에 서로에게 영향을 주는 덩이가 존재한다면 순서를 보장해주는 조치가 필요하다 => 비동기성으로 만들기**

- 콜백
    - 어떤 함수가 실행이 끝난 뒤 실행되는 함수
        - 아래의 예시는 함수run을 호출한뒤, 인자로 받은 speedCal, shout를 호출한다.<br> 이 경우 콜백함수는 speedCal, shout를 의미한다.
        ```
        const old = 18;

        function speedCal() {
            if (15 < old && old < 30) {
                return old/2;
            }
            return 5;
        }

        function shout() {
            console.log('호옹이!')
        }

        function run(who, speed, shout) {
            console.log(`${who}가 초속${speed()}m 로 달린다`)
            shout();
        }

        run('누군가', speedCal, shout);
        ```

- **콜백지옥(하지마라)**
    - 콜백함수가 중첩적으로 쓰여진 코드
    - 각각의 함수중 동기식이 적용이 된다면 코드의 실행단계가 달라지며 덩이에 영향이 심각하게 간다.
    ```
    function startHell(function(){
        // hell-1
        setTimeout(
            //hell-2
            function () {
                //hell-3
                console.log('여긴 지옥이야')
            }, 5000);
    }){

    }
    ```
    - 후속함수는 필요한 시점에서 콜백지옥이 되지않게끔, 함수의 순차성을 확보하기위해 반드시 완전실행성을 보장받는 비동기성을 유지한다면?

- promise
    - 자바스크립트내에서 사용되는 비동기식 처리방식의 하나
    - 아직 값이 특정되지않은 인자를 사용 할 시 사용되는 미래값 객체를 의미한다.
    - promise이후의 과정은 비동기식으로 처리되나 promise자체 내부의 경우 동기식으로 처리된다.
    - TODO: promise과정중 중간단계에서의 취소할 수 없다
    - 인자로 resolve와 reject를 갖는다.
        - resolve: 실행되는 콜백함수
        - reject: 에러
    - 3가지 상태를 갖는다
        1. Pending(대기): 함수를 호출한 상태, 콜백함수 대기중
        2. Fulfilled(이행): 함수를 실행하여 콜백함수가 호출, 실행된 상태(resolve호출)
        3. Rejected(실패): reject를 사용한 상태, catch로 넘겨서 에러를 파악할 수 있다
    - 해당 promise가 실행한 뒤 콜백으로 사용되는 함수
        1. then(): promise객체를 가진 상태에서 콜백으로 사용되는 함수
            - then으로 건내지는 콜백은 반드시 비동기로 처리되어 받는다.
            - then내에서 인자를 사용하여 에러를 확인은 가능하나 그러는 의미가 없다.
        2. catch(): reject() 메서드가 호출로,에러를 확인하는 함수
    - catch()로 에러처리를 받으면 되나, 해당 에러처리내에서 출현하는 에러에 관하여는 처리가 어렵다.
    -**Promise.allSettled()**
        - promise().then().catch()의 경우 promise의 결과에 따라 then, catch를 실행하나, allSettled()의 경우에는 각각의 상태값을 배열로 나타낸다.
        - catch()의 경우는 실행되지않으며, 각 promise의 상태를 then을 통하여 배열로 내보낸다.
        ```
        let promise1 = Promise.resolve("OK");
        let promise2 = Promise.reject("Not OK");
        let promise3 = Promise.resolve("After not ok");
        Promise.allSettled([promise1, promise2, promise3])
            .then((results) => console.log(results))
            .catch((err) => console.log("error: " + err));
        // [{status: 'fulfilled', value: 'OK'},
            {status: 'rejected', reason: 'Not OK'},
            {status: 'fulfilled', value: 'After not ok'}]
        ```

- 제너레이터
    - 완전 실행 함수가 아닌 도중이 존재하는 함수
    - **이터레이터**: 제너레이터 함수를 사용 할 수 있게끔 만든 객체
        - 이터러블: 순회가능한 이터레이터객체
        - [Symbol.iterator](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
            - 순회가 가능하며, 제너레이터함수 내에서는 yeild와의 조우가 함수의 도중을 의미하므로 함수스코프 내에서 상태값을 운용할 수 있다.
            - while true문과 같지만 yeild로 일시정지가 된다는 점?
    - 제너레이터 함수 사용 과정
        1. 제너레이터 함수 ())을 선언
            ```
            function* name() {
                yield;
            }
            ```
        2. 해당 함수를 사용할 이터레이터를 선언
            ```
            const gen = name();
            ```
        3. 이터레이터에 실행 함수를 붙여 사용
            - ex) next(), return(), throw()...
        [참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator/next)
    - next() 하나의 실행은 yeild 하나의 실행을 의미한다.
        - next()실행 시 최초의 yeild를 실행한다.
    - yeild는 해당 제너레이터의 도중의 return값을 의미하며, yeild값이 지정되지않은 경우 return;과도 같다.
    - api 호출과 같은 비동기 함수를 제너레이터로 받은뒤, try catch로 해당 지점의 에러를 catch할 수 있다.
        ```
        // 비동기 호출 함수를 일단 받아두는 것
        try {
            // next()로 실행한뒤 일시 정지
            const it = yield func();

            console.log(it)

        } catch(e) {
            console.log('받은 뒤 문제가 있는것이라면?)
        }
        ```

- **async / await**
    - 상기의 Promise, Generator를 통해 비동기 로직을 작성하였으나 ES8부터 도입된 비동기코드 선언 구문
    - async
        - async function 객체를 반환하는 비동기 함수 선언식
        - 화살표 함수에도 선언할 수 있다.
        - 비동기 함수 선언식이므로, 비동기로써 yield부분을 await로 선언하여 사용한다.
        - await없이 단독으로 사용 가능하다(허나 의미가 없다.)
    - await
        - async function내 promise를 yield해주는 역할
        - 해당 Promise부분에 선언하여 사용
        - 항상 async function내 사용 가능 하며, 외부인 경우 문법 오류가 발생
    - 중첩이 가능 하며 복수의 promise를 awite할 수 있다.
        - 이 경우 awaite하는 부분이 모두 완료된 후 다음 코드가 실행된다.

    - **비동기 동적으로 모듈 가져오기**
        - await import()로 async함수내에서 동적으로 사용

## import, export

- export
    - 개요 
        - 작성만 모듈을 바인딩하여 내보낼때 사용
            ```
            const testModule = {};

            export default testModule;
            ```
    - 응용
        - export
            - 특정 모듈을 선언한 이름으로 내보낼때 사용
            - 한 파일내 복수로 존재할 수 있다
            - 선언과 동시에 내보낼 수 있다
                ```
                // 선언과 동시에 내보내기
                export const testModule1 = {};
                export const testModule2 = {};
                export const testModule3 = {};
                ```
            - 객체 내 프로퍼티형태로 내보낼 수 있다.
                ```
                const testModule1 = {};
                const testModule2 = {};
                const testModule3 = {};

                export { testModule1, testModule2, testModule3 }
                ```
            - 해당 파일을 가져오기(import)를 하는 경우 객체로 받아 사용하기에 객체내 프로퍼티로써 사용 가능하다.(선언한 이름 => 프로퍼티명)
            ```
            // 내보내기
            export const testModule = {};

            import { testModule } from 'testModule_url'
            ```
        - export default
            - 파일내 모듈을 내보낼때 사용
            - 한 파일내 반드시 하나의 모듈을 내보낼 수 있으며 선언한 모듈의 데이터형으로 내보내진다.
                ```
                const testModule1 = {};
                const testModule2 = {};

                export default testModule1;
                export default testModule2;
                // 복수로 내보낼 수 없기에 에러
                // 복수로 내보내는 경우 export를 사용한다.

                ```
            - 내보내는 모듈의 경우 데이터형은 바인딩되나 이름은 바인되지않는다 => import시 네이밍이 가능

- import
    - 개요  
        - 다른 모듈에서 내보낸 바인딩을 가져올때 사용
            ```
            import name from 'module_url';

            ```
            - node_module, 프레임워크내 존재하는 모듈이라면 해당 모듈파일의 위치가 아닌 모듈명으로 가져온다
                ```
                import { inject } from 'vue';

                import { useRouter } from 'vue-router';

                ```
    - 응용
        - 정적 모듈 가져오기
            ```
            import module from 'module_url';
            // 문자열로 이루어진 경로를 통하여 가져온 모듈을 한대모다 번들링 하기에 속도가 빠르다. (동적과 비교적)
            // export default가 있는 모듈인 경우 imprt시 사용되는 이름은 임의로 생성이 가능하다

            import { module1, module2 } from 'module_url';
            // export로 이루어진 경우 객체내 요소로 할당받아 사용가능 하다.

            import { module1 as m1, module2 as m1} from 'module_url';
            // 요소로 할당받아 사용하는 경우 as를 통하여 다른 이름으로 사용이 가능하다.
            ```
            - import *as name: export default가 없는 경우 하나의 객체화 하여 사용
                ```
                import * as checkValue from "./util/checkValueType.js";

                checkValue.isNumber(data);
                // isNumber는 checkValueType.js 내 export되어있는 모듈
                ```
        - 동적 모듈 가져오기
            ```
            import(module_url);
            // <script type="module">이 없더라도 작동 
            // 함수식으로 보이나 함수가 아니다
            // 해당 모듈을 promise형태로 반환한다

            ```
            - 프로퍼티 사용하기
                - export default 프로퍼티
                    ```
                    const testModule = import(module_url);
                    testModule.default();

                    // 구조 분해 할당
                    // const { default: property} = import(module_url) 
                    ```
                 - export 프로퍼티
                    ```
                    const testModule = import(module_url);
                    testModule.property1();

                    // 구조 분해 할당
                    const {property1, property2} = import(module_url);
                    property1();
                    ```
            