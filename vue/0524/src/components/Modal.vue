<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="modal">
      <div
        class="bg"
        @click="$emit('update:modelValue', false)"></div>
      <div class="contents">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean, 
      required: true
    }
  },
  emits: ['update:modelValue']
}
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .bg{
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.3);
  }
  .contents {
    width: 400px;
    max-height: calc(100% - 100px);
    background-color: #fff;
    position: relative;
    overflow: auto;
  }
}
</style>
