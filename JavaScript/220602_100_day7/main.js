const copyBtnEl = document.querySelector(".btn");
const couponStringEl = document.querySelector(".couponString");



const copyText = (text) => {
  navigator.clipboard.writeText(text).then( () => {
    //alert('클립보드에 복사되었습니다!')
    copyBtnEl.textContent = "Copied!!!";
    setTimeout(() => {
      copyBtnEl.textContent = "Copy";
    }, 3000);
  },
  () => {
    alert('복사를 다시 시도해주세요!')
  }
  )
}


copyBtnEl.addEventListener("click", (e) => {
  e.preventDefault()// 왜인지는 모르겠지만 새로고침이 자꾸 일어나는거 같아서 일단 넣으니까 잘 됨..!! 위에 코드랑 비교해보고 싶다아아!!
  console.log(couponStringEl.value)

  copyText(couponStringEl.value)

});

// const copyText = (e) => {
//   e.preventDefault();

//   couponStringEl.select();
//   couponStringEl.setSelectionRange(0, 999999);
//   document.execCommand("copy");

//   btn.textContent = "Copied!!!";
//   setTimeout(() => {
//     btn.textContent = "Copy";
//   }, 3000);
// };

// btn.addEventListener("click", copyText);

//execCommand는 더이상 사용하지 않는다... 브라우저에서 점점 지원을 안한다고...!! 