<template>
  <h1>{{ msg }}</h1>
  <input
    type="text" 
    :value="msg" />
</template>
<!-- 단방향 데이터 바인딩 스크립트에서 tem으로만 연결됨! -->
<script>
export default{
  data() {
    return {
      msg: 'helloworld!'
    }
  }
}
</script>
