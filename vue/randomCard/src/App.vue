<template>
  <button @click="cardStore.randomCard">
    추첨하기
  </button>
  {{ cardStore }}
</template>

<script>
import { mapStores } from 'pinia'
import {useCardStore} from './store/card'
import cards from './card'

export default {
  data() {
    return{
      cards
    }
  },
  computed: {
    ...mapStores(useCardStore)
  },
  created() {
    this.cardStore.getCards(this.cards)
  },
  methods: {

  }
}

</script>
