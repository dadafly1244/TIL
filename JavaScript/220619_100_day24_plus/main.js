import './scss/main.scss'

const navMenuIconEl = document.querySelector(".nav-menu-icon")
const navItemsEl = document.querySelector(".nav-items")
const navCloseIconEl = document.querySelector(".nav-close-icon")



navMenuIconEl.addEventListener("click", () => {
  showMenu(true)
})
navCloseIconEl.addEventListener("click",() => {
  showMenu(false)
})

function showMenu (isShowMenu) {
  if(isShowMenu) {
    console.log(`show!!`)
    navMenuIconEl.style.display = "none"
    navItemsEl.style.display = "flex"
    navCloseIconEl.style.display = "block"
  } else { 
    navMenuIconEl.style.display = "flex"
    navItemsEl.style.display = "none"
    navCloseIconEl.style.display = "none"
  }

}