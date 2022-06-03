<template>
  <button @click="handler">
    Click me!
  </button>
  <!-- 사용자가 자주 껐다가 켰다가 해야하는 경우에는 v-show,처음에 일단 v-if으로 만들고 나중에 자주 사용자가 바꾸면 v-show로 바꾸기 -->
  <h1 v-show="isShow">
    hello??
  </h1>
</template>
<script>
export default{
  data(){
    return{
      isShow:false,
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
