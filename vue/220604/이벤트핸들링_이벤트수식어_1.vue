<template>
  <a
    href="https://naver.com"
    target="_blank"
    @click="handler">
    NAVER
  </a>
</template>
<script>
export default{
  methods:{
    handler(event){
      // 기본동작 방지// html에서 a 요소의 기본 동작을 실행하지 않고 메서드만 실행하겠다.
      event.preventDefault()
      console.log('ABC!')
    }
  }
}
</script>
