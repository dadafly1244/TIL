<template>
  <button @click="handler">
    Click me!
  </button>
  <h1 v-if="isShow">
    Hello ?!
  </h1>
  <h1 v-else-if="count > 5">
    count > 5
  </h1>
  <h1 v-else>
    Good~
  </h1>
</template>
<script>
export default{
  data(){
    return{
      isShow:true,
      count: 0
    }
  },
  methods:{
    handler(){
      this.isShow = !this.isShow
      this.count += 1
     }
  }
}
</script>
