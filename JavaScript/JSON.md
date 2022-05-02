## JSON 

json은 문자 데이터인데 객체 데이터 처럼 다루어진다. 

```js
// import myData from './myData.json'

const user = {
  name: 'Flyda',
  age: 85,
  emails: [
    'sjdkfsldjf@gamil.com',
    'hello@naver.com'
  ]
}

console.log('user', user)
// {
//   name: 'Flyda',
//   age: 85,
//   emails: [
//     'sjdkfsldjf@gamil.com',
//     'hello@naver.com'
//   ]
// }

const str = JSON.stringify(user)
console.log('str', str)
// str {"name":"Flyda","age":85,"emails":["sjdkfsldjf@gamil.com","hello@naver.com"]}
console.log(typeof str) //string

const obj = JSON.parse(str) 
console.log('obj',obj)
// {
//   name: 'Flyda',
//   age: 85,
//   emails: [
//     'sjdkfsldjf@gamil.com',
//     'hello@naver.com'
//   ]
// }
console.log(typeof obj) //object
```

### JSON.stringify()
> [mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
json 형식으로 변환해 줌!

### JSON.parse()
>[mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
json 형식인 문자열을 분석해서 js에서 쓸 수 있는 객체나 값으로 변환해줌! 

