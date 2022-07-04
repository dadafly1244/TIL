# 220705 [Vue3] 컴포지션 API - 컴포넌트 심화


## 컴포넌트 등록 

### 전역 등록

`app.component()` 메서드를 사용하여 컴포넌트를 전역으로 사용할 수 있다. 

```js
import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/BaseCard.vue'

createApp(App)
  .component('BaseCard', BaseCard)  // <BaseCard />로 등록하면 <base-card />로 참조할 수 있음!
  .mount('#app')

```

사용예시 

```vue

<script setup>
import Mybutton from './components/Mybutton.vue'

</script>

<template>
  <!-- 전역등록 -->
  <BaseCard>
    <h1>BaseCard</h1>
  </BaseCard>
  <base-card>
    <h1>base-card</h1>
  </base-card>

  <!-- 지역등록 -->
  <Mybutton />
</template>

```



### 폴스루(fallthrough: 대체) 속성

컴포넌트에 전달되는 속성 또는 `v-on`이벤트 리스너이다.
props또는 emits에 명시적으로 선언되지 않은 속성이다. 
일반적으로 class, style, id 속성이 있다. 

```vue 
<script setup>
import Mybutton from './components/Mybutton.vue'

</script>

<template>
  <!-- 전역등록 -->
  <BaseCard>
    <h1>BaseCard</h1>
  </BaseCard>
  <base-card>
    <h1>base-card</h1>
  </base-card>

  <!-- 지역등록 -->
  <Mybutton />
  <Mybutton class="large" /> 
  <!-- <button class="large">클릭하기</button> -->
</template>
```

이미 class와 style 속성이 있는 경우 상위 엘리먼트에서 상속된 값과 병합된다. 






