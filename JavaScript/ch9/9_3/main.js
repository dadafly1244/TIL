// DOM API
let boxEL = document.querySelector('.box');

//요소의 클레스 정보 객체 활용
boxEL.classList.add('active');
let isContains  = boxEL.classList.contains('active');
console.log(isContains);//true

boxEL.classList.remove('active');
isContains = boxEL.classList.contains('active');
console.log(isContains);//false
