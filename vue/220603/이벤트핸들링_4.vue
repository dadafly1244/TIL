<template>
  <!-- 하나의 요소에 이벤트가 발생했을때 실행할 메서드가 여러개인 경우에 호출하는 괄호를 생략할 수 없다. -->
  <button @click="handlerA(),handlerB()">
    Click me!
  </button>
</template>
<script>
export default{
  methods:{
    handlerA(){
      console.log('A')
    },
    handlerB(){
      console.log('B')
    }
  }
}
</script>
