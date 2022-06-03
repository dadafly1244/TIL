<template>
  <!-- 매개변수를 넣지 않으면 이벤트 객체, 매개변수를 넣으면 그 데이터를 활용할 수 있는 구조 -->
  <button @click="handler('hi')">
    Click me!
  </button>
  <button @click="handler('what')">
    Click 2
  </button>
</template>
<script>
export default{
  methods: {
    handler(msg){
      console.log(msg)
    }
  }
}
</script>
