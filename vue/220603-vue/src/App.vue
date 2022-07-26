<template>
  <MyBtn>Banana</MyBtn>
  <MyBtn :color="color">
    <span style="color: red;">Apple</span>
  </MyBtn>
  <MyBtn
    large
    color="orange">
    Banana
  </MyBtn>
  <MyBtn>Cherry</MyBtn>
</template> 
<script>
import MyBtn from'~/components/MyBtn.vue'
export default{
  components: {
    MyBtn
  }, 
  data() {
    return {
      color: '#000'
    }
  }
}
</script>
