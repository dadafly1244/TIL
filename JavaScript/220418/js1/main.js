// //함수 선언
// function abc() {

// }

// //함수 표현 
// const abe = function () {

// }

const abc = {
  fn: function () {
    console.log('FN')
  }
}
abc.fn() // fn()은 함수 표현! fn이라는 key 값에 할당하고 있음. 호이스팅 안됨!

flyda()

function flyda() { // 함수 선언 호이스팅때문에!! 
  console.log('Flyda!!')
}