const links = document.querySelectorAll(".nav-list li a");

for (const link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
  if(window.scrollY < 50) {
    
  }
  hideMenu();
}

// RESPONSIVE MOBILE MENU
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

const showMenu = () => {
  hamburger.style.display = "none";
  close.style.transform = "translateY(0)";
  menu.style.transform = "translateY(0)";
};

const hideMenu = () => {
  close.style.transform = "translateY(-20rem)";
  hamburger.style.display = "block";
  menu.style.transform = "translateY(-200%)";
};

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);


// https://leonkong.cc/posts/scss-media-query.html : 지금은 css라서 적용이 만들기 너무 귀찮을 것 같지만 scss에서는 쉽게 적용이 가능하기 때문에 추천하는 페이지..