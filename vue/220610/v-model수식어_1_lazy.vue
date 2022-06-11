<template>
  <h1>{{ msg }}</h1>
  <input
    v-model.lazy="msg"
    type="text" />
</template>
<script>
export default{
  data(){
    return{
      msg:'Hello world!'
    }
  }
}
</script>
