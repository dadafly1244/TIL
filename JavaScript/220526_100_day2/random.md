to create a random number between 0 and 10:

`let value3 = Math.floor(Math.random() * 10);`

generate a number between 1 and 10, including 10 
` const rand = Math.floor(Math.random() * 10 + 1);// 1~10`


Generate a number between 0 and 10, including 10
```js
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}
```

// Generate a random number between 2 and 10, including both 2 and 10
```js
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```
 generateRandomIntegerInRange(2,10)
> https://www.udacity.com/blog/2021/04/javascript-random-numbers.html

> https://hianna.tistory.com/454
곱해주는 수에 1 더하면 max 값 포함이고 더해주는 수는 시작하는수...?