<template>
  <div
    class="parent"
    @wheel="handler">
    <div class="child"></div>
  </div>
</template>

<script>
export default{
  methods:{
    handler(event){
      console.log(event)
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
