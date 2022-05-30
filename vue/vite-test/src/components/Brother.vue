<template>
  <h1>{{ count }}</h1>
  <h2>{{ $store.state.message.message }}</h2>
  <button @click="$store.dispatch('message/updateMessage','Good')">
    Update Message!
  </button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count.count
    }
  }
}

</script>

