const word = document.querySelector(".input-text");
const checkBtnEl = document.querySelector('.check-btn ')
const resultEl = document.querySelector('.result ')

word.focus() 
word.addEventListener('focus',clearHmtl)

function clearHmtl() {
  word.value = ''
  resultEl.innerHTML = '';
}

function countVowel() {
  let vowelCount = 0;
  let wordVal = word.value.toLowerCase();

  for (let i = 0; i < wordVal.length; i += 1) {
    let letter = wordVal[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      vowelCount += 1;
    }
  }
  resultEl.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
}

const formEl = document.querySelector('.vowel')
formEl.addEventListener('submit', e => {
  e.preventDefault();
  countVowel()
})

// div로 만들었을때....
// checkBtnEl.addEventListener("click", countVowel);
// word.addEventListener('keydown', e=> {
//   if (e.key === 'Enter') {
//     countVowel()
//   } 
// })

