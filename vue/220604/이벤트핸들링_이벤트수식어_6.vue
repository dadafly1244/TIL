<template>
  <!-- 이벤트 버블링 방지 -->
  <div
    class="parent"
    @click="handlerA">
    <div
      class="child"
      @click.stop="handlerB"></div>
  </div>
</template>

<script>
export default{
  methods:{
    handlerA(){
      console.log('A')
    },
    handlerB(){
      console.log('B')
    }
  }
}
</script> 

<style scoped lang="scss">
  .parent{
   width:200px;
    height:100px;
   background-color:royalblue;
   margin:10px;
   padding:10px;
    .child{
     width:100px;
     height:100px;
     background-color:orange;
   }
 }
</style>
