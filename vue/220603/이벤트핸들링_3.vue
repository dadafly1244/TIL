<template>
  <!-- 매개변수도 필요하고 이벤트 객체도 필요한 경우 -->
  <button @click="handler('hi', $event)">
    Click me!
  </button>
  <button @click="handler('what', $event)">
    Click 2
  </button>
</template>
<script>
export default{
  methods: {
    handler(msg, event){
      console.log(msg)
      console.log(event)
    }
  }
}
</script>
