<template>
  <h1>{{ count }}</h1>
  <button @click="increase">
    INCREASE
  </button>
</template>

<script>

import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('count', [
      'count',
    ])
    // count() {
    //   return this.$store.state.count.count
    // }
  },
  methods: {
    ...mapActions('count', [
      'increase'
    ])
    // increase() {
    //   this.$store.dispatch('count/increase')
    // }
  }
}

</script>

