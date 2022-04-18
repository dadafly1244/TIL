# JS 데이터(자료형 , Data Type)

## 원시형 - Primitive Type
1. 문자 (string)
1. 숫자 (Number)
1. 불린(Boolean)
1. null
1. undefined
1. 심볼(Symbol)
1. 큰 정수(BigINT)

## 참조형 - Reference Type
1. 배열(Array)
1. 객체 (Object)
1. 함수(Function)

* * *

## 문자

따옴표로 묶여 있어야 함! 

```js
'dada'
"dada"
`dada` //보간
```

예시! 

```js
const abc = 'ABC'

console.log(abc)
console.log(`hello ${abc}`) // 보간 
```


* * *

## 숫자 

```js
const a = 1 
const b =2
console.log(a+b) //3
```

부동소수점 오류 
```js

const a = 0.1 
const b = 0.2
console.log(a+b)//0.30000000000000004

```

문제 해결 1 

toFixed(1)로 소수점 한 자리수 뒤는 다 날리기 

```js
const a = 0.1 
const b = 0.2
console.log(  
  (a+b).toFixed(1) //0.3
)

```


```js
const a = 0.1 
const b = 0.2
console.log(  
  parseFloat((a+b).toFixed(1))//0.3
  
)
```

Not-A-Number - 숫자 데이터 / 숫자로 표시가 불가! 
NaN

* * *

## 불린(Boolean)

```js
true
false
```

대표적으로 조건문(if)에서 사용함
```js

if(true){
  console.log('참참') //참참
}
```

* * *

##  null



'존재하지 않는', '비어 있는', '알 수 없는' 값을 명시적으로 나타냄 (빈값(명시적))

```js

const user ={
  name:'Flyda',
  age: null
}

console.log(user.name)//Flyda
console.log(user.age)// null
```

* * *

## undefined 

빈값(암시적) :js의 특징!! 
'값이 할당되지 않은 상태'를 암시적으로 나타냄

```js
let a
console.log(a)//undefined
```

할당 연살자(=)로 값이 할당되지 않은 경우 undefined라는 값을 할당함 

즉, 그릇은 있는데 값이 없다!! 

```js

const user ={
  name:'Flyda'
}

console.log(user.name) //Flyda
console.log(user.age) //undefined
```

* * *

## 심볼

유일한 식별자(ID) 이름을 만들때 사용

```js
const s = Symbol('Hello world!')//설명

const user = {
  name :'Flyda',
  [s] : 81
}

console.log(user.name) //Flyda
console.log(user[s]) //81
```

민감한 정보를 []사이에 넣어서 보호하려는 것...

* * *

## BinInt

지수
큰(big) 정수(Integer) /


```js

console.log(123n)//123n
console.log(1n + 2n)//3n
console.log(Number(1n + 2n))//3
```

* * *

## 배열

```js
const a = [1,2,3]
console.log(a)//(3) [1, 2, 3]
```

Array[item(element), item]

```js
const a = [1,2,3 , '4', {}, () => {}]
console.log(a)//(6) [1, 2, 3, '4', {…}, ƒ]
```


indexing : 배열 안에 있는 요소를 인덱스 번호로 조회하는 것  
```js
const a = [1,2,3 , '4', {}, () => {}]
console.log(a[4])//{} 
```

원래의 선언방식은 리터럴 방식 말고 생성자 함수로 선언을 해야함. 근데 불편하니까 리터럴 방식으로 선언한다!! 

```js
// const a = ['Apple','Banana','Cherry']  <= 리터럴 방식으로 선언 (기호를 통해서 배열, 객체, 문자 등 데이터를 생성하는 것! )
const a = new Array('Apple','Banana','Cherry')
console.log(a)
```

* * *

## 객체 

'Key : Value'  형태를 가지고 있음

```js
const obj ={
  a:'apple',
  b:'banana',
  c:'cherry'
}
console.log(obj.b)//banana
```
여기에서 key는 중복될 수 없다!! key이름은 고유함! 

```js
const obj ={
  a:'apple',
  b:'banana',
  c:'cherry',
  b:'buleberry'
}
console.log(obj.b)//buleberry
```

