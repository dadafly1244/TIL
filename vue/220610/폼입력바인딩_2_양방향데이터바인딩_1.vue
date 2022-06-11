<template>
  <h1>{{ msg }}</h1>
  <input
    type="text" 
    :value="msg"
    @input="handler" />
</template>

<!-- 양방향 데이터 바인딩 -->
<script>
export default{
  data() {
    return {
      msg: 'helloworld!'
    }
  },
  methods: {
    handler(event) {
      console.log(event.target.value)
      this.msg=event.target.value
    }
  }
}
</script>
