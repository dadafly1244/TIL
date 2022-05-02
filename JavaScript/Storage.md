## Stroage

### Local Storage
localStorage의 데이터는 만료되지 않음. (지우지 않으면 반영구적으로 사용 가능.)
localStorage에 저장한 자료는 페이지 프로토콜별로 구분함. 특히 HTTP와 HTTPS는 다른 localStorage에 저장됨. 

저장하기 
`localStorage.setItem(key_키, value_값_문자형)`

읽기(가져오기)
`localStorage.getItem(key_키)`

지우기 
`localStorage.removeItem(key_키)`

```js
const user = {
  name: 'Flyda',
  age: 85,
  emails: [
    'sjdkfsldjf@gamil.com',
    'hello@naver.com'
  ]
}

//저장
localStorage.setItem('user', JSON.stringify(user))

//읽기
console.log(JSON.parse(localStorage.getItem('user')))

//삭제
localStorage.removeItem('user')
```


수정하는 방법!! (일단 저장(`localStorage.setItem()`)까지 수행되어서 storage에 'user'객체가 저장되어 있다는 전제하에 진행되는 코드이다. )

```js
const user = {
  name: 'Flyda',
  age: 85,
  emails: [
    'sjdkfsldjf@gamil.com',
    'hello@naver.com'
  ]
}

// Storage에 저장
//localStorage.setItem('user', JSON.stringify(user))

//문자열 형태의 Storage data 받아오기
const str = localStorage.getItem('user')
//객체 형식으로 바꾸기 
const obj = JSON.parse(str)
console.log(obj)

//값 수정하기 
obj.age = 22
//수정된 객체를 'user'키에 저장해주기_ 덮어쓰기 개념이다!! 
localStorage.setItem('user', JSON.stringify(obj))
```

JSON을 DB로 사용하는 방법인데, 도움을 주는 lowdb 패키지가 있다. 
> https://github.com/typicode/lowdb

### Session Storage
SessionStorage데이터는 페이지 세션이 끝날 때(페이지를 닫을 때) 사라짐. 