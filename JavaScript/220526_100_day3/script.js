// let colorEl = Math.random();
// colorEl = Math.random().toString(16); // 16진수로 만들기 0.4dd0e9397816f
// colorEl = Math.random().toString(16).substring(2, 8); // 2번 인덱스 부터 8전까지 
// console.log(colorEl);

const hexEl = document.querySelector('.hex');
const buttonEl = document.querySelector('.generate');

const generateColor = () => {
  const randomColor= Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + randomColor
  hexEl.innerHTML = "#" + randomColor
}

buttonEl.addEventListener("click",generateColor);

generateColor() 

