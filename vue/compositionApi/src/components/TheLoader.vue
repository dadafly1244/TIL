<template>
  <div
    v-if="loading"
    :style="{ 
      width: `${size}px`,
      height: `${size}px`,
      padding 
    }"
    :class="{
      absolute,
      fixed
    }"
    class="loader-wrapper">
    <div
      :style="{
        borderWidth: `${width}px`,
        borderColor: color
      }"
      class="loader"></div>
  </div>
</template>

<script setup lang="ts">
  defineProps({ //명시적으로 vue에서 가지고 오는 것이었는데, 전역으로 변경되어서 그냥 쓸수 있음
    loading: {
      type: Boolean,
      default: true
    },
    padding: {
      type: String,
      default: '0'
    },
    size: {
      type: Number,
      default: 22
    },
    width: {
      type: Number,
      default: 3
    },
    color: {
      type: String,
      default: '#F86A05'
    },
    absolute: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  })
  //defineEmits()도 전역!!
</script>

<style lang="scss" scoped>
.loader-wrapper {
  flex-shrink: 0;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  position: relative;
  &.absolute {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  &.fixed {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}
.loader {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  border-style: solid;
  border-radius: 50%;
  border-top-color: rgba(black,.1) !important;
  box-sizing: border-box;
  animation: spin 1.5s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
