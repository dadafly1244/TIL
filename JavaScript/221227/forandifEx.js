const grades = [88.34, 90, -95, -35, 44.4, 100, 213];
//['88점', '90점', '44점', '100점']

/*
1. 0~100 사이의 숫자 인지 
2. 소수점 제거하기 
3. '점' 문자 추가
4. 출력
*/


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
