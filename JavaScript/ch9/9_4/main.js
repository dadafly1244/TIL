// DOM API
let boxEL = document.querySelector('.box');

console.log(boxEL);

boxEL.addEventListener('click', function (){
  console.log('click!!');
  boxEL.classList.add('active');
  console.log(
    boxEL.classList.contains('active')
  );
  boxEL.classList.remove('active');
  console.log(
    boxEL.classList.contains('active')
  )
})