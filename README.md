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
3. Object
4. Array
5. Symbol
