## map
- key, value쌍으로 이루어진 객체collection
- 쌍으로 이루어진 iterable객체이므로 순회관련 메서드등을 사용 가능
- 일반적인 리터럴 객체와 달리, 객체의 사이즈의 파악이 용이하며, 문자열이 아닌 key값 선언, 객체key값과 내장메서드충돌을 방지가 가능
    - 일반적인 객체와 다르게 키값을 문자열이 아닌 값으로 선언 가능
    ```
    const testMap = new Map([
        [1, "q"],
        ["ww", "W"],
    ]);
    // 정수로 선언한 키값은 문자열로 변환된다.
    ```


> const testMap = new Map();

- 인자로써 2차월배열([[key1, value1], [key2, value2]])을 삽입하여 초기화
- 내장 메서드
    1. set: Map객체내 값 삽입
        - testMap.set("key3", "value3")

    2. get: Map객체내 값을 키를 통해 습득
        - testMap.get("key1") // "value1"
    
    3. delete: Map객체내 값을 키를 통해 삭제
        - testMap.delete("key1") // testMap.get("key1") -> undefined
    
    4. clear: Map객체내 모든 값을 삭제
        - testMap.clear() // testMap.get("key1") -> undefined

- **Map객체를 반환하는 값은 맵이터레이터이다. (순회 가능한 객체)**
- **동일 키에 값은 한개만 존재함(가장 마지막에 선언한 값을 가짐)**

## set
- 중복되지않는 값으로 이루어진 배열을 반환하는 컬렉션
```
const colors = ["black", "red", "green", "black", "blue"]

new Set(colors)
// ["black", "red", "green", "blue"]
```
- 객체배열의 중복제거 처리

