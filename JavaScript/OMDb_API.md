## OMDb_API

>https://www.omdbapi.com/
"주소?속성=값&속성=값" 


axios를 설치해준다  `npm install axios `
자세한 사용법 > https://github.com/axios/axios

package.json 파일에 dependencies 부분에 다음과 같이 잘 설치 되어있는지 살펴본다!! 
```json
 "dependencies": {
    "axios": "^0.27.2",
    "lodash": "^4.17.21",
    "regenerator-runtime": "^0.13.9"
  }
```

이후에 잘 받아오는지 한번 확인한다.

```js
import axios from "axios";

function fetchMovies() {
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then((response) => {
      console.log(response)
    } )
}

fetchMovies()
```

만약 성공했다면 간단하게 영화 제목과 포스터를 출력하는 예제를 만들어보자!! 

#### index.html 
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.min.js" integrity="sha512-odNmoc1XJy5x1TMVMdC7EMs3IVdItLPlCeL5vSUPN2llYKMJ2eByTTAIiiuqLg+GdNr9hF6z81p27DArRFKT7A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <link rel="stylesheet" href="./main.css">
  <script defer src="./main.js"></script>
</head>

<body>
  <h1></h1>
  <img src="" alt="" width="200">
</body>

</html>
```

#### main.js
```js
import axios from "axios";

function fetchMovies() {
  axios
    .get('https://www.omdbapi.com/?apikey={발급키넣기}&s=frozen')
    .then((res) => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Title
      imgEl.src= res.data.Search[0].Poster
    })
}

fetchMovies()
```
