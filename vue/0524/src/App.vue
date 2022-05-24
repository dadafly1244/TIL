<template>
  <!-- <h1>{{ msg }}</h1>
  <TextField v-model="msg" /> -->
  <!-- <button @click="compName = 'ABC'">
    ABC
  </button>
  <button @click="compName = 'XYZ'">
    XYZ
  </button>
  <Component :is="compName" /> -->
  <div class="box">
    <Modal v-model="isShow">
      <h1>{{ msg }}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur libero numquam sint quam sapiente, nulla esse optio, blanditiis maiores quae quaerat, commodi aspernatur. Voluptatibus non adipisci sapiente quo quos.
      </p>
    </Modal>
  </div>
  <button @click="isShow = true">
    On Modal!
  </button>
  <div>
    Wow 
    <span>!</span>
  </div>
</template>

<script>
// import TextField from '~/components/TextField.vue'
// import ABC from '~/components/ABC.vue'
// import XYZ from '~/components/XYZ.vue'
import Modal from '~/components/Modal.vue'

//Options API 
export default {
  components: {
    // TextField,
    // ABC,
    // XYZ
    Modal
  },
  data() {
    return {
      msg: 'Hello vue!',
      compName: 'ABC',
      isShow: false
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  width: 200px;
  height: 200px;
  position:fixed;
  bottom: 0;
  right: 0;
  border: 4px solid;
  background-color: red;
  transform: scale(1);
}
</style>
