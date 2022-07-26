<template>
  <header>
    <RouterLink
      to="/"
      active-class="active">
      q
      Home...
    </RouterLink>
    <RouterLink
      to="/about"
      active-class="active">
      About...
    </RouterLink>
  </header>
</template>

<script>
export default {
  mounted() {
    this.$router
    this.$route
  }
}

</script>
<style scoped lang="scss">
.active {
  color: red;
  font-weight: bold;
}
</style>
