<template>
  <!-- <button  >클릭하기</button> -->

  <!-- 2. 이미 class가 있는 경우 병합됨 -->
  <!-- <button class="font">클릭하기</button> -->

  <!-- 3.속성 상속 비활성화 -->
  <!-- <button v-bind="$attrs" >클릭하기 {{$attrs}}</button> -->

  <!-- 4. 폴스루 속성을 외부 <div>가 아닌 내부 <button>에 적용하고 싶을 때 -->
  <!-- <div class="yellowbox">
    <button v-bind="$attrs" >클릭하기 {{$attrs}}</button>
  </div> -->

  <!-- 5. js에서 폴스루 속성 접근하기  -->
  <button class="font">클릭하기</button>

</template>


<!-- 3. 4.속성 상속 비활성화 -->
<!-- <script> 
//<script setup>을 사용하는 경우 그냥 <script> 사용하여 옵션 선언
export default {
  inheritAttrs: false //컴포넌트가 속성을 자동으로 상속하지 않도록 설정함
}
</script>

<script setup>
// ...setup 로직
</script> -->

<!-- 5. js에서 폴스루 속성 접근하기 : 반응성이 필요하면 props 이용하기  -->
<!-- <script setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
console.log('attrs',attrs)
</script> -->


<style scoped>
  .font {
    background-color: green;
    font-size: 30px;
  }
  .large {
    background-color: red;
  }
  .yellowbox {
    border: 2px solid black;
    background-color: yellow;
  }
</style>