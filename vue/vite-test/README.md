provide/inject

![stro](D:\FE\TIL\vue\vite-test\store써야하는이유.png)

이런 구조일때는 store을 쓰는 것이 좋다!! 

provide/inject
조상한테 받을때!!
최 상위 조상이 아니라 모든 조상에서 받을 수 있음!!
provide로 제공되는 인젝트는 반응형 데이터가 아님!..ㅠ
반응형이 없고 데이터를 후손으로 던지는 역할 밖에 안함!! 


computed함수에서 리턴하는 것이 반응형임! 
조상에게 계산하는 메소드도 넣어줘야함!! 


app
```vue 
<template>
  <HelloWorld />
  <Brother /> 
</template>

<script>
import {computed} from 'vue'
import HelloWorld from '~/components/HelloWorld.vue'
import Brother from '~/components/Brother.vue'
export default {
  components: {
    HelloWorld,
    Brother
  },
  provide() {
    return {
      count: computed(() => this.count),
      increase: this.increase
    }
  },
  data() {
    return {
      count : 0
    }
  },
  methods: {
    increase() {
      this.count += 1
    }
  }
}

</script>
```

hello
```vue
<template>
  <h1>{{ count }}</h1>
  <button @click="increase">
    INCREASE
  </button>
</template>

<script>
export default {
 inject: ['count', 'increase']
}

</script>

```

brother
```vue
<template>
  <h2>{{ count }}</h2>
</template>

<script>
export default {
 inject: ['count']
}

</script>
```

이렇게 되면 로직이 산으로감... brother이랑 hello가 통신하는 느낌이 아니고 app이라는 조상요소에 넣는 방식으로 데이터 통신을 했음...!! brother이랑 hello만  필요한걸 app에도 정의함.. 최악!! 


store로 하기!!! 

vuex 설치!!! 

store은 중앙집중식 상태관리저장소 
state -> 관리할 데이터 
getter




////
store에서 데이터 가져올때 컴픁티드

뮤테이션 commit
action에서는 dispach





모듈화는 좋은 기능이지만 네임스페이스를 명시해줘야함...!!! 

