<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
  export default {
    props: {
      modelValue: {
        type: String,
        default: ''

      }
    },
    emits: ['update:modelValue']
  }
</script>

<style scoped>
  input {
    background-color: red ;
  }
</style>
