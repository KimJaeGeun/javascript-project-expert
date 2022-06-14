# JavaScript
자바스크립트 개념 관련 정리

## 목차

1. [타입](#타입)





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
