# transition 전환
전환 mdn : https://developer.mozilla.org/ko/docs/Web/CSS/transition

## transition : 속성명 **지속시간** 타이밍함수 대기시간;
단축형으로 작성시 **지속시간**은 필수 포함!
* 요소의 전환(시작과 끝) 효과를 지속하는 단축 속성

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
  <div></div>
</body>
</html>

```


```css
div{
  width: 100px;
  height: 100px;
  background-color: orange;
}

/* 마우스를 올리면 */
div:hover{
  width: 300px;
  background-color: royalblue;
  /* 전환 */
  transition: 1s;
}
```

### transition-property 
* 전환 효과를 사용할 속성 이름을 지정
- transition-property : all
  - 모든 속성에 적용
- transition-property : 속성이름
  - 전환 효과를 사용할 속성 이름 명시
  
```css
transition: width 1s;
```

### transition-duragion
* 전환 효과의 지속시간을 지정
- transition-duragion : 0s
  - 전환 효과 없음
- transition-duragion : 시간
  - 지속시간(s)을 지정

```css
div{
  width: 100px;
  height: 100px;
  background-color: orange;
}

/* 마우스를 올리면 */
div:hover{
  width: 300px;
  background-color: royalblue;
   /* 특정 속성에 전환효과 주고 싶은경우 */
   transition: 
    width 0.5s,
    background-color 2S;
}

/* 마우스로 클릭 */
div:active{
  width: 300px;
  background-color: green;
}
```


### transition-timing-function
* 전환 효과의 타이밍(Easing) 함수를 지정
- transition-timing-function : ease;
  - 느리게 - 빠르게 - 느리게
- transition-timing-function : linear;
  - 일정하게
- transition-timing-function : ease-in;
  - 느리게 - 빠르게
- transition-timing-function : ease-out;
  - 빠르게 - 느리게
- transition-timing-function : ease-in-out;
  - 느리게 - 빠르게 - 느리게


> 참고 구글 검색어 : easing functions 
> easing functions : asing 함수 치트 시트 :  https://easings.net/ko
> easing functions mdn :  https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function
> tweenmax easing: https://greensock.com/docs/v2/Easing 전환효과 이해를 위해서 참고하기! 


### transition-delay
* 전환 효과가 몇 초 뒤에 시작할지 대기시간을 지정
- tansition-delay : 0
  - 대기시간 없음
- tansition-delay : 시간
  - 대기시간(s)을 지정
