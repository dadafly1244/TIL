<template>
  <h1>{{ msg }}</h1>
  <input
    v-model="msg" 
    type="text" />
  <input
    v-model="checked"
    type="checkbox" />
  <h1>{{ checked }}</h1>
</template>

<!-- 양방향 데이터 바인딩 -->
<script>
export default{
  data() {
    return {
      msg: 'helloworld!',
      checked: false
    }
  }
}
</script>
