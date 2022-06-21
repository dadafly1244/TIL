import './scss/main.scss'

const toggleBtn = document.querySelector('.navbar__toggleBtn')
const menuEl = document.querySelector('.navbar__menu')
const iconsEl = document.querySelector('.navbar__icons')

toggleBtn.addEventListener('click', () => {
  menuEl.classList.toggle('active')
  iconsEl.classList.toggle('active')
})