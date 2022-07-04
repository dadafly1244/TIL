<script setup>
import Mybutton from './components/Mybutton.vue'

</script>

<template>
  <!-- 전역등록 -->
  <BaseCard>
    <h1>BaseCard</h1>
  </BaseCard>
  <base-card>
    <h1>base-card</h1>
  </base-card>

  <!-- 지역등록 -->
  <Mybutton />
  <Mybutton class="large" />
</template>

