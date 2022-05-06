# BootStrap

## 사용하기 

공식 홈페이지 : https://getbootstrap.com/

1. css & js cdn 넣기 
```html 
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
```

2. 원하는 스타일 찾기 

- docs > components > 원하는 것 찾기 


참고 :  코드에서 `aria-current="true"` 부분은 웹 접근성과 관련된 부분! 


3. 원하는 양식 찾기
- docs > forms > 원하는 양식 찾기 
:https://getbootstrap.com/docs/5.1/forms


4. 성능상의 이유로 초기화가 필요한 기능들
- docs > components > tooltips
:https://getbootstrap.com/docs/5.1/components/tooltips/

성능상의 이유로 추가 되어져 있지 않고, 초기화가 필요한 기능들이다. 

html 부분을 추가하는 것 만으로는 동작이 되지 않고, js를 추가해야 동작한다. 

5. npm 프로젝트 생성 
- 터미널에서! 
```shell
npm init -y
npm i -D parcel-bundler
```

- package.json 파일
```json
"scripts": {
  "dev": "parcel index.html",
  "build": "parcel build index.html"
}
```

- bootStrap 설치
터미널
```shell
npm install bootstrap
```

- import 하기 
  - js
```js
// Import all plugins
import * as bootstrap from 'bootstrap';

// Or import only needed plugins
import { Tooltip as Tooltip, Toast as Toast, Popover as Popover } from 'bootstrap';

// Or import just one
import Alert as Alert from '../node_modules/bootstrap/js/dist/alert';

//강의에서..!! 
import bootstrap from '../node_modules/bootstrap/js/bootstrap.bundle';
```
  - scss
```scss
@import "../node_modules/bootstrap/scss/bootstrap";
```

- cdn대신 설치를 하면 장점!!
필요한 기능만 가져올 수 있다! 

6. 테마 색상 커스터마이징

https://getbootstrap.com/docs/5.1/customize/overview/


```scss
// Required
@import "../node_modules/bootstrap/scss/functions";

// Default variable overrides
$body-bg: #000;
$body-color: #111;

// Required
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// Optional Bootstrap components here
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
// etc
```

7. 원하는 기능만 가져오기 

https://getbootstrap.com/docs/5.1/customize/optimize/

프로젝트에서 필요한 부분만 가져와서 사용할 수 있어서 편리함!!

```scss
@import "modal";
```
 scss의 경우 다 가지고 와도 성능적으로 크게 차이 없음.

 하지만 js의 경우 성능이 크게 차이날 수 있음!! 


```js
//import 'bootstrap/js/dist/modal';

import Modal from 'bootstrap/js/dist/modal'

const modal = new Modal(document.getElementById('myModal'))
```

혹시 동작이 안된다면 popperjs를 설치해준다 
```shell
npm i @popperjs/core
```

