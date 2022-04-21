const a ='Hello~!!'
//split: 문자열 인수 기준으로 조개서 배열로 반환.
// reverse:배열을 뒤집기 
//join: 배열을 인수 기준으로 문자로 병합해 반환 
const b = a.split('').reverse().join('')//메소드 체이닝 

console.log(a);//Hollo~!!
console.log(b);//!!~olloH

