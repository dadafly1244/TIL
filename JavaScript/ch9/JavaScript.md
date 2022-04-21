# 스타벅스 예제를 위한 간단한 자바스크립트

## 1. DOM API

* js code

### html 요소(element) 1개 찾기/ 검색

html 요소에 적용할 수 있는 메소드 
`boxEL.addEventListener(이벤트, 핸들러);`

- 인수(Arguments)를 2개를 추가 가능!

> 1-이벤트(event, 상황)

`boxEL.addEventListener('click',핸들러);`

>2-핸들러(handler, 실생할 함수)

`boxEL.addEventListener('click', function(){
  console.log('Click~!')
})`


예제 코드 


```js
let boxEL = document.querySelector('.box');

console.log(boxEL)

boxEL.addEventListener('click', function (){
  console.log('Click!!')
})
```





```js

let boxEL = document.querySelector('.box');
//요소의 클레스 정보 객체 활용
boxEL.classList.add('active');
let isContains  = boxEL.classList.contains('active');
console.log(isContains);//true

boxEL.classList.remove('active');
isContains = boxEL.classList.contains('active');
console.log(isContains);//false

```



```js

// DOM API
let boxEL = document.querySelector('.box');

console.log(boxEL);

boxEL.addEventListener('click', function (){
  console.log('click!!');
  boxEL.classList.add('active');
  console.log(
    boxEL.classList.contains('active')
  );
  boxEL.classList.remove('active');
  console.log(
    boxEL.classList.contains('active')
  )
})
```

```js

const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

//찾은 요소들 반복해서 함수 실행!
//익명 함수를 인수로 추가! 유사배열!! like-array
//boxEls.forEach(function () {});

//첫번째 매개함수(boxEl):반복중인 요소
// 두 번째 매개함수(index): 반복 중인 번호 
//boxEls.forEach(function (boxEl,  index) {});

//출력 
boxEls.forEach(function(boxEl, index){
  boxEl.classList.add(`order-${index+1}`);
  console.log(index, boxEl)
})

```


html 코드 

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script defer src="./main.js"></script>
</head>
<body>
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  
</body>
</html>
```

```js
const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function(boxEl, index){
  boxEl.classList.add(`order-${index+1}`);
  console.log(index, boxEl)
})
```


```js
const boxEl = document.querySelector('.box');

//Getter. 값을 얻는 용도 
console.log(boxEl.textContent);

//setter, 값을 지정하는 용도 
boxEl.textContent = 'hellodada!';
console.log(boxEl.textContent);
```


## 메소드 체이닝 

```js
const a ='Hello~!!'
//split: 문자열 인수 기준으로 조개서 배열로 반환.
// reverse:배열을 뒤집기 
//join: 배열을 인수 기준으로 문자로 병합해 반환 
const b = a.split('').reverse().join('')//메소드 체이닝 

console.log(a);//Hollo~!!
console.log(a);//!!~olloH

```