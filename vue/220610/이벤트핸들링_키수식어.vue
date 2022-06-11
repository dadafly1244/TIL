<template>
  <input
    type="text"
    @keydown.enter="handler" />
</template>
<!-- @keydown.ctrl.shift.a = "handler" -->

<script>
export default{
  methods:{
    handler(){
    console.log('enter!')
    }
 }
}
</script>
