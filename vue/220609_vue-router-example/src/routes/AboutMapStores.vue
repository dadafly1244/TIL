
<template>
  <h1>About!</h1>
  <RouterLink to="/about/name">
    name~
  </RouterLink>
  <RouterView />
 
  <div>{{ messageStore.message }}</div>
  <div> {{ messageStore.reversedMessage }} </div>
  <button @click="messageStore.reverseMessage">
    reverse!
  </button>
  <button @click="messageStore.message = 'heropy?!?' ">
    heropy
  </button>
</template>

<script>
// import {mapState,mapActions} from 'pinia'
import {mapStores} from 'pinia'
import {useMessageStore} from '~/store/message'

export default {
computed: {
  ...mapStores([useMessageStore])
}
}
</script>
