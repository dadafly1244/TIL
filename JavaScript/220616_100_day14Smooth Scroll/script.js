const links = document.querySelectorAll(".nav-list li a");

for (const link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  console.log('일반 안에 this',this)
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}


// for (const link of links) {
//   link.addEventListener("click", e=> {
//     console.log('화살표',this)
//     return smoothScroll(e)
//   });
// }



// for (const link of links) {
//   link.addEventListener("click", e=> smoothScroll(e, link));
// }

// function smoothScroll(e, link) {
//   e.preventDefault();
//   console.log(link)
//   const href = link.getAttribute("href");
//   document.querySelector(href).scrollIntoView({
//     behavior: "smooth",
//   });
// }