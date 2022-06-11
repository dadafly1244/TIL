<template>
  <h1>{{ msg }}</h1>
  <input
    type="text" 
    :value="msg"
    @input="msg = $event.target.value" />
</template>
<!-- 한글입력의 경우 v-model 대신 이 방법으로 양방향 데이터 바인딩이 필요함/ -->
<!-- 양방향 데이터 바인딩 -->
<script>
export default{
  data() {
    return {
      msg: 'helloworld!'
    }
  }
}
</script>
