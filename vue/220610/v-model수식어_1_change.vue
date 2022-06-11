<template>
  <h1>{{ msg }}</h1>
  <input
    type="text" 
    :value="msg"
    @change="msg = $event.target.value" />
</template>
<!-- @change="msg = $event.target.value" -->
<!-- 입력을 하고 있는 동안에는 갱신을 하지 않고 enter나 tap으로 입력이 완료가 되면 갱신됨 -->
<script>
export default{
  data() {
    return {
      msg: 'helloworld!'
    }
  }
}
</script>
