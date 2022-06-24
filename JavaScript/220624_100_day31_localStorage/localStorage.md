```js
//로컬스토리지
localStorage.setItem("name","myeongjin")
localStorage.getItem("name")

//세션스토리지
sessionStorage.setItem("name","myeongjin")
sessionStorage.getItem("name")

```

```js
// 객체 로컬 저장
const person = {
  fullName: "Nizk Neo",
  location: "Abuja",
};

localStorage.setItem("user", JSON.stringify(person)); // 객체를 -> json으로!!
JSON.parse(localStorage.getItem("user")) //json -> js에서 해석할 수 있는 형식으로!!


// 배열 로컬 저장
const fruits = ["Apple", "Banana", "Cherry"];
localStorage.setItem("fruits", JSON.stringify(fruits));

```



같이 연습한 로컬스토리지 사용하기!!
> https://github.com/hoona1011/100-Days-of-JS/tree/main/day031-Local%20Storage

```html
<body>
  <p>Hello World!!!</p>
  <div>아이디<input class='id' type="text"></div>
  <div>비밀번호<input class='password' type="password"></div>
  <button class="login">로그인</button><button class="logout">로그아웃</button>
  <br>    
  <button class="clear">로컬 스토리지 클리어</button>

  <script src="script.js"></script>
</body>
```

js
```js 
// LOCAL STORAGE METHODS
// setItem(): Add key and value to localStorage
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve the key of a localStorage

// window.localStorage.setItem("key", "value");
localStorage.setItem("userName", '박지훈');
localStorage.setItem("password", JSON.stringify(1234));
localStorage.setItem("isLoggedIn", JSON.stringify(false));

// 같은 key로 setItem 하면 덮어쓰기가 됨
// localStorage.setItem("userName", '홍길동'); 

const clear = document.querySelector('.clear');
const id = document.querySelector('.id');
const password = document.querySelector('.password');
const loginBtn = document.querySelector('.login')

const localId = localStorage.getItem('userName')
const localPassword = localStorage.getItem('password')




// input과 onchange의 차이를 알아봅시다
id.addEventListener('input', (e)=>{
    console.log(e.target.value)
  })


loginBtn.addEventListener('click', validation)


function validation () {
  if(id.value === localId && password.value === localPassword) {
    alert('로그인 성공')
    
  }
  else{
    alert('아이디나 비밀번호를 다시 확인해주세요')
  }
}

// 로컬 스토리지 클리어

clear.addEventListener('click', clearLocal)

function clearLocal () {
  localStorage.clear()
}

```

