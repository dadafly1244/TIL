<template>
  <!-- 스크롤과 로직처리를 분리해서 스크롤이 스무스하게 되게 만들어준다 -->
  <div
    class="parent"
    @wheel.passive="handler">
    <div class="child"></div>
  </div>
</template>

<script>
export default{
  methods:{
    handler(event){
      //휠에 부하가 걸려서 잘 실행이 안됨
      for(let i =0; i< 10000; i+= 1){
        console.log(event)
      }
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
   overflow: auto;
    .child{
     width:100px;
     height:2000px;
     background-color:orange;
   }
 }
</style>
