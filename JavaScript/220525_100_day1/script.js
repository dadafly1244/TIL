
// const addEL = document.querySelector(".add");
// const resetEl = document.querySelector(".reset");
// const subEl = document.querySelector(".subtrack");
const countEl = document.querySelector(".count");
const buttonsEl = document.querySelector(".buttons");

buttonsEl.addEventListener('click', e => {
  if (e.target.classList.contains("add")) {
    countEl.innerHTML++;
  }
  if (e.target.classList.contains("subtrack")) {
    countEl.innerHTML--;
  }
  if (e.target.classList.contains("reset")) {
    countEl.innerHTML = 0;
  }
  setColor()
}) 

function setColor() {
  if (countEl.innerHTML > 0) {
    countEl.style.color = 'yellow'
  } else if (countEl.innerHTML < 0 ){
    countEl.style.color = 'orangered'
  } else {
    countEl.style.color = '#FFF'
  }
}
