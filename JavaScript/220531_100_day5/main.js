const checkBtnEl = document.querySelector('.check-btn ')
const resultEl = document.querySelector('.result ')

checkBtnEl.addEventListener('click',checkPalindrome)

//madam
function checkPalindrome() {
  const word = document.querySelector('.input-text').value;
  let len = word.length;

  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
  // console.log(end)
  // console.log([end])
  // console.log([...end])
  // console.log(end.split(""))
  // let flip = end.split("").reverse().join("");
  let flip = [...end].reverse().join("");
  if (start == flip) {
    resultEl.innerHTML = `${word.toUpperCase()} is a palindrome`;
  } else {
    resultEl.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
  }

}

