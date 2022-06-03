<template>
  <button @click="handler">
    Click me!
  </button>
  <!-- 특정한 그룹으로 보이거나 보이지 않게 만들때!! 해당하는 부분은 렌더링 되지 않음 하지만 최상위 tem에서는 하면 안됨!! -->
  <template v-if="isShow">
    <h1>Title</h1>
    <p>paap1</p>
    <p>222d</p>
  </template>
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
