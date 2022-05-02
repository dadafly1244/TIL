## Lodash 

```js
import _ from 'lodash'

const usersA = [
  {userId: '1', name: 'HEROPY'},
  {userId: '2', name: 'NEO'}
]
const usersB = [
  {userId: '1', name: 'HEROPY'},
  {userId: '3', name: 'AMY'}
]


const usersC = usersA.concat(usersB)
console.log('concat', usersC)
//[{"userId":"1","name":"HEROPY"},{"userId":"2","name":"NEO"},{"userId":"1","name":"HEROPY"},{"userId":"3","name":"AMY"}]
// 단순히 합치기 때문에 중복되는 값이 나온다 

console.log('uniqBy', _.uniqBy(usersC, 'userId'))
// [{"userId":"1","name":"HEROPY"},{"userId":"2","name":"NEO"},{"userId":"3","name":"AMY"}]
//'userId'기준으로 고유한 속성만 남겨준다. 즉 이미 중복이 발생한 배열 데이터에서 중복을 제거할 때 사용하기
//하나의 배열 데이터에서 고유화를 시켜주는 속성

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)
//[{"userId":"1","name":"HEROPY"},{"userId":"2","name":"NEO"},{"userId":"3","name":"AMY"}]
//'userId'속성을 기준으로 고유하게 합쳐서 새로운 배열을 만들어줌. 
//여러 배열 데이터에서 고유화를 시켜주는 속성
```

```js
import _ from 'lodash'

const users = [
  {userId: '1', name: 'HEROPY'},
  {userId: '2', name: 'NEO'},
  {userId: '3', name: 'Amy'},
  {userId: '4', name: 'Evan'},
  {userId: '5', name: 'Lewis'}

]

const foundUser = _.find(users, {name: 'Amy'})
const foundUserIndex = _.findIndex(users, {name: 'Amy'})
console.log(foundUser) //{userId: '3', name: 'Amy'}
console.log(foundUserIndex) //2

_.remove(users, {name: 'HEROPY'})
console.log(users)
// [
//   {userId: '2', name: 'NEO'},
//   {userId: '3', name: 'Amy'},
//   {userId: '4', name: 'Evan'},
//   {userId: '5', name: 'Lewis'}
// ]
```

`_.cloneDeep` : https://lodash.com/docs/4.17.15#cloneDeep
`_.throttle` : https://lodash.com/docs/4.17.15#throttle
