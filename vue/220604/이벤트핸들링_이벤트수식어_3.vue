<template>
  <!-- @click.once="handler" 특정 이벤트가 발생했을때 handler라는 메서드를 한번만 실행해주는 이벤트 수식어 -->
  <!-- @click.prevent.once="handler" 체이닝으로 기본동작방지 + 메서드 한번만 실행 -->
  <a
    href="https://naver.com"
    target="_blank"
    @click.prevent.once="handler">
    NAVER
  </a>
</template>
<script>
export default{
  methods:{
    handler(){
      console.log('ABC!')
    }
  }
}
</script>
