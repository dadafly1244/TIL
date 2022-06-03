<template>
  <!-- <button @click="handler()"> 매개변수가 없을때 소괄호 생략할 수 있음 -->
  <button @click="handler">
    Click me!
  </button>
</template>
<script>
export default{
  methods: {
    handler(e){
      console.log(e)
      console.log(e.target.textContent)
    }
  }
}
</script>
