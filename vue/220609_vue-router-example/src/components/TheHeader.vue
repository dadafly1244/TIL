<template>
  <header>
    <RouterLink
      v-for="nav in navigations"
      :key="nav.path"
      :to="nav.path">
      {{ nav.name }}
    </RouterLink>
  </header>
</template>

<script>
export default {
  data(){
    return {
      navigations: [
        { path: '/', name: 'Home~'},
        { path: '/movies/tt4520988', name: 'Movie~'},
        { path: '/about', name: 'About~'},
        { path: '/abc', name: 'ABC~'},
      ]
    }
  },
  
}
</script>
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
