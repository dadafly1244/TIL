<template>
  <h1>{{ msg }}</h1>
  <input
    v-model.trim.lazy="msg"
    type="text" />
</template>
<!-- 입력칸에서 공백이 다 사라짐!! -->
<script>
export default{
  data(){
    return{
      msg: 123
    }
  },
  watch: {
    msg() {
      console.log(this.msg)
    }
  }
}
</script>
