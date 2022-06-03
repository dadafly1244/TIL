<template>
  <!-- 이벤트 캡쳐링 -->
  <!-- A 출력 -->
  <!-- 부모요소를 정확하게 클릭했을때만 출력 -->
  <!-- target와 currentTarget가 일치했을때 동작 -->
  <div
    class="parent"
    @click.self="handlerA">
    <div
      class="child"></div>
  </div>
</template>

<script>
export default{
  methods:{
    handlerA(event){
      console.log(event.target)
      console.log(event.currentTarget)
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
