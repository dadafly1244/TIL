<template>
  <div>
    {{ message }}
  </div>
  <h1
    v-bind="$attrs"
    @click="$attrs">
    123
  </h1>
</template>

<script>
export default { 
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}

</script>

<style scoped lang="scss">
.active {
  color: red;
}
[good="123"] {
  font-weight: bold;
}
</style>