배열의 경우 어떤 값을 찾기 위해서는 반복문을 돌면서 하나하나 검색해야함 
하지만 객체의 경우 키만 알면 바로 접근할 수 있음
```js
const arr= ['apple','banana','cherry']
arr.forEach(item => {
  if (item === 'cherry' ) {
    console.log(item) //cherry
  }
})

const obj ={
  a:'apple',
  b:'banana',
  c:'cherry'
}
console.log(obj['b'])//banana
```

다음과 같은 방식으로 키를 작성할 수 있고 조회할 수 있음

```js

const obj ={
  a:'apple',
  b:'banana',
  c:'cherry',
  '$$asdfajsdkf;aisdnrfahe;ijasd347' : 'hahah',
  _c : 'cchhrry'
}
console.log(obj['b'])// 괄호 (Bracket) 표기
console.log(obj.b)// 점(Dot) 표기

console.log(obj['$$asdfajsdkf;aisdnrfahe;ijasd347']) //hahah
console.log(obj._c)//cchhrry


```
_의 경우에는 숨기는 용도 or 강조하는 의미로 사용함. 


```js

const obj ={
  a:'apple',
  b:'banana',
  c() {

  },
  c: function () {

  },
  c: () => {

  }
}

```
1번  c랑 2번 c는 같은 문법 
3번 c는 화살표함수!! 1,2랑 다른 문법!!!

* * *

## 함수 

```js
function flyda() {
  //명령
  //명령2
  //명령3
}

flyda()
```

이렇게 생긴 함수도 '데이터'다!!

* * * 

# 형(Type)변환

```js
const a = 123
const b = 123

// 동등 연산자 == 
console.log( a== b) // true
console.log(a === b) //true
```

```js
const a = 123
const b = '123'

// 동등 연산자 == 
console.log( a== b) // true
console.log(a === b) //false
```
동등 연산자(==)의 경우 자동으로 형변환이 일어난다. 그냥 쓰지마!! 

```js
const a = 1
const b = true

// 동등 연산자 == 
console.log( a== b) // true
console.log( a=== b) // false
```
따라서 일치 연산자 (===)를 사용하자!! 정확하게는 메모리 주소로 비교를 하는 연산자! 

```js
const a = 1
const b = 1

// 동등 연산자 == 
console.log( a== b) // true
console.log( a=== b) // true

```

주소관련해서!!
원시형과 참조형의 차이
```js
const a = {}
const b = {}

// 일치 연산자 === : 원시형은 생긴게 같으면 주소가 같음 / 참조형은 생긴게 같아도 주소가 다를 수 있다.  
console.log( a=== b) // false

```
* * *

# Truthy & Falsy


```js
if (true) {
  console.log('참')
}
//참
```

* Falsy : 거짓과 같은 값 

```js
if (0) {
  console.log('참')
}
```
False는 다음과 같다. 외워두자!! 

```js
if(false)
if(null)
if(undefined)
if(0)
if(-0)
if(NaN)
if(0n)
if('')
``` 


* Truthy : 참과 같은 값 
` 1,2 3 ,{} ` 등등 무한에 가깝게 많음!!! 
```js
if (1) {
  console.log('참')
}
```

만약 
```js
if(' ') 
```
다음과 같이 공백문자가 ''사이에 있다면 truthy이다! 

* * *
# 자료형 확인

1. `typeof 데이터`
1. `데이터.constructor`
1. `Object.prototype.toString.call(데이터)`


* * *
## `typeof 데이터`

```js
console.log(typeof '123') //string
console.log(typeof 123) //numger
console.log(typeof true) //boolean
console.log(typeof null) //object
console.log(typeof undefined) //undefined
console.log(typeof Symbol('sdkjfn')) // symbol
console.log(typeof 123n) // bigint
console.log(typeof []) // object
console.log(typeof {}) // object
console.log(typeof function () {}) //function

```
null과 array(배열)은 typeof로 자료형을 알아낼 수 없다. 


