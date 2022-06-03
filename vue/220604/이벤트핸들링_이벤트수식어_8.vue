<template>
  <!-- 이벤트 캡쳐링 -->
  <!-- A 출력 -->
  <div
    class="parent"
    @click.capture.stop="handlerA">
    <div
      class="child"
      @click="handlerB"></div>
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
