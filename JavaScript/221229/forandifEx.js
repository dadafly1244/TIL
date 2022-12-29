const grades = [88.34, 90, -95, -35, 44.4, 100, 213];
//['88점', '90점', '44점', '100점']

/*
1. 0~100 사이의 숫자 인지 
2. 소수점 제거하기 
3. '점' 문자 추가
4. 출력
*/

//절차적 프로그래밍 
console.time("절차")
const validGrades = [];
for(let i = 0; i < grades.length; i += 1){
  if(grades[i] >= 0 && grades[i] <=100){
    const validGrade = Math.floor(grades[i]) + '점';
    validGrades.push(validGrade);
  }
}

for (let index = 0; index < validGrades.length; index += 1){
  console.log(validGrades[index])
}
console.timeEnd("절차")

//리팩 1 
console.time("리1")

const positiveGrades = grades.filter(el => el >=0 && el <=100);
const newGrades = positiveGrades.map(el => Math.floor(el) + '점');
newGrades.forEach(el => console.log(el));
console.timeEnd("리1")


//리팩2
console.time("리2")

grades
  .filter(el => el >=0 && el <=100)
  .map(el => Math.floor(el) + '점')
  .forEach(el => console.log(el));

console.timeEnd("리2")

//리팩3

console.time("리3")

const validScore = el => el > 0 && el <= 100;
const toInteger = el => Math.floor(el);
const plusSuffix = el => el + "점";
const printEl = el => console.log(el);

grades
  .filter(validScore)
  .map(toInteger)
  .map(plusSuffix)
  .forEach(printEl)

console.timeEnd("리3")

/**
 * 함수형으로 코딩하는 것의 장점 
 * 사고의 흐름에 따라서 코딩할 수 있고 문장처럼 읽을 수 있다.
 * 함수가 생겼으니 다른 곳에서 사용하기쉽다 
 * test가 쉽다.
 * 
 * 함수형으로 코딩하는 것의 단점
 * 성능상 조금 느릴 수 있다. 
 */