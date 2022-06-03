 # palindrome
Palindrome(회문)은 문자열을 거꾸로 해도 원래의 문자열과 같은 문자열인 특징을 가지고 있는 문자열을 가리키는 말입니다.
예시: 토마토, abdba, 토마토맛토마토


https://soldonii.tistory.com/21

인덱스 번호로 하면 안되나? ㄷㄷ -> 찾아보니까 그냥 대부분 reverse나 reduce를 사용하는 듯..!
```js
function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  // 또는 const reversed = str.split('').reduce((rev, char) => char + rev, '');
  return reversed === str ? true : false;
}

```