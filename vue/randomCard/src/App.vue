<template>
  <button @click="cardStore.randomCard">
    추첨하기
  </button>
  <button @click="cardStore.resetLucky">
    추첨리셋하기
  </button>
  <p>card {{ cardStore.card }}</p>
  
  <p>lucky{{ cardStore.lucky }}</p>
</template>

<script>
import { mapStores } from 'pinia'
import {useCardStore} from './store/card'

export default {
  data() {
    return{
     
    }
  },
  computed: {
    ...mapStores(useCardStore)
  },
  created() {
    this.cardStore.getCards()
  },
  methods: {

  }
}

</script>
