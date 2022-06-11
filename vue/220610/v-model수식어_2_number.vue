<template>
  <h1>{{ msg }}</h1>
  <input
    v-model.number.lazy="msg"
    type="text" />
</template>
<!-- 선언을 숫자로 해도 input에서 string으로 입력이됨!! 
그래서 v-model.number="msg"라고 선언을 해줘야 숫자로 입력받을 수 있음! -->
<script>
export default{
  data(){
    return{
      msg: 123
    }
  },
  watch: {
    msg() {
      console.log(typeof this.msg)
    }
  }
}
</script>
