# CSS 변환

## 1. Transform 

<사용한 html code >
```html

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
  <link rel="stylesheet" href="./main.css">
  <title>Document</title>
</head>
<body>
  <div class="container">
    <div class="item">AB</div>
  </div>
</body>
</html>

```


* 함수를 띄어쓰기로 구분해서 여러가지 효과를 줄 수 있음
  * transform : 변환함수1 변환함수2 변환함수3 ...;
* 사용할 수 있는 함수의 종류
  * trnasform : 원근법 이동 크기 회전 기울임;


### 1-1. 2D 변환 함수 
- transform: translate(x,y)
  - 이동(x축, y축) px
- transform: translateX(x)
  - 이동(x축) px
- transform: translateY(y)
  - 이동(y축) px
- transform: scale(x,y)
  - 크기(x축, y축) px
- transform: rotate(degree)
  - 회전(각도) deg ex)transform: rotate(45deg)
- transform: skewX(x)
  - 기울임(x축) deg 
  - ex) transform: skewX(-45deg)
- transform: skewY(y)
  - 기울임(y축) deg


  
< 2D 변환함수 사용 예시 > 

```css

body{
  padding:100px;
}

.container{
  width: 100px;
  height:100px;
  background-color:royalblue;
}

.container .item{
  width: 100px;
  height: 100px;
  background-color: orange;
  /* 45도 기울이고 1.3배 키우기 */
  transform: rotate(45deg) scale(1.3);
}

```

### 1-2. 3D 변환 함수 

- transform: perspective(n) 
  - 원근법(거리) px : 어떤 거리에서 물체를 보느냐에 따라 왜곡이 달라짐. **제일 앞에 작성**해야 적용됨!!
- transform: rotateX(x)
  - 회전(x축) deg
  - ex) transform: perspective(500px) rotate(45deg) --> 원근법을 주지 않으면 회전하는 모습으로 안보임.! 
- transform: rotateY(y)
  - 회전(y축) deg

< 3D css code >
```css

body{
  padding:100px;
}

.container{
  width: 100px;
  height:100px;
  background-color:royalblue;
}

.container .item{
  width: 100px;
  height: 100px;
  background-color: orange;
  
  transform: perspective(300px) rotateX(45deg) translateX(100px)
}

```


## 2. perspective


* 하위 요소를 관찰하는 원근 거리를 지정 **속성!**
  
- perspective : 단위
  - px 등 단위로 지정
  - ex) perspective : 600px

* **perspective 속성과 함수차이**
* 속성 (**권장!**)
  * perspective : 600px
  * 관찰 대상의 부모에 적용 
  * perspective-origin 기준점(요소가 변환이 되는 위치나 기준)
* 함수
  * transform:perspective(600px);
  * 관찰 대상에 적용
  * transform-origin 기준점 


<사용한 html코드>
```html

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
  <link rel="stylesheet" href="./main.css">
  <title>Document</title>
</head>
<body>
  <div class="container">
    <div class="item">박</div>
  </div>
</body>
</html>
```

<사용한 css code>
```css
body{
  padding:100px;
}

.container{
  width: 100px;
  height:100px;
  background-color:royalblue;
  /* perspective 속성은 변환 대상의 부모 요소에 부여함 */
  perspective: 250px;
}

.container .item{
  width: 100px;
  height: 100px;
  background-color: orange;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  transform: rotateY(45deg);
  /* perspective() 함수는 변환 대상의 transform에 앞부분에 명시 */
  /* transform: perspective(45deg) rotateY(45deg); */
}

```


## 3. backface-visibility
* 3D 변환으로 회전된 요소의 뒷면 숨김 여부
  * transform: rotateY(100deg) or rotateX(100deg)을 사용할 때 뒷면을 보여줄지 말지!!  
 

- backface-visibility: visible
  - 뒷면 보임
- backface-visibility: hidden
  - 뒷면 숨김 

 ```css
  transform: rotate(45deg);
  backface-visibility: hidden;
  ```

<사용한 html code >
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
  <link rel="stylesheet" href="./main.css">
  <title>Document</title>
</head>
<body>
  <div class="container">
    <div class="item">박</div>
  </div>
</body>
</html>
```

<사용한 css code>
```css
body{
  padding:100px;
}

.container{
  width: 100px;
  height:100px;
  background-color:royalblue;
  /* perspective 속성은 변환 대상의 부모 요소에 부여함 */
  perspective: 250px;
}

.container .item{
  width: 100px;
  height: 100px;
  background-color: orange;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* 속성의 뒷면이 출력되면 안보여줌  */
  transform: rotateX(180deg);
  backface-visibility: hidden;

  /* 다시 앞면으로 출력하면 보임! */
  /* transform: rotateX(0deg);
  backface-visibility: hidden;
   */
}
```