## `데이터.constructor`
```js
console.log([].constructor  === Array) // true
console.log(Array.isArray([])) //true
```
배열의 경우 constructor로 확인 할 수 있지만 null과 undefined를 확인할 수 없다. 

## `Object.prototype.toString.call(데이터)`

```js
function checkType(data) {
  return Object.prototype.toString.call(data)
}
console.log(checkType([])) //[object Array]
console.log(checkType(null)) //[object Null]
```
모든 함수로 만들면 모든 자료형을 알 수 있다!! 
밑의 코드처럼 slice함수를 사용하면 자료형만 출력할 수도 있다 

```js
function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}
console.log(checkType([])) //Array
console.log(checkType(null)) //Null

```
자료형을 반복적으로 계속해서 체크할 것이 아니라면 함수를 선언할 필요는 없다. 만약 string 하나만 사용할 거라면 typeof를 사용하는 것이 더 생산적이다. 

인수(인자 - argument)  - 데이터
매개변수 - paprameter 


* * *

# 변수 

1. const
2. let
3. var  // 쓰지마세요..ㅠㅠ 

- 유효범위(Scope)
- 재할당
- 중복 선언
- 호이스팅(Hoisting)
- 전역(Global) 선언시 전역 객체(`window`)의 속성으로 등록

## 1. const (최신)
  - 유효범위(Scope) : 블럭 레벨 
  - 재할당 : X
  - 중복 선언 : X
  - 호이스팅(Hoisting) : X
  - 전역(Global) 선언시 전역 객체(`window`)의 속성으로 등록 : X

유효범위
```js

function abc() {
  if(true) {
    const a = 123
    console.log('in', a)
  }
  console.log('out', a)
}

abc()

//in 123
//error
```

재할당 
```js 
const a = 123
console.log(a)
a = 456 //error
```

## 2. let (최신)
  - 유효범위(Scope) : 블럭 레벨 
  - 재할당 : O
  - 중복 선언 : X
  - 호이스팅(Hoisting) : X
  - 전역(Global) 선언시 전역 객체(`window`)의 속성으로 등록 : X

유효범위
```js

function abc() {
  if(true) {
    var a = 123
    console.log('in', a)
  }
  console.log('out', a)
}

abc()

//in 123
//error

```

재할당
```js
let b = 123
console.log(b) //123
b = 456 
console.log(b) //456
```

호이스팅
```js
function abc() {
  console.log(a)
  if(true) {
    let a = 123
    console.log('in', a)
  }
  // console.log('out', a)
}
abc()

//Uncaught ReferenceError: a is not defined
```

## 3. var  // 쓰지마세요..ㅠㅠ
  - 유효범위(Scope) : 함수 레벨
  - 재할당 : O 
  - 중복 선언 : O 
  - 호이스팅(Hoisting) : O 
  - 전역(Global) 선언시 전역 객체(`window`)의 속성으로 등록 : O
유효범위
```js

function abc() {
  console.log('up', a)
  if(true) {
    var a = 123
    console.log('in', a)
  }
  console.log('out', a)
}

abc()

//up undefined
//in 123
//out 123

```

호이스팅
```js
function abc() {
  console.log(a)
  if(true) {
    var a = 123
    console.log('in', a)
  }
  // console.log('out', a)
}
abc()

//undefined
//in 123
```


> 호이스팅 : 선언부를 유효범위 최상위로 끌어올리는 현상 

**변수 만들때 일단 const 만들고 재할당이 필요할 때 let을 사용한다!!**

* * *

# 함수

## 선언과 표현 

1. 선언 : 호이스팅 O
2. 표현 : 호이스팅 X

```js 
//함수 선언
function abc() {

}

//함수 표현  < - 익명함수는 무조건 함수 표현!
const abe = function () {

}
```
선언과 표현의 호이스팅!! 

```js
const abc = {
  fn: function () { 
    console.log('FN')
  }
}
// fn()은 함수 표현! fn이라는 key 값에 할당하고 있음. 호이스팅 안됨!
abc.fn()  // FN

flyda() // Flyda!! 
 
function flyda() { // 함수 선언 호이스팅 됨!
  console.log('Flyda!!')
}
```


