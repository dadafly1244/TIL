<template>
<div>
{{ message }}
</div>
<!-- 넌프롭은 컴포넌트이 최상위 컴포에 붙어야 하는데 뭐가 최상위인지 몰라서 설정이 안됌 -->
<!-- 최상위 컴포가 여러개 일땐 v-bind="$attrs" 로 명시 -->
<h1 v-bind="$attrs"  >123</h1>
</template>

<script>
export default {
  // 여기에 명시되어 있지 않다면 넌프롭
  //프롭스가 아닌 나머지 모근 속성
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.active{
  color: red;
}
[good="123"]{
  font-weight: bold;
}
</style>

