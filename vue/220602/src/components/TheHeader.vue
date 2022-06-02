<template>
  <header>
    <RouterLink
      v-for="nav in navigations"
      :key="nav.path"
      :to="nav.path">
      {{ nav.name }}
    </Routerlink>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        {path: '/', name: 'Home~'},
        {path: '/movies/tt4520988', name: 'Movie~'},
        {path: '/about', name: 'About~'},
        {path: '/abc', name: 'ABC~'}
      ]
    }
  }
}
</script>
