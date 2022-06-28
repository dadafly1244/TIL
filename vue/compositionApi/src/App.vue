<template>
  <main>
    <LNB />
    <div class="workspace">
      <TheHeader />
      <div class="workspace__contents">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
//컴포지션 api는 사용할 컴포넌트를 import만 하면 사용할 수 있음!
import LNB from '~/components/LNB.vue'
import TheHeader from '~/components/TheHeader.vue'
</script>

<style lang="scss">
#app {
  color: $color-font;
  font-family: 'Noto Sans KR', sans-serif;
}
</style>

<style scoped lang="scss">
main {
  display: flex;
  height: 100vh;  
  .workspace {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    &__contents {
      flex-grow: 1;
      overflow-y: auto;
    }
  }
}
</style>
