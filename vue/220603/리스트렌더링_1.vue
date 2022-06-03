<template>
  <ul>
    <li
      v-for="(fruit, index) in fruits"
      :key="fruit">
      {{ fruit }}-{{ index + 1 }}
    </li>
  </ul>
</template>
<script>
export default{
  data(){
    return{
      fruits:['Apple','Banana','Cherry']
    }
  }                                    
}
</script>