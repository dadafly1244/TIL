const numberEl  = document.querySelector('.number')
const buttonEl  = document.querySelector('.generate')

const generateNumber = () => {
  //Generate number btn 1 and 10 
  const randomNumber = Math.floor(Math.random() * 10 + 1)
  numberEl.innerHTML = randomNumber
}

buttonEl.addEventListener("click", generateNumber)

generateNumber() // 첫 화면에 0이 아니라 랜덤 숫자로 시작하기 위해서 호출


