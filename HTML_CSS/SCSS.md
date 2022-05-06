# SCSS

## 실습 1 
html 
```html 
<body>
  <div class="container">
    <h1>SCSS</h1>
  </div>
</body>
```

scss
```scss
$color: yellow;

.container {
  h1 {
    color: $color;
  }
}
```

# 실습  2 - 가져오기 
sub.scss
```scss
$color: greenyellow;
body {
  .container {
   h1 {
     color: $color;
   } 
  }
}
```

main.scss
```scss
@import url("./sub.scss");
// @import "./sub.scss";
// @import "./sub.scss", "다른파일";
$color: yellow;

.container {
  h1 {
    color: $color;
  }
}
```

## 간단 정리 

1. 주석 

/* 컴파일해도 남아있는 주석*/

// 사라지는 주석

2. 상위(부모) 선택자 참조 

```scss
.btn {

  &.active

}
```

위 코드는 다음과 같다 `.btn.active {}`

```scss
fs {
	&-smaill {font-size: 12px;}
    &-large {font-size: 14px;}
}

.fs-samll{
}
.fs-large{
}
```

&는 상위 선택자를 그냥 가지고 온다고 생각하면된다!

